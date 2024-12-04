{
// Method for the parser: stringify
const stringify = JSON.stringify;

// Method for the parser: simplify_molecule_type
const minify_location = function(loc) {
  return `${loc.start.line}:${loc.start.column}-${loc.end.line}:${loc.end.column}|${loc.start.offset}-${loc.end.offset}`;
};

// Method for the parser: simplify_molecule_type
const simplify_molecule_type = function(molecule) {
    let formula = "";
    const atoms = molecule.atoms;
    for(let index_atoms=0; index_atoms<atoms.length; index_atoms++) {
      const atom = atoms[index_atoms];
      Append_molekula_formula: {
        formula += atom.name.id;
        formula += "{$";
        formula += index_atoms+1;
        formula += "}";
      }
      let atom_formula = "";
      Set_atom_formula: {
        atom_formula += atom.name.id;
        atom_formula += "{$1}";
        atom.formula = atom_formula;
      }
    }
    if(atoms.length === 1) {
        return Object.assign({ type: atoms[0].type, supertype: "Generative", formula: atoms[0].formula }, atoms[0]);
    }
    add_functional_molecule_mention(formula);
    return Object.assign({ type: molecule.type, supertype: "Generative", formula }, molecule);
};

// Method for the parser: function_shortcuts
const function_shortcuts = {};

// Method for the parser: declare_function_shortcut
const declare_function_shortcut = function(shortcut, name) {
  function_shortcuts[shortcut] = name;
  return { [shortcut]: name };
};

// Method for the parser: pack_declarations
const pack_declarations = function(declarations) {
  const packed = {};
  for(let index=0; index<declarations.length; index++) {
    const declaration = declarations[index];
    Object.assign(packed, declaration);
  }
  return packed;
};

// Method for the parser: resolve_function_shortcut
const resolve_function_shortcut = function(ref) {
  if(!(ref in function_shortcuts)) {
    console.log(function_shortcuts)
    throw new Error("Could not resolve function shortcut «" + ref + "»");
  }
  const id = function_shortcuts[ref];
  return id;
};

// Method for the parser: functional_molecule_mentions
const functional_molecule_mentions = {};
// Method for the parser: functional_atom_mentions
const functional_atom_mentions = {};

// Method for the parser: add_functional_atom_mention
const add_functional_atom_mention = function(function_name) {
  const { id } = function_name;
  if(!(id in functional_atom_mentions)) {
    functional_atom_mentions[id] = 0;
  }
  functional_atom_mentions[id]++;
  return function_name;
};

// Method for the parser: add_functional_molecule_mention
const add_functional_molecule_mention = function(molecule_formula) {
  if(!(molecule_formula in functional_molecule_mentions)) {
    functional_molecule_mentions[molecule_formula] = 0;
  }
  functional_molecule_mentions[molecule_formula]++;
  return molecule_formula;
};

// Method for the parser: get_atom_mentions_sorted
const get_atom_mentions_sorted = function() {
  const sorted = Object.keys(functional_atom_mentions).sort(function(key1, key2) {
    const val1 = functional_atom_mentions[key1];
    const val2 = functional_atom_mentions[key2];
    if(val1 < val2) {
      return 1;
    } else if(val1 > val2) {
      return -1;
    }
    return 0;
  }).map(function(id) {
    return {[id]:functional_atom_mentions[id]};
  }).reduce(function(output, item, index) {
    const key = Object.keys(item)[0];
    const val = item[key];
    output[key] = "pos=" + (index+1) + " times=" + val + "";
    return output;
  }, {});
  return sorted;
};

// Method for the parser: get_molecule_mentions_sorted
const get_molecule_mentions_sorted = function() {
  const sorted = Object.keys(functional_molecule_mentions).sort(function(key1, key2) {
    const val1 = functional_molecule_mentions[key1];
    const val2 = functional_molecule_mentions[key2];
    if(val1 < val2) {
      return 1;
    } else if(val1 > val2) {
      return -1;
    }
    return 0;
  }).map(function(id) {
    return {[id]:functional_molecule_mentions[id]};
  }).reduce(function(output, item, index) {
    const key = Object.keys(item)[0];
    const val = item[key];
    output[key] = "pos=" + (index+1) + " times=" + val + "";
    return output;
  }, {});
  return sorted;
};

// Method for the parser: get_metrics
const get_metrics = function() {
  return {
    mentions: {
      molecules: get_molecule_mentions_sorted(functional_atom_mentions),
      atoms: get_atom_mentions_sorted(functional_atom_mentions)
    }
  };
};
}
/* Lenguaje: */
Language =
  shebang:Shebang_for_linux?
  token1:_*
  header:Preblock?
  token2:_*
  body:Block
  token3:_*
    { return {type:"Language",header,body,footer:get_metrics(),seed:text()}}

Shebang_for_linux = "#!" No_EOL

Preblock = 
  declarations:Declare_function_shortcuts
    { return { type: "Preblock", declarations, script: text().length, location: minify_location(location()) } }
Declare_function_shortcuts =
  functions:Declare_function_shortcut*
    { return pack_declarations(functions) }

Declare_function_shortcut = 
  token1:_*
  shortcut:Function_name_by_shortcut_without_resolving
  token2:(_* "=" _*)
  name:Function_name_by_word_without_packing
    { return declare_function_shortcut(shortcut, name) }

Block = sentences:Full_sentence* { return sentences }
Full_sentence = _* sentence:Sentence EOS { return sentence }

/* Saltos: */
EOS = EOL / EOF
EOL = ___
EOF = !.
_ = __ / ___ / Comment_group
__ = " " / "\t"
___ = "\r\n" / "\r" / "\n"

/* Comentarios: */
Comment_group = 
  token1:("comment{{")
  comment:(Contents_between_double_curly_brackets)
  token3:"}}"
    { return comment }
  

/* Sentencias: */
Sentence = Generative

/* Generativas: */
Generative = Generative_extended

Generative_extended =
  origin:Generative_pure
  extended_by:(Pipe_appendix / Access_appendix / Call_appendix)*
    { return extended_by.length ? Object.assign(origin, { extended_by }) : origin }

Access_appendix = Access_by_dot_appendix / Access_by_accessor_appendix

Access_by_dot_appendix = 
  token1:"."
  access:Word
    { return { type: "Access_by_dot_appendix", access, script: text().length, location: minify_location(location()) } }

Access_by_accessor_appendix = 
  access:Generative_between_square_bracket
    { return { type: "Access_by_accessor_appendix", access, script: text().length, location: minify_location(location()) } }

Call_appendix = 
  parameters:Function_call_appendix
    { return parameters; }

Pipe_appendix =
  operator:Pipe_operator
  pipe:Generative_pure
    { return { type: "Pipe_appendix", operator, pipe, script: text().length, location: minify_location(location()) } }

Pipe_operator = 
  token1:_*
  op:Valid_pipe_operators
  token2:_*
    { return text().trim() }

Chained_word = 
  first:Word
  others:Chained_word_continuation*
    { return [first].concat(others || []) }

Chained_word_continuation = 
  token1:(_* ".")
  word:Word
    { return word }

Valid_pipe_operators = op:(
  ("|[" Generative "]" ("=")? ) /
  ("|@" Chained_word "=") /
  ("|=") /
  ("|"))
    { return text() }

Contents_between_square_brackets = 
  chars:Contents_between_square_brackets_char+
    { return chars.join("") }

Contents_between_square_brackets_char = 
  neg:(!Token_square_brackets)
  ch:Token_between_square_brackets
    { return ch }

Token_square_brackets = "]"
Token_square_brackets_escaped = "\\]" { return "]" }
Token_between_square_brackets = Token_square_brackets_escaped / .

Generative_pure = Special_type / Functional_molecule_type / Covalent_molecule_type / Variable_type / Text_type / Number_type

Special_type = Object_type

Object_type = Object_type_v1 / Object_type_v2

Object_type_v1 = 
  token1:("[" _*)
  properties:Object_properties?
  token2:(_* "]")
    { return { type: "Object", supertype: "Generative", properties: properties || [], script: text().length, location: minify_location(location()) } }

Object_type_v2 =
  token1:("object{" _*)
  properties:Object_properties?
  token2:(_* "}")
    { return { type: "Object", supertype: "Generative", properties: properties || [], script: text().length, location: minify_location(location()) } }

Object_properties =
  first:Object_property_first
  others:Object_property_other*
    { return [first].concat(others || []) }

Object_property_first =
  token1:(_*)
  key:Object_property_key
  token2:(_* "=" _*)
  val:Object_property_value
    { return { key, val } }

Object_property_other = 
  token1:(_+)
  prop:Object_property_first
    { return prop }

Object_property_key = Word / Text_type / Generative_between_square_bracket

Generative_between_square_bracket = 
  token1:("[" _*)
  generative:Generative
  token2:(_* "]")
    { return generative }

Object_property_value = Generative

Variable_type = 
  token1:"@"
  name:Word?
    { return { type: "Variable", supertype: "Generative", name, script: text().length, location: minify_location(location()) } }

Covalent_molecule_type =
  base:Function_call_appendix
  atoms:Functional_atom*
    { return { type: "Covalent_molecule", supertype: "Generative", base, atoms, script: text().length, location: minify_location(location()) } }

Functional_molecule_type =
  atoms:Functional_atom+
    { return simplify_molecule_type({ type: "Functional_molecule", atoms, script: text().length, location: minify_location(location()) }) }

Functional_atom = 
  name:Function_name
  parameters:Function_call_appendix?
    { return { type: "Functional_atom", name, parameters, script: text().length, location: minify_location(location()) } }

Function_name =
  atom_id:(Function_name_by_word / Function_name_by_shortcut)
    { return add_functional_atom_mention(atom_id) }

Function_name_by_shortcut_without_resolving = 
  token1:"#"
  name:Function_name_by_word_without_packing
    { return name }

Function_name_by_shortcut =
  token1:"#"
  aliased:Function_name_by_word_without_packing
    { return { type: "Function_name_by_shortcut", id: resolve_function_shortcut(aliased), aliased, script: text().length, location: minify_location(location()) } }

Function_name_by_word = 
  name:Function_name_by_word_without_packing
    { return { type: "Function_name_by_word", id: name, aliased: null, script: text().length, location: minify_location(location()) } }

Function_name_by_word_without_packing = 
  first:Word
  others:(Function_name_continuation)*
    { return [first].concat(others || []).join(" ") }

Function_name_continuation =
  token1:Function_chainer
  name:Word
    { return name }

Function_chainer = " "

Function_call_appendix = Function_call_appendix_for_list_parameter / Function_call_appendix_for_empty_parameter

Function_call_appendix_for_list_parameter = 
  token1:("{" _*)
  parameters:Function_parameters?
  token2:(_* "}")
  { return { type: "Function_call_appendix_for_list_parameter", list: parameters || [], script: text().length, location: minify_location(location()) } }

Function_call_appendix_for_empty_parameter =
  token1:("!")
  { return { type: "Function_call_appendix_for_empty_parameter", script: text().length, location: minify_location(location()) } }

Function_parameters = 
  first:Function_parameter_first
  others:Function_parameter_other*
    { return [first].concat(others || []) }

Function_parameter_first = Generative

Function_parameter_other = _+ parameter:Generative { return parameter }

Expanded_word_char = [A-Za-zÁÉÍÓÚáéíóúÀÈÌÒÙàèìòùÄËÏÖÜäëïöüÂÊÎÔÛâêîôûñ·ç'\-_$]
Expanded_word_char_with_numbers = [A-Za-z0-9ÁÉÍÓÚáéíóúÀÈÌÒÙàèìòùÄËÏÖÜäëïöüÂÊÎÔÛâêîôûñ·ç'\-_$]

Word = Expanded_word_char Expanded_word_char_with_numbers* { return text() }

Number_type =
  n:Number
    { return { type: "Number", supertype: "Generative", value: n, script: text().length, location: minify_location(location()) } }

Number =
  polarity:("-")?
  num:[0-9]+
  dec:("." [0-9]+)?
    { return dec ? parseFloat(text()) : parseInt(text()) }

Text_type =
  t:Text
    { return { type: "Text", supertype: "Generative", contents: t, script: text().length, location: minify_location(location()) } }

Text =
  token1:Token_double_quote
  contents:Contents_between_double_quotes
  token2:Token_double_quote
    { return contents }

Contents_between_double_quotes =
  chars:Contents_between_double_quotes_char*
    { return chars.join("") }

Contents_between_double_quotes_char =
  neg:(!Token_double_quote)
  ch:Token_between_double_quotes
    { return ch }

Contents_between_double_curly_brackets = 
  chars:Contents_between_double_curly_brackets_char*
    { return chars.join("") }

Contents_between_double_curly_brackets_char = 
  neg:(!Token_double_curly_brackets)
  ch:Token_between_double_curly_brackets
    { return ch }

/* Tokens: */
Token_double_quote = '"'
Token_double_quote_escaped = '\\"' { return '"' }
Token_between_double_quotes = Token_double_quote_escaped / .

Token_double_curly_brackets = /*{{*/ "}}"
Token_double_curly_brackets_escaped = /*{{*/ "\\}}" { return /*{{*/ "}}" }
Token_between_double_curly_brackets = Token_double_curly_brackets_escaped / .

No_EOL = ((!EOL) .)* { return text() }
