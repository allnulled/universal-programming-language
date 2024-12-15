module.exports = function(args, upl_utils) {
  const child_process = require("child_process");
  const path_to_editor = upl_utils.resolve("docs/editor");
  child_process.spawn("npx", ["http-server", "-c-1", path_to_editor, "-o"])
}