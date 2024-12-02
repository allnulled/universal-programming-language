require("chokidar").watch([
  __dirname + "/../src/api",
  __dirname + "/../src/syntax",
  __dirname + "/../test/scripts/input",
  __dirname + "/../test/test.js",
]).on("change", function(file) {
  try {
    require("child_process").execSync("npm run build", {
      cwd: __dirname + "/..",
      stdio: [process.stdin, process.stdout, process.stderr]
    });
  } catch (error) {
    console.log("[!] Error on «dev» event:");
    console.log(error);
  }
});