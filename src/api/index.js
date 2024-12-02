const UPL_parser = (typeof window !== "undefined") ? window.UPL_parser : global.UPL_parser;
class UPL {
  static classes = {
    parser: UPL_parser,
    formatter: UPL_formatter,
    transpiler: UPL_transpiler
  };
  static default_parse_options = {
    trace: true,
    mode: "ast", // or "transpile" or "format"
  };
  static parse(text, options = this.default_parse_options) {
    if(options.mode === "ast") {
      return this.parse_to_ast(text, options);
    } else if(options.mode === "format") {
      return this.format(text, options);
    } else if(options.mode === "transpile") {
      throw new Error("Mode of parsing «transpile» is not supported through static method, as «upl» is unopinionated on interpretation. Create a transpiler instead, specifying all the known syntaxes, and use the dynamic method.");
    }
    throw new Error("Mode of parsing not identified: «" + options.mode + "»");
  }
  static parse_to_ast(...args) {
    return this.classes.parser.parse(...args);
  };
  static format(text, options = this.default_parse_options) {
    const ast = this.parse_to_ast(text, options);
    const formatter = new this.classes.formatter();
    return formatter.format(ast);
  }
  static create(...args) {
    return new this(...args);
  }
  static createTranspiler(known_syntaxes = []) {
    const clazz = this;
    const upl_instance = new clazz();
    upl_instance.classes.transpiler = class extends UPL_transpiler {
      syntaxes = known_syntaxes;
    };
    return upl_instance;
  }
  constructor(classes = {}) {
    this.classes = {};
    Object.assign(this.classes, this.constructor.classes, classes);
  }
  parse(text, options = this.default_parse_options) {
    if(options.mode === "ast") {
      return this.parse_to_ast(text, options);
    } else if(options.mode === "format") {
      return this.format(text, options);
    } else if(options.mode === "transpile") {
      return this.transpile(text, options);
    }
    throw new Error("Mode of parsing not identified: «" + options.mode + "»");
  }
  parse_to_ast = this.constructor.parse_to_ast;
  format=this.constructor.format;
  transpile(text, options = this.default_parse_options) {
    const ast = this.parse_to_ast(text, options);
    const transpiler = new this.classes.transpiler();
    return transpiler.transpile(ast);
  }
}
UPL.default = UPL;
module.exports = UPL;