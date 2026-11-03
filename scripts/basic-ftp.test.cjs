// Copyright IBM Corp. 2026

const assert = require("node:assert/strict");
const { spawnSync } = require("node:child_process");
const { once } = require("node:events");
const { readFileSync } = require("node:fs");
const { createServer } = require("node:net");
const { createRequire } = require("node:module");
const { join } = require("node:path");
const { pathToFileURL } = require("node:url");
const { test } = require("node:test");

// Resolve through the generator's actual transitive dependency chain, not a test dependency.
let dependencyRequire = createRequire(require.resolve("@openapitools/openapi-generator-cli/package.json"));
for (const name of [
  "proxy-agent",
  "pac-proxy-agent",
  "get-uri",
]) {
  dependencyRequire = createRequire(dependencyRequire.resolve(name));
}
const getUriPath = dependencyRequire.resolve("./index.js");
const { Client } = dependencyRequire("basic-ftp");
const modified = new Date("2026-01-02T03:04:05Z");
const payload = "local FTP compatibility check\n";

async function fixture(t, { mdtm = true, mlsd = false, foreignHost = false, epsv = true } = {}) {
  const sockets = new Set();
  const servers = [];
  const commands = [];
  const errors = [];
  const controlClosed = [];
  const track = (socket) => {
    sockets.add(socket);
    socket.on("close", () => sockets.delete(socket));
    socket.on("error", (error) => errors.push(error));
    return socket;
  };
  const server = createServer((socket) => {
    track(socket);
    controlClosed.push(new Promise((resolve) => socket.once("close", resolve)));
    let buffer = "";
    let dataSocket;
    let queue = Promise.resolve();
    socket.write("220 Local test server\r\n");
    const handle = async (line) => {
      commands.push(line);
      const [command] = line.split(" ");
      switch (command) {
        case "USER": socket.write("331 Password required\r\n"); break;
        case "PASS": socket.write("230 Logged in\r\n"); break;
        case "FEAT":
          socket.write(mlsd ? "211-Features\r\n MLST type;size;modify;\r\n211 End\r\n" : "211 No features\r\n");
          break;
        case "OPTS":
        case "TYPE":
        case "STRU":
        case "CWD": socket.write("200 OK\r\n"); break;
        case "PWD": socket.write('257 "/"\r\n'); break;
        case "MDTM":
          socket.write(line.includes("missing") ? "550 Not found\r\n" : mdtm ? "213 20260102030405\r\n" : "502 Unsupported\r\n");
          break;
        case "EPSV":
        case "PASV": {
          if ((!epsv || foreignHost) && command === "EPSV") {
            socket.write("502 Use PASV\r\n");
            break;
          }
          const dataServer = createServer();
          servers.push(dataServer);
          dataServer.listen(0, "127.0.0.1");
          await once(dataServer, "listening");
          dataSocket = once(dataServer, "connection").then(([connection]) => track(connection));
          const { port } = dataServer.address();
          socket.write(command === "EPSV"
            ? `229 Entering Extended Passive Mode (|||${port}|)\r\n`
            : `227 Entering Passive Mode (${foreignHost ? "192,0,2,1" : "127,0,0,1"},${port >> 8},${port & 255})\r\n`);
          break;
        }
        case "RETR":
        case "LIST":
        case "MLSD": {
          assert.ok(dataSocket, "Transfer must negotiate a passive connection");
          const data = await dataSocket;
          socket.write("150 Opening data connection\r\n");
          data.end(command === "RETR" ? payload : mlsd
            ? `type=file;size=${Buffer.byteLength(payload)};modify=20260102030405; file.txt\r\n`
            : `-rw-r--r-- 1 owner group ${Buffer.byteLength(payload)} Jan 02 2026 file.txt\r\n`);
          await once(data, "close");
          socket.write("226 Transfer complete\r\n");
          break;
        }
        case "QUIT": socket.end("221 Goodbye\r\n"); break;
        default: throw new Error(`Unexpected FTP command: ${line}`);
      }
    };
    socket.on("data", (chunk) => {
      buffer += chunk;
      let end;
      while ((end = buffer.indexOf("\r\n")) !== -1) {
        const line = buffer.slice(0, end);
        buffer = buffer.slice(end + 2);
        queue = queue.then(() => handle(line)).catch((error) => {
          errors.push(error);
          socket.destroy();
        });
      }
    });
  });
  servers.push(server);
  t.after(async () => {
    for (const socket of sockets) socket.destroy();
    await Promise.all(servers.map((listener) => new Promise((resolve, reject) => {
      listener.close((error) => error ? reject(error) : resolve());
    })));
    assert.deepEqual(errors, []);
  });
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  return {
    url: `ftp://test:password@127.0.0.1:${server.address().port}/file.txt`,
    commands,
    closed: () => Promise.all(controlClosed),
  };
}

test("get-uri downloads, caches and reports missing files", { timeout: 10000 }, async (t) => {
  const { getUri } = await import(pathToFileURL(getUriPath));
  const { url, commands, closed } = await fixture(t);
  const stream = await getUri(url, { timeout: 2000 });
  let contents = "";
  for await (const chunk of stream) contents += chunk;
  assert.equal(contents, payload);
  assert.equal(+stream.lastModified, +modified);
  await assert.rejects(getUri(url, { cache: stream }), { code: "ENOTMODIFIED" });
  await assert.rejects(getUri(url.replace("file.txt", "missing.txt")), { code: "ENOTFOUND" });
  assert.ok(commands.includes("USER test"));
  assert.ok(commands.includes("PASS password"));
  assert.ok(commands.includes("RETR /file.txt"));
  await closed();
});

test("get-uri uses MLSD when MDTM is unavailable", { timeout: 10000 }, async (t) => {
  const { getUri } = await import(pathToFileURL(getUriPath));
  const { url, commands, closed } = await fixture(t, { mdtm: false, mlsd: true });
  const stream = await getUri(url, { timeout: 2000 });
  let contents = "";
  for await (const chunk of stream) contents += chunk;
  assert.equal(contents, payload);
  assert.equal(+stream.lastModified, +modified);
  assert.ok(commands.some((command) => command.startsWith("MLSD")));
  await closed();
});

test("get-uri preserves missing-date behavior for Unix-only servers", { timeout: 10000 }, async (t) => {
  const { getUri } = await import(pathToFileURL(getUriPath));
  const { url, commands, closed } = await fixture(t, { mdtm: false });
  // Unix listings expose rawModifiedAt, not the unambiguous modifiedAt get-uri needs.
  await assert.rejects(getUri(url, { timeout: 2000 }), { code: "ENOTFOUND" });
  assert.ok(commands.some((command) => command.startsWith("LIST")));
  await closed();
});

for (const epsv of [true, false]) {
  test(`Client.list parses Unix listings over ${epsv ? "EPSV" : "PASV"}`, { timeout: 10000 }, async (t) => {
    const { url } = await fixture(t, { epsv });
    const parsed = new URL(url);
    const client = new Client(2000);
    try {
      await client.access({ host: parsed.hostname, port: Number(parsed.port) });
      const [file] = await client.list("/");
      assert.equal(file.name, "file.txt");
      assert.equal(file.size, Buffer.byteLength(payload));
      assert.equal(file.user, "owner");
      assert.equal(file.group, "group");
    } finally {
      client.close();
    }
  });
}

test("separate passive transfer hosts remain rejected", { timeout: 10000 }, async (t) => {
  const { url } = await fixture(t, { foreignHost: true });
  const parsed = new URL(url);
  const client = new Client(2000);
  try {
    await client.access({ host: parsed.hostname, port: Number(parsed.port) });
    await assert.rejects(client.list("/"), /PASV returned another host/);
  } finally {
    client.close();
  }
});

test("malformed Unix listings finish within a bounded subprocess", () => {
  const parser = dependencyRequire.resolve("basic-ftp/dist/parseListUnix.js");
  const result = spawnSync(process.execPath, ["-e", `
    const assert = require("node:assert/strict");
    const { testLine, parseLine } = require(${JSON.stringify(parser)});
    const malformed = "-rw-r--r-- 1 " + "owner ".repeat(100000);
    assert.equal(testLine(malformed), false);
    assert.equal(parseLine(malformed), undefined);
  `], { timeout: 2000, encoding: "utf8" });
  assert.ifError(result.error);
  assert.equal(result.status, 0, result.stderr);
});

test("the lockfile and get-uri resolve only the reviewed basic-ftp version", () => {
  assert.equal(dependencyRequire("basic-ftp/package.json").version, "6.2.5");
  const lockfile = readFileSync(join(__dirname, "../pnpm-lock.yaml"), "utf8");
  const versions = [...lockfile.matchAll(/^  basic-ftp@([^:]+):/gm)].map((match) => match[1]);
  assert.ok(versions.length > 0);
  assert.deepEqual([...new Set(versions)], ["6.2.5"]);
});
