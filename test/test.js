const fs = require("fs");
const path = require("path");
const change_extension_to = (ext, file) => file.replace(/\.upl$/g, ext);
const tests_list = [
  async function (memo) {
    console.log(" [*] Testing: can reset test memo");
    memo.unlezz = function (expr, error_message) {
      if (!expr) {
        throw error_message;
      }
      console.log("  [+] Passed: " + error_message);
      return true;
    }
    memo.scripts = {
      input: fs.readdirSync(__dirname + "/scripts/input").map(file => {
        return {
          file: file,
          contents: fs.readFileSync(__dirname + "/scripts/input/" + file).toString()
        };
      }),
      output_ast_path: __dirname + "/scripts/output-ast",
      output_ast: [],
      output_execute_path: __dirname + "/scripts/output-execute",
      output_execute: [],
      output_format_path: __dirname + "/scripts/output-format",
      output_format: [],
      output_transpile_path: __dirname + "/scripts/output-transpile",
      output_transpile: [],
      binary: __dirname + "/scripts/binary",
    };
    memo.execute_command = function(command, opts = {}) {
      return new Promise((resolve, reject) => {
        require("child_process").exec(command, opts, function(error, data, stderr) {
          if(error) {
            return reject(error);
          }
          if(stderr) {
            return reject(stderr);
          }
          return resolve(data);
        });
      });
    }
  },
  async function (memo) {
    console.log(" [*] Testing: can load upl api");
    const { unlezz } = memo;
    const upl = require(__dirname + "/../src/upl.api.js");
    memo.upl = upl;
    unlezz(typeof (upl) === "function", "upl should be a function");
    unlezz(typeof (upl.parse) === "function", "upl.parse should be a function");
    unlezz(typeof (upl.classes) === "object", "upl.classes should be an object");
    unlezz(typeof (upl.classes.parser) === "object", "upl.classes.parser should be an object");
    unlezz(typeof (upl.classes.transpiler) === "function", "upl.classes.transpiler should be a function");
    unlezz(typeof (upl.classes.formatter) === "function", "upl.classes.formatter should be a function");
  },
  async function (memo) {
    console.log(" [*] Testing: can use upl.parse [output-ast]");
    let current_test = undefined;
    const { unlezz, upl, scripts } = memo;
    try {
      for (let index = 0; index < scripts.input.length; index++) {
        const { file, contents } = scripts.input[index];
        current_test = path.basename(file);
        console.log("  [+] Parsing file «" + current_test + "»");
        const ast = upl.parse(contents);
        scripts.output_ast.push({ file, ast });
        const output_file = path.resolve(scripts.output_ast_path, file);
        const output_contents = JSON.stringify(ast, null, 2);
        fs.writeFileSync(change_extension_to(".json", output_file), output_contents, "utf8");
      }
    } catch (error) {
      console.log("[!] Failed script «" + current_test + "»");
      throw error;
    }
  },
  async function (memo) {
    console.log(" [*] Testing: can use upl.format [output-format]");
    let current_test = undefined;
    const { unlezz, upl, scripts } = memo;
    try {
      for (let index = 0; index < scripts.input.length; index++) {
        const { file, contents } = scripts.input[index];
        current_test = path.basename(file);
        console.log("  [+] Formatting file «" + current_test + "»");
        const format = upl.format(contents);
        scripts.output_format.push({ file, format });
        const output_file = path.resolve(scripts.output_format_path, file);
        const output_contents = format;
        fs.writeFileSync(change_extension_to(".upl", output_file), output_contents, "utf8");
      }
    } catch (error) {
      console.log("[!] Failed script «" + current_test + "»");
      throw error;
    }
  },
  async function (memo) {
    console.log(" [*] Testing: can use upl.createTranspiler");
    const { upl } = memo;
    const transpiler = upl.createTranspiler([{
      type: "Language",
      matcher(ast, indexes, asb) {
        return true;
      },
      tagger(ast, indexes, asb) {
        return {};
      },
      checker(ast, indexes, asb) {
        return true;
      },
      transpiler(ast, indexes, asb) {
        return "Hello, transpiler!";
      },
    }, {
      type: "Molecules",
      formula: "^create( variable)?@as@$",
      matcher: function (ast, indexes, asb) {
        return true;
      },
      // if@(else if@)*(else@)?
      // if\{\$[0-9]+\}(else if@)*(else@)?
      tagger: function (ast, indexes, asb) {
        return {
          is_sentence: true,
          is_generative: false,
        };
      },
      checker: function (ast, indexes, asb) {
        const is_create_ok = this.is_one_variable_in_group_only(asb.atoms[0].parameters.list);
        const is_as_ok = this.is_one_generative_in_group_only(asb.atoms[1].parameters.list);
        if (is_create_ok !== true) {
          throw new this.Compilation_error({
            location: asb.location,
            chars: asb.script,
            step: "checker",
            agent: "«create@» in «create@as@»",
            error: is_create_ok,
          });
        }
        if (is_as_ok !== true) {
          throw new this.Compilation_error({
            location: asb.location,
            chars: asb.script,
            step: "checker",
            agent: "«as@» in «create@as@»",
            error: is_as_ok,
          });
        }
      },
      transpiler: function (ast, indexes, asb) {
        // @TODO:
      },
    }]);
    Must_pass: {
      const output1 = transpiler.transpile(`
      create{ @a }as{ "whatever" }
    `);
      console.log(output1);
      fs.writeFileSync(__dirname + "/example.json", JSON.stringify(output1.tagged, null, 2), "utf8");
      console.log("(transpilation)");
    }
    Must_fail: {
      try {
        const output1 = transpiler.transpile(`
          create{ 100 }as{ "whatever" }
        `);
        throw Error("Example should not be transpilable because of the «checker»");
      } catch (error) {
        if(error.name !== "Compilation_error") {
          throw error;
        }
      }
    }
  },
  async function (memo) {
    console.log("[*] Testing: can use binary «upl help»");
    try {
      const { unlezz } = memo;
      const output = await memo.execute_command("upl help");
      console.log(output);
      unlezz(output.indexOf('help') !== -1, "«upl help» console command should print «help» somewhere");
    } catch (error) {
      throw error;
    }
  },
  async function (memo) {
    console.log("[*] Testing: can use binary «upl format file.upl»");
    try {
      const { unlezz } = memo;
      const output = await memo.execute_command("upl format example1.upl", { cwd: memo.scripts.binary });
      unlezz(output.indexOf('format') !== -1, "«upl format *» console command should print «format» somewhere");
    } catch (error) {
      throw error;
    }
  }
];

const test_all = async function (memo = {}, results = []) {
  try {
    console.log("[*] Starting tests of upl.")
    for (let index_test = 0; index_test < tests_list.length; index_test++) {
      const test_item = tests_list[index_test];
      const test_result = await test_item(memo);
      results.push(test_result);
    }
    console.log("[*] Successfully passed all tests.")
  } catch (error) {
    console.log(error);
    throw error;
  }
  return results;
};

module.exports = test_all();