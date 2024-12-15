module.exports = {
  resolve(...args) {
    const path = require("path");
    return path.resolve(__dirname + "/..", ...args);
  },
  import_upl() {
    return require(this.resolve("dist/upl"));
  }
};