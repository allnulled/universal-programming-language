class UPL_transpiler_tag_methods {
  constructor() {

  }
  tag_recursively(ast, indexes, asb, result = {}) {
    return ast;
    /*
    if (Array.isArray(asb)) {
      const tagging = [];
      for (let index_item = 0; index_item < asb.length; index_item++) {
        const asb_item = asb[index_item];
        const tagd_item = this.tag_recursively(ast, indexes.concat([index_item]), asb[index_item], result);
        tagging.push(tagd_item);
      }
      return tagging.join("\n");
    } else if (typeof asb === "object") {
      const asb_type = asb.type;
      if (typeof asb_type !== "string") {
        throw new Error("Method «tag_recursively» can only work with objects that specify «type» property");
      }
      const asb_tagr = "tag_" + asb_type;
      if (!(asb_tagr in this)) {
        throw new Error("Method «" + asb_tagr + "» is not known by the tagr");
      }
      return this[asb_tagr](ast, indexes, asb, result);
    }
    throw new Error("Method «tag_recursively» can only work with objects");
    //*/
  }
  intercept_tagging(ast, indexes, asb, syntax_type) {
    this.trace("intercept_tagging");
    console.log("Interceptable type: " + syntax_type);
    return undefined;
  }
  tag_Language(ast, indexes, asb) {
    this.trace("tag_Language");
    const interception = this.intercept_tagging(ast, indexes, asb, "Language");
    if (interception) {
      return interception;
    }
    let output = "Language.";
    output += this.tag_recursively(ast, indexes.concat(["body"]), asb.body);
    return output;
  }
  tag_Functional_molecule(ast, indexes, asb) {
    this.trace("tag_Functional_molecule");
    const interception = this.intercept_tagging(ast, indexes, asb, "Functional_molecule");
    if (interception) {
      return interception;
    }
    let output = "";
    output += "Functional_molecule.";
    output += this.tag_recursively(ast, indexes.concat(["atoms"]), asb.atoms);
    return output;
  }
  tag_Functional_atom(ast, indexes, asb) {
    this.trace("tag_Functional_atom");
    const interception = this.intercept_tagging(ast, indexes, asb, "Functional_atom");
    if (interception) {
      return interception;
    }
    let output = "";
    output += "Functional_atom.";
    output += this.tag_recursively(ast, indexes.concat(["name"]), asb.name);
    output += this.tag_recursively(ast, indexes.concat(["parameters"]), asb.parameters);
    return output;
  }
  tag_Function_name_by_word(ast, indexes, asb) {
    this.trace("tag_Function_name_by_word");
    const interception = this.intercept_tagging(ast, indexes, asb, "Function_name_by_word");
    if (interception) {
      return interception;
    }
    let output = "";
    output += "Function_name_by_word.";
    output += asb.id.replace(/ /g, "/");
    return output;
  }
  tag_Function_call_appendix_for_list_parameter(ast, indexes, asb) {
    this.trace("tag_Function_call_appendix_for_list_parameter");
    const interception = this.intercept_tagging(ast, indexes, asb, "Function_call_appendix_for_list_parameter");
    if (interception) {
      return interception;
    }
    let output = "";
    output += "Function_call_appendix_for_list_parameter.";
    output += this.tag_recursively(ast, indexes.concat(["list"]), asb.list, "Function_call_appendix_for_list_parameter");
    return output;
  }
  tag_Variable(ast, indexes, asb) {
    this.trace("tag_Variable");
    const interception = this.intercept_tagging(ast, indexes, asb, "Variable");
    if (interception) {
      return interception;
    }
    let output = "";
    output = "Variable.";
    return output;
  }
  tag_Number(ast, indexes, asb) {
    this.trace("tag_Number");
    const interception = this.intercept_tagging(ast, indexes, asb, "Number");
    if (interception) {
      return interception;
    }
    let output = "";
    output = "Number.";
    return output;
  }
  tag_Text(ast, indexes, asb) {
    this.trace("tag_Text");
    const interception = this.intercept_tagging(ast, indexes, asb, "Text");
    if (interception) {
      return interception;
    }
    let output = "";
    output = "Text.";
    return output;
  }
}

class UPL_transpiler_check_methods {
  constructor() {

  }
  intercept_checking(ast, indexes, asb, syntax_type) {
    this.trace("intercept_checking");
    console.log("Interceptable type: " + syntax_type);
    return undefined;
  }
  check_Language(ast, indexes, asb) {
    this.trace("check_Language");
    const interception = this.intercept_checking(ast, indexes, asb, "Language");
    if (interception) {
      return interception;
    }
    let output = "Language.";
    output += this.check_recursively(ast, indexes.concat(["body"]), asb.body);
    return output;
  }
  check_Functional_molecule(ast, indexes, asb) {
    this.trace("check_Functional_molecule");
    const interception = this.intercept_checking(ast, indexes, asb, "Functional_molecule");
    if (interception) {
      return interception;
    }
    let output = "";
    output += "Functional_molecule.";
    output += this.check_recursively(ast, indexes.concat(["atoms"]), asb.atoms);
    return output;
  }
  check_Functional_atom(ast, indexes, asb) {
    this.trace("check_Functional_atom");
    const interception = this.intercept_checking(ast, indexes, asb, "Functional_atom");
    if (interception) {
      return interception;
    }
    let output = "";
    output += "Functional_atom.";
    output += this.check_recursively(ast, indexes.concat(["name"]), asb.name);
    output += this.check_recursively(ast, indexes.concat(["parameters"]), asb.parameters);
    return output;
  }
  check_Function_name_by_word(ast, indexes, asb) {
    this.trace("check_Function_name_by_word");
    const interception = this.intercept_checking(ast, indexes, asb, "Function_name_by_word");
    if (interception) {
      return interception;
    }
    let output = "";
    output += "Function_name_by_word.";
    output += asb.id.replace(/ /g, "/");
    return output;
  }
  check_Function_call_appendix_for_list_parameter(ast, indexes, asb) {
    this.trace("check_Function_call_appendix_for_list_parameter");
    const interception = this.intercept_checking(ast, indexes, asb, "Function_call_appendix_for_list_parameter");
    if (interception) {
      return interception;
    }
    let output = "";
    output += "Function_call_appendix_for_list_parameter.";
    output += this.check_recursively(ast, indexes.concat(["list"]), asb.list, "Function_call_appendix_for_list_parameter");
    return output;
  }
  check_Variable(ast, indexes, asb) {
    this.trace("check_Variable");
    const interception = this.intercept_checking(ast, indexes, asb, "Variable");
    if (interception) {
      return interception;
    }
    let output = "";
    output = "Variable.";
    return output;
  }
  check_Number(ast, indexes, asb) {
    this.trace("check_Number");
    const interception = this.intercept_checking(ast, indexes, asb, "Number");
    if (interception) {
      return interception;
    }
    let output = "";
    output = "Number.";
    return output;
  }
  check_Text(ast, indexes, asb) {
    this.trace("check_Text");
    const interception = this.intercept_checking(ast, indexes, asb, "Text");
    if (interception) {
      return interception;
    }
    let output = "";
    output = "Text.";
    return output;
  }
  check_recursively(ast, indexes, asb, result = {}) {
    if (Array.isArray(asb)) {
      const checking = [];
      for (let index_item = 0; index_item < asb.length; index_item++) {
        const asb_item = asb[index_item];
        const checkd_item = this.check_recursively(ast, indexes.concat([index_item]), asb[index_item], result);
        checking.push(checkd_item);
      }
      return checking.join("\n");
    } else if (typeof asb === "object") {
      const asb_type = asb.type;
      if (typeof asb_type !== "string") {
        throw new Error("Method «check_recursively» can only work with objects that specify «type» property");
      }
      const asb_checkr = "check_" + asb_type;
      if (!(asb_checkr in this)) {
        throw new Error("Method «" + asb_checkr + "» is not known by the checkr");
      }
      return this[asb_checkr](ast, indexes, asb, result);
    }
    throw new Error("Method «check_recursively» can only work with objects");
  }
}

class UPL_transpiler_transpile_methods {
  intercept_transpilation(ast, indexes, asb, syntax_type) {
    this.trace("intercept_transpilation");
    console.log("Interceptable type: " + syntax_type);
    return undefined;
  }
  transpile_Language(ast, indexes, asb) {
    this.trace("transpile_Language");
    const interception = this.intercept_transpilation(ast, indexes, asb, "Language");
    if (interception) {
      return interception;
    }
    let output = "Language.";
    output += this.transpile_recursively(ast, indexes.concat(["body"]), asb.body);
    return output;
  }
  transpile_Functional_molecule(ast, indexes, asb) {
    this.trace("transpile_Functional_molecule");
    const interception = this.intercept_transpilation(ast, indexes, asb, "Functional_molecule");
    if (interception) {
      return interception;
    }
    let output = "";
    output += "Functional_molecule.";
    output += this.transpile_recursively(ast, indexes.concat(["atoms"]), asb.atoms);
    return output;
  }
  transpile_Functional_atom(ast, indexes, asb) {
    this.trace("transpile_Functional_atom");
    const interception = this.intercept_transpilation(ast, indexes, asb, "Functional_atom");
    if (interception) {
      return interception;
    }
    let output = "";
    output += "Functional_atom.";
    output += this.transpile_recursively(ast, indexes.concat(["name"]), asb.name);
    output += this.transpile_recursively(ast, indexes.concat(["parameters"]), asb.parameters);
    return output;
  }
  transpile_Function_name_by_word(ast, indexes, asb) {
    this.trace("transpile_Function_name_by_word");
    const interception = this.intercept_transpilation(ast, indexes, asb, "Function_name_by_word");
    if (interception) {
      return interception;
    }
    let output = "";
    output += "Function_name_by_word.";
    output += asb.id.replace(/ /g, "/");
    return output;
  }
  transpile_Function_call_appendix_for_list_parameter(ast, indexes, asb) {
    this.trace("transpile_Function_call_appendix_for_list_parameter");
    const interception = this.intercept_transpilation(ast, indexes, asb, "Function_call_appendix_for_list_parameter");
    if (interception) {
      return interception;
    }
    let output = "";
    output += "Function_call_appendix_for_list_parameter.";
    output += this.transpile_recursively(ast, indexes.concat(["list"]), asb.list, "Function_call_appendix_for_list_parameter");
    return output;
  }
  transpile_Variable(ast, indexes, asb) {
    this.trace("transpile_Variable");
    const interception = this.intercept_transpilation(ast, indexes, asb, "Variable");
    if (interception) {
      return interception;
    }
    let output = "";
    output = "Variable.";
    return output;
  }
  transpile_Number(ast, indexes, asb) {
    this.trace("transpile_Number");
    const interception = this.intercept_transpilation(ast, indexes, asb, "Number");
    if (interception) {
      return interception;
    }
    let output = "";
    output = "Number.";
    return output;
  }
  transpile_Text(ast, indexes, asb) {
    this.trace("transpile_Text");
    const interception = this.intercept_transpilation(ast, indexes, asb, "Text");
    if (interception) {
      return interception;
    }
    let output = "";
    output = "Text.";
    return output;
  }
  transpile_recursively(ast, indexes, asb, result = {}) {
    if (Array.isArray(asb)) {
      const transpilation = [];
      for (let index_item = 0; index_item < asb.length; index_item++) {
        const asb_item = asb[index_item];
        const transpiled_item = this.transpile_recursively(ast, indexes.concat([index_item]), asb[index_item], result);
        transpilation.push(transpiled_item);
      }
      return transpilation.join("\n");
    } else if (typeof asb === "object") {
      const asb_type = asb.type;
      if (typeof asb_type !== "string") {
        throw new Error("Method «transpile_recursively» can only work with objects that specify «type» property");
      }
      const asb_transpiler = "transpile_" + asb_type;
      if (!(asb_transpiler in this)) {
        throw new Error("Method «" + asb_transpiler + "» is not known by the transpiler");
      }
      return this[asb_transpiler](ast, indexes, asb, result);
    }
    throw new Error("Method «transpile_recursively» can only work with objects");
  }
}

class UPL_transpiler extends UPL_reductor {
  static language = "javascript";
  static version = "1.0.0";
  syntaxes = [];
  getAllMethodNames(obj, depth = Infinity) {
    const methods = new Set();
    while (depth-- && obj) {
      for (const key of Reflect.ownKeys(obj)) {
        methods.add(key)
      }
      obj = Reflect.getPrototypeOf(obj);
    }
    return [...methods].filter(m => [
      "constructor",
      "__proto__",
      "__defineGetter__",
      "__defineSetter__",
      "__lookupGetter__",
      "__lookupSetter__",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toString",
      "toLocaleString",
      "valueOf",
    ].indexOf(m) === -1);
  }
  inherit_methods_from(obj) {
    this.trace("inherit_methods_from");
    const methods = this.getAllMethodNames(obj);
    for (let method_index in methods) {
      const method_id = methods[method_index];
      if (method_id in this) {
        throw new Error("Cannot overwrite method «" + method_id + "» by «inherit_methods_froms» method");
      }
      const val = obj[method_id];
      if (typeof val === "function") {
        this[method_id] = val.bind(this);
      } else {
        this[method_id] = val;
      }
    }
  }
  constructor(...args) {
    super(...args);
    this.inherit_methods_from(new UPL_transpiler_transpile_methods());
    this.inherit_methods_from(new UPL_transpiler_check_methods());
    this.inherit_methods_from(new UPL_transpiler_tag_methods());
  }
  transpile(ast_input) {
    this.trace("transpile");
    const ast_origin = JSON.parse(JSON.stringify(ast_input));
    const ast_tagged = this.tag_recursively(ast_origin, [], ast_origin);
    const checkings = this.check_recursively(ast_tagged, [], ast_tagged);
    return this.transpile_recursively(ast_tagged, [], ast_tagged);
  }
}