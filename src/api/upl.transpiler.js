class UPL_transpiler_tag_methods {
  constructor() {

  }
  tag_recursively(ast, indexes, asb, result = {}) {
    if (Array.isArray(asb)) {
      const tagging = [];
      for (let index_item = 0; index_item < asb.length; index_item++) {
        const asb_item = asb[index_item];
        const tagged_item = this.tag_recursively(ast, indexes.concat([index_item]), asb[index_item], result);
        tagging.push(tagged_item);
      }
      return tagging;
    } else if (typeof asb === "object") {
      const asb_type = asb.type;
      if (typeof asb_type !== "string") {
        throw new Error("Method «tag_recursively» can only work with objects that specify «type» property");
      }
      const asb_tagger = "tag_" + asb_type;
      if (!(asb_tagger in this)) {
        throw new Error("Method «" + asb_tagger + "» is not known by the tagr");
      }
      return this[asb_tagger](ast, indexes, asb, result);
    }
    throw new Error("Method «tag_recursively» can only work with objects");
  }
  tag_Language(ast, indexes, asb) {
    this.trace("tag_Language");
    const interception = this.intercept_tagging(ast, indexes, asb, "Language");
    if (interception) {
      return interception;
    }
    this.tag_recursively(ast, indexes.concat(["body"]), asb.body);
    return asb;
  }
  tag_Functional_molecule(ast, indexes, asb) {
    this.trace("tag_Functional_molecule");
    const interception = this.intercept_tagging(ast, indexes, asb, "Functional_molecule");
    if (interception) {
      return interception;
    }
    this.tag_recursively(ast, indexes.concat(["atoms"]), asb.atoms);
    return asb;
  }
  tag_Functional_atom(ast, indexes, asb) {
    this.trace("tag_Functional_atom");
    const interception = this.intercept_tagging(ast, indexes, asb, "Functional_atom");
    if (interception) {
      return interception;
    }
    this.tag_recursively(ast, indexes.concat(["name"]), asb.name);
    this.tag_recursively(ast, indexes.concat(["parameters"]), asb.parameters);
    return asb;
  }
  tag_Function_name_by_word(ast, indexes, asb) {
    this.trace("tag_Function_name_by_word");
    const interception = this.intercept_tagging(ast, indexes, asb, "Function_name_by_word");
    if (interception) {
      return interception;
    }
    return asb;
  }
  tag_Function_call_appendix_for_list_parameter(ast, indexes, asb) {
    this.trace("tag_Function_call_appendix_for_list_parameter");
    const interception = this.intercept_tagging(ast, indexes, asb, "Function_call_appendix_for_list_parameter");
    if (interception) {
      return interception;
    }
    this.tag_recursively(ast, indexes.concat(["list"]), asb.list, "Function_call_appendix_for_list_parameter");
    return asb;
  }
  tag_Variable(ast, indexes, asb) {
    this.trace("tag_Variable");
    const interception = this.intercept_tagging(ast, indexes, asb, "Variable");
    if (interception) {
      return interception;
    }
    return asb;
  }
  tag_Number(ast, indexes, asb) {
    this.trace("tag_Number");
    const interception = this.intercept_tagging(ast, indexes, asb, "Number");
    if (interception) {
      return interception;
    }
    return asb;
  }
  tag_Text(ast, indexes, asb) {
    this.trace("tag_Text");
    const interception = this.intercept_tagging(ast, indexes, asb, "Text");
    if (interception) {
      return interception;
    }
    return asb;
  }
  commit_syntax_tag(possible_syntax, ast, indexes, asb) {
    this.trace("commit_syntax_tag");
    const { tagger } = possible_syntax;
    if(typeof tagger === "function") {
      const extra_tags = tagger.call(this, ast, indexes, asb);
      if(typeof extra_tags === "object" && extra_tags !== null) {
        Object.assign(asb, extra_tags);
      }
    }
    return undefined;
  }
  intercept_tagging(ast, indexes, asb, syntax_type) {
    this.trace("intercept_tagging");
    if (this.allowed_molecule_syntaxes.indexOf(syntax_type) !== -1) {
      return this.intercept_tagging_as_molecule(ast, indexes, asb);
    }
    return undefined;
  }
  intercept_tagging_as_molecule(ast, indexes, asb) {
    this.trace("intercept_tagging_as_molecule");
    const possible_syntaxes = this.molecule_syntaxes;
    for (let index_possible = 0; index_possible < possible_syntaxes.length; index_possible++) {
      const possible_syntax = possible_syntaxes[index_possible];
      const is_matched = this.is_matched_syntax(possible_syntax, ast, indexes, asb);
      if (is_matched) {
        return this.commit_syntax_tag(possible_syntax, ast, indexes, asb);
      }
    }
  }
}

class UPL_transpiler_check_methods {
  constructor() {

  }
  molecule_syntaxes = [];
  allowed_molecule_syntaxes = [
    "Functional_molecule",
    "Covalent_molecule"
  ];
  intercept_checking(ast, indexes, asb, syntax_type) {
    this.trace("intercept_checking");
    if (this.allowed_molecule_syntaxes.indexOf(syntax_type) !== -1) {
      return this.intercept_checking_as_molecule(ast, indexes, asb);
    }
    return undefined;
  }
  commit_syntax_check(possible_syntax, ast, indexes, asb) {
    this.trace("commit_syntax_check");
    const { checker } = possible_syntax;
    if(typeof checker === "function") {
      return checker.call(this, ast, indexes, asb);
    }
    return undefined;
  }
  intercept_checking_as_molecule(ast, indexes, asb) {
    this.trace("intercept_checking_as_molecule");
    const possible_syntaxes = this.molecule_syntaxes;
    for (let index_possible = 0; index_possible < possible_syntaxes.length; index_possible++) {
      const possible_syntax = possible_syntaxes[index_possible];
      const is_matched = this.is_matched_syntax(possible_syntax, ast, indexes, asb);
      if (is_matched) {
        return this.commit_syntax_check(possible_syntax, ast, indexes, asb);
      }
    }
  }
  is_matched_syntax(possible_syntax, ast, indexes, asb) {
    this.trace("is_matched_syntax");
    const { formula: possible_formula, matcher: possible_matcher } = possible_syntax;
    let is_formula_match = true;
    Formula_matching: {
      if (typeof possible_formula === "string") {
        const formula_expanded = possible_formula.replace(/@/g, "\\\{\\\$[0-9]+\}");
        const formula_regex = new RegExp(formula_expanded);
        is_formula_match = formula_regex.test(asb.formula);
      } else {
        is_formula_match = possible_formula;
      }
      if (!is_formula_match) {
        return false;
      }
    }
    let is_matcher_match = false;
    Matcher_matching: {
      if (typeof matcher === "function") {
        is_matcher_match = possible_matcher.call(this, ast, indexes, asb);
      } else {
        is_matcher_match = possible_matcher;
      }
    }
    if (!is_matcher_match) {
      return false;
    }
    return true;
  }
  is_one_variable_in_group_only(asb) {
    if(Array.isArray(asb)) {
      if(asb.length !== 1) {
        return {
          rule: "is_one_variable_in_group_only",
          origin: "it complains because it only admits groups of 1 element"
        };
      }
      if(asb[0].type !== "Variable") {
        return {
          rule: "is_one_variable_in_group_only",
          origin: "it complains because it only admits groups of 1 element that is a variable name"
        };
      }
      return true;
    }
    return {
      rule: "is_one_variable_in_group_only",
      origin: "it complains because it does not recognize the structure provided"
    };
  }
  is_one_generative_in_group_only(asb) {
    if(Array.isArray(asb)) {
      if(asb.length !== 1) {
        return {
          rule: "is_one_generative_in_group_only",
          origin: "it complains because it only admits groups of 1 element"
        };
      }
      if(asb[0].is_sentence === true) {
        return {
          rule: "is_one_generative_in_group_only",
          origin: "it complains because it only admits groups of 1 element that is not a sentence"
        };
      }
      if(asb[0].supertype !== "Generative") {
        return {
          rule: "is_one_generative_in_group_only",
          origin: "it complains because it only admits groups of 1 element that is a generative"
        };
      }
      return true;
    }
    return {
      rule: "is_one_generative_in_group_only",
      origin: "it complains because it does not recognize the structure provided"
    };
  }
  check_Language(ast, indexes, asb) {
    this.trace("check_Language");
    const interception = this.intercept_checking(ast, indexes, asb, "Language");
    if (interception) {
      return interception;
    }
    this.check_recursively(ast, indexes.concat(["body"]), asb.body);
    return true;
  }
  check_Functional_molecule(ast, indexes, asb) {
    this.trace("check_Functional_molecule");
    const interception = this.intercept_checking(ast, indexes, asb, "Functional_molecule");
    if (interception) {
      return interception;
    }
    this.check_recursively(ast, indexes.concat(["atoms"]), asb.atoms);
    return true;
  }
  check_Functional_atom(ast, indexes, asb) {
    this.trace("check_Functional_atom");
    const interception = this.intercept_checking(ast, indexes, asb, "Functional_atom");
    if (interception) {
      return interception;
    }
    this.check_recursively(ast, indexes.concat(["name"]), asb.name);
    this.check_recursively(ast, indexes.concat(["parameters"]), asb.parameters);
    return true;
  }
  check_Function_name_by_word(ast, indexes, asb) {
    this.trace("check_Function_name_by_word");
    const interception = this.intercept_checking(ast, indexes, asb, "Function_name_by_word");
    if (interception) {
      return interception;
    }
    return true;
  }
  check_Function_call_appendix_for_list_parameter(ast, indexes, asb) {
    this.trace("check_Function_call_appendix_for_list_parameter");
    const interception = this.intercept_checking(ast, indexes, asb, "Function_call_appendix_for_list_parameter");
    if (interception) {
      return interception;
    }
    this.check_recursively(ast, indexes.concat(["list"]), asb.list, "Function_call_appendix_for_list_parameter");
    return true;
  }
  check_Variable(ast, indexes, asb) {
    this.trace("check_Variable");
    const interception = this.intercept_checking(ast, indexes, asb, "Variable");
    if (interception) {
      return interception;
    }
    return true;
  }
  check_Number(ast, indexes, asb) {
    this.trace("check_Number");
    const interception = this.intercept_checking(ast, indexes, asb, "Number");
    if (interception) {
      return interception;
    }
    return true;
  }
  check_Text(ast, indexes, asb) {
    this.trace("check_Text");
    const interception = this.intercept_checking(ast, indexes, asb, "Text");
    if (interception) {
      return interception;
    }
    return true;
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
    let output = "";
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
    output += this.transpile_recursively(ast, indexes.concat(["atoms"]), asb.atoms).join(".");
    return output;
  }
  transpile_Functional_atom(ast, indexes, asb) {
    this.trace("transpile_Functional_atom");
    const interception = this.intercept_transpilation(ast, indexes, asb, "Functional_atom");
    if (interception) {
      return interception;
    }
    let output = "";
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
    output += "(";
    output += this.transpile_recursively(ast, indexes.concat(["list"]), asb.list).join(", ");
    output += ")";
    return output;
  }
  transpile_Variable(ast, indexes, asb) {
    this.trace("transpile_Variable");
    const interception = this.intercept_transpilation(ast, indexes, asb, "Variable");
    if (interception) {
      return interception;
    }
    let output = "";
    output += asb.name;
    return output;
  }
  transpile_Number(ast, indexes, asb) {
    this.trace("transpile_Number");
    const interception = this.intercept_transpilation(ast, indexes, asb, "Number");
    if (interception) {
      return interception;
    }
    let output = "";
    output += asb.value;
    return output;
  }
  transpile_Text(ast, indexes, asb) {
    this.trace("transpile_Text");
    const interception = this.intercept_transpilation(ast, indexes, asb, "Text");
    if (interception) {
      return interception;
    }
    let output = "";
    output += JSON.stringify(asb.contents);
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
      return transpilation;
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

class Create_as_syntax_for_js {
  type = "Molecule";
  formula = "create( variable)?{@}(as{@})?"
  checker() {
    console.log("Checker triggered!");
  }
  tagger() {
    console.log("Tagger triggered!");
  }
  transpiler() {
    console.log("Transpiler triggered!");
  }
};

class UPL_transpiler extends UPL_reductor {
  static language = "javascript";
  static version = "1.0.0";
  syntaxes = [
    new Create_as_syntax_for_js(),
  ];
  trace(method) {
    console.log("[trace][transpiler][" + method + "]");
  }
  compact_syntaxes() {
    this.molecule_syntaxes = [];
    for (let index_syntax = 0; index_syntax < this.syntaxes.length; index_syntax++) {
      const syntax = this.syntaxes[index_syntax];
      const { type: syntax_type } = syntax;
      if (syntax_type === "Molecules") {
        this.molecule_syntaxes.push(syntax);
      }
    }
  }
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
    this.Compilation_error = class extends Error {
      constructor(message) {
        super("");
        this.name = "Compilation_error";
        this.message = JSON.stringify(message, null, 2);
      }
    };
  }
  transpile(ast_input) {
    this.trace("transpile");
    this.compact_syntaxes();
    const ast_origin = JSON.parse(JSON.stringify(ast_input));
    const tagged = this.tag_recursively(ast_origin, [], ast_origin);
    const checked = this.check_recursively(tagged, [], tagged);
    const transpiled = this.transpile_recursively(tagged, [], tagged);
    return { tagged, transpiled };
  }
}