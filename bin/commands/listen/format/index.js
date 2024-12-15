module.exports = async function(args, upl_utils) {
  const fs = require("fs");
  const path = require("path");
  const file = path.resolve(args[0]);
  if(!fs.lstatSync(file).isFile()) {
    throw new Error("Command «upl listen/format» only works on isolated files for now");
  }
  console.log("[*] Start listening for changes of file:")
  console.log("[*]   · " + file)
  require("chokidar").watch(file).on("change", async function() {
    const format_path = upl_utils.resolve("bin/commands/format/index.js");
    const format = require(format_path);
    await format([file], upl_utils);
  });
}