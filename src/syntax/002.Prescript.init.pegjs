// Method for the parser: stringify
const stringify = JSON.stringify;

// Method for the parser: simplify_molecule_type
const minify_location = function(loc) {
  return `${loc.start.offset}-${loc.end.offset}|${loc.start.line}:${loc.start.column}-${loc.end.line}:${loc.end.column}`;
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