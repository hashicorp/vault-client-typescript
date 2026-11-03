## @hashicorp/vault-client-typescript@2.2.0

This generator creates TypeScript/JavaScript client that utilizes [Fetch API](https://fetch.spec.whatwg.org/). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Generator dependency compatibility

The scoped `get-uri>basic-ftp` override in `pnpm-workspace.yaml` upgrades the
generator's FTP transport to 6.2.5 because get-uri 8.0.1 still requests the
vulnerable 5.x line. The generator CLI remains pinned to 2.40.1.

Run `pnpm test:basic-ftp` after changing this override. The checks resolve through
the generator's installed dependency chain and use an ephemeral loopback FTP
server for downloads, caching, missing files, MLSD fallback, and Unix listings
over EPSV/PASV. They also check the lockfile for older copies and bound malformed
Unix listing parsing in a subprocess.

Basic-ftp 6 rejects PASV responses pointing to a different host by default; this
safer behavior is retained. FTP servers relying on separate data hosts are not
compatible with this default. Unix-only listings without MDTM still lack the
unambiguous modification date get-uri requires, preserving its existing
`ENOTFOUND` behavior. These checks cover plain FTP; they do not exercise FTPS.

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install @hashicorp/vault-client-typescript@2.2.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```
