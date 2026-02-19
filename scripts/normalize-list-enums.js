/**
 * Copyright IBM Corp. 2026
 */
const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "../src");
const apisDir = path.join(srcDir, "apis");
// regex to match the generated list enum definitions
const ENUM_PATTERN =
  /\/\*\*[\s\*\@]+export[\s\*\@]+enum \{string\}\s+\*\/\s+export enum \w+ListEnum \{[\s\n]+TRUE = 'true'[\s\n]+\}/g;
// regex to match references to the generated list enums (e.g. TransitListKeysListEnum)
const REFERENCE_PATTERN = /\b\w+ListEnum\b/g;
// the single shared enum definition to be added to runtime.ts
const LIST_ENUM = `export enum ListEnum {
  TRUE = 'true'
};
`;

function processFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  // track if we made any modifications to determine if we need to write back to the file
  let modified = false;

  // check if there are exported list enums in the file
  if (ENUM_PATTERN.test(content)) {
    // remove the redundant enum definitions
    content = content.replace(ENUM_PATTERN, "");
    // * as runtime is imported in all api files
    // replace references of removed enums (e.g., TransitListKeysListEnum -> runtime.ListEnum)
    content = content.replace(REFERENCE_PATTERN, (match) => {
      return match !== "runtime.ListEnum" ? "runtime.ListEnum" : match;
    });
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log(
      `Successfully replaced list enums in ${path.basename(filePath)}!`,
    );
  }
}

// Simple recursive directory walk
function walk(dir) {
  fs.readdirSync(dir).forEach((file) => {
    // ignore index.ts since it only re-exports the apis
    if (file !== "index.ts") {
      const fullPath = path.join(dir, file);
      if (fs.lstatSync(fullPath).isDirectory()) {
        walk(fullPath);
      } else if (file.endsWith(".ts")) {
        processFile(fullPath);
      }
    }
  });
}

function exportSharedListEnum() {
  const runtimeFile = path.join(srcDir, "runtime.ts");
  let content = fs.existsSync(runtimeFile)
    ? fs.readFileSync(runtimeFile, "utf8")
    : "";
  // if there were no changes to runtime.ts during the generator run then the export may already exist
  if (!content.includes(LIST_ENUM)) {
    content = `${content}\n${LIST_ENUM}`;
    fs.writeFileSync(runtimeFile, content, "utf8");
    console.log("Added export for ListEnum in runtime.ts!");
  }
}

// first add an export to the runtime file with the shared enum definition
// * is imported from runtime in each api file so ListEnum will be available without needing to modify imports
console.log("Exporting shared ListEnum in runtime.ts...");
exportSharedListEnum();

// check all files in directory for list enums
console.log("Replacing generated list enum definitions with shared one...");
walk(apisDir);
console.log("ListEnum replacement complete!");
