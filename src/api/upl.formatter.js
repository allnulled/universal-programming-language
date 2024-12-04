class UPL_formatter extends UPL_reductor {
  constructor(...args) {
    super(...args);
    this.max_expression_chars = 50;
    this.tab_char = "  ";
    this.tab_cursor = 0;
  }
  get_max_line_size() {
    return this.max_expression_chars - (this.tab_cursor*this.tab_char.length);
  }
  should_tab_chained_pipe_appendix(ast, indexes, asb) {
    this.trace("should_tab_chained_pipe_appendix");
    let parent_generative = undefined;
    Get_piped_generative: {
      let val = ast;
      const indexes_for_generative = [].concat(indexes);
      indexes_for_generative.splice(indexes_for_generative.length - 2);
      for(let index=0; index<indexes_for_generative.length; index++) {
        const key = indexes_for_generative[index];
        val = val[key];
      }
      parent_generative = val;
    }
    const how_many_appendixes_has_parent = parent_generative.extended_by.length;
    const current_position = indexes[indexes.length-1];
    const is_first_pipe = current_position === 0 ? true : (parent_generative.extended_by[current_position-1].type !== "Pipe_appendix");
    const is_generative_0 = parent_generative.script === 1;
    if(is_first_pipe && is_generative_0) {
      return false;
    }
    if(how_many_appendixes_has_parent > 1) {
      return true;
    }
    return false;
  }
  trace(method) {
    console.log("[trace][formatter][" + method + "]");
  }
  tab(mov = 0) {
    if (mov) {
      this.tab_cursor += mov;
    }
    return this.tab_char.repeat(this.tab_cursor);
  }
  format(ast) {
    this.trace("format");
    return this.format_recursively(ast, [], ast).trim();
  }
  format_Language(ast, indexes, asb) {
    this.trace("format_Language");
    let code = "";
    code += this.format_recursively(ast, [].concat(indexes).concat(["header"]), asb.header);
    code += this.format_recursively(ast, [].concat(indexes).concat(["body"]), asb.body);
    // code += this.format_recursively(ast, [].concat(indexes).concat(["footer"]), );
    return code;
  }
  format_Preblock(ast, indexes, asb) {
    this.trace("format_Preblock");
    const declarations = asb.declarations;
    let code = "";
    for (let prop in declarations) {
      const val = declarations[prop];
      code += this.tab(0);
      code += "#";
      code += prop;
      code += "=";
      code += val;
      code += "\n";
    }
    return code;
  }
  format_object_key(ast, indexes, key) {
    this.trace("format_object_key");
    if(typeof key === "string") {
      return key;
    } else {
      return this.format_recursively(ast, indexes, key);
    }
  }
  format_Object(ast, indexes, asb) {
    this.trace("format_Object");
    const props = asb.properties;
    let code = "";
    let must_tab = false;
    if (asb.script > this.get_max_line_size()) {
      must_tab = true;
    }
    code += "object{";
    if(must_tab) {
      this.tab(1);
    }
    if (props && props.length) {
      for (let index = 0; index < props.length; index++) {
        const prop = props[index];
        const { key, val } = prop;
        if (must_tab) {
          code += "\n";
          code += this.tab(0);
        } else {
          code += " ";
        }
        code += this.format_object_key(ast, [].concat(indexes).concat(["properties", index, "key"]), key);
        code += "=";
        code += this.format_recursively(ast, [].concat(indexes).concat(["properties", index, "val"]), val);
      }
    }
    if (must_tab) {
      code += "\n";
      code += this.tab(-1);
    } else {
      code += " ";
    }
    code += "}";
    return code;
  }
  format_Function_call_appendix_for_text_parameter(ast, indexes, asb) {
    this.trace("format_Function_call_appendix_for_text_parameter");
    let code = "";
    code += "{{";
    code += asb.text;
    code += "}}";
    return code;
  }
  format_Function_call_appendix_for_empty_parameter(ast, indexes, asb) {
    this.trace("format_Function_call_appendix_for_empty_parameter");
    return "!";
  }
  format_Function_call_appendix_for_list_parameter(ast, indexes, asb) {
    this.trace("format_Function_call_appendix_for_list_parameter");
    let must_tab = false;
    if (asb.script > this.get_max_line_size()) {
      must_tab = true;
    }
    let code = "";
    Intro: {
      code += "{";
    }
    Body: {
      const list = asb.list;
      if (list.length === 0) {
        break Body;
      }
      if (must_tab) {
        this.tab(1);
      }
      for (let index_list = 0; index_list < list.length; index_list++) {
        const item = list[index_list];
        if (must_tab) {
          code += "\n";
          code += this.tab(0);
        } else {
          code += " ";
        }
        code += this.format_recursively(ast, [].concat(indexes).concat(["list", index_list]), item);
      }
      if (must_tab) {
        code += "\n";
        this.tab(-1);
        code += this.tab(0);
      } else {
        code += " ";
      }
    }
    Bye: {
      code += "}";
    }
    return code;
  }
  format_Functional_atom(ast, indexes, asb) {
    this.trace("format_Functional_atom");
    let code = "";
    Set_name: {
      if (asb.name.aliased) {
        code += "#";
        code += asb.name.aliased;
      } else {
        code += asb.name.id;
      }
    }
    Set_parameters: {
      if(asb.parameters) {
        code += this.format_recursively(ast, [].concat(indexes).concat(["parameters"]), asb.parameters);
      }
    }
    return code;
  }
  format_Functional_molecule(ast, indexes, asb) {
    this.trace("format_Functional_molecule");
    let code = "";
    const atoms = asb.atoms;
    code += this.format_recursively(ast, [].concat(indexes).concat(["atoms"]), atoms, "").join("");
    return code;
  }
  format_Number(ast, indexes, asb) {
    this.trace("format_Number");
    return asb.value;
  }
  format_Text(ast, indexes, asb) {
    this.trace("format_Text");
    return JSON.stringify(asb.contents);
  }
  format_Variable(ast, indexes, asb) {
    this.trace("format_Variable");
    return "@" + ((asb.name === null) ? "" : asb.name);
  }
  format_Access_by_dot_appendix(ast, indexes, asb) {
    this.trace("format_Access_by_dot_appendix");
    let code = "";
    code += ".";
    code += asb.access;
    return code;
  }
  format_Access_by_accessor_appendix(ast, indexes, asb) {
    this.trace("format_Access_by_accessor_appendix");
    let code = "";
    code += "[";
    code += this.format_recursively(ast, [].concat(indexes).concat(["access"]), asb.access);
    code += "]";
    return code;
  }
  format_Call_appendix(ast, indexes, asb) {
    this.trace("format_Call_appendix");
    let code = "";
    code += "{";
    if (asb.script > this.get_max_line_size()) {
      code += "\n";
      code += this.tab(1);
      code += this.format_recursively(ast, [].concat(indexes).concat(["parameters"]), asb.parameters);
      code += "\n";
      code += this.tab(-1);
    } else {
      code += " ";
      code += this.format_recursively(ast, [].concat(indexes).concat(["parameters"]), asb.parameters);
      code += " ";
    }
    code += "}";
    return code;
  }
  format_Pipe_appendix(ast, indexes, asb) {
    this.trace("format_Pipe_appendix");
    const { operator, pipe } = asb;
    let must_tab = this.should_tab_chained_pipe_appendix(ast, indexes, asb);
    let code = "";
    this.tab(1);
    if(must_tab) {
      code += "\n";
      code += this.tab(0);
    } else {
      code += " ";
    }
    code += operator;
    code += " ";
    code += this.format_recursively(ast, [].concat(indexes).concat(["pipe"]), pipe);
    this.tab(-1);
    return code;
  }
  format_Covalent_molecule_type(ast, indexes, asb) {
    this.trace("format_Covalent_molecule_type");
    let code = "";
    code += this.format_recursively(ast, [].concat(indexes).concat(["base"]), asb.base);
    code += this.format_recursively(ast, [].concat(indexes).concat(["atoms"]), asb.atoms, "").join("");
    return code;
  }
  format_recursively(ast, indexes, asb, list_separator = "\n") {
    this.trace("format_recursively");
    if(typeof indexes === "undefined" || typeof asb === "undefined") {
      throw new Error("The method «format_recursively» requires 3 parameters");
    }
    if (typeof asb === "object") {
      if (Array.isArray(asb)) {
        if (list_separator) {
          let code = "";
          for (let index_item = 0; index_item < asb.length; index_item++) {
            const item = asb[index_item];
            code += list_separator;
            code += this.format_recursively(ast, [].concat(indexes).concat([index_item]), item);
          }
          return code;
        } else {
          let block = [];
          for (let index_item = 0; index_item < asb.length; index_item++) {
            const item = asb[index_item];
            const subblock = this.format_recursively(ast, [].concat(indexes).concat([index_item]), item);
            block.push(subblock);
          }
          return block;
        }
      } else if (typeof asb.type === "string") {
        const method_name = "format_" + asb.type;
        if (method_name in this) {
          let code = "";
          code += this[method_name](ast, indexes, asb);
          if (asb.supertype === "Generative") {
            if (asb.extended_by) {
              code += this.format_recursively(ast, [].concat(indexes).concat(["extended_by"]), asb.extended_by, "").join("");
            }
          }
          return code;
        } else {
          // Do not throw yet...
          // throw new Error("Syntax format method not identified: «format_" + asb.type + "»")
        }
      } else {
        throw new Error("The method «format_recursively» can only work with objects with «type» or arrays on index «" + indexes.join("/") + "» in the json abstract syntax tree");
      }
    } else {
      throw new Error("The method «format_recursively» can only format objects, not strings on index «" + indexes.join("/") + "» in the json abstract syntax tree");
    }
  }
}