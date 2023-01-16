/* eslint-disable */

const { build } = require("esbuild");
const httpImport = require("./http-import-plugin");
const htmlImport = require("./html-plugin");

async function runBuild() {
  build({
    absWorkingDir: process.cwd(),
    entryPoints: ["./src/plugin.jsx"],
    outdir: "dist-plugin",
    bundle: true,
    format: "esm",
    splitting: true,
    sourcemap: true,
    metafile: true,
    plugins: [
      httpImport(),
      htmlImport()
    ],
  }).then(() => {
    console.log("🚀 Build Finished!");
  });
}

runBuild();
