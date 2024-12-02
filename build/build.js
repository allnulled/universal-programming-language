const fs = require("fs");
const path = require("path");
const child_process = require("child_process");

const syntax_source_file = __dirname + "/../src/upl.parser.pegjs";
const syntax_output_file = __dirname + "/../src/upl.parser.js";
const syntax_output_file_globals = syntax_output_file.replace(/\.js$/g, ".global.js");
const formatter_path = __dirname + "/../src/api/upl.formatter.js";
const reductor_path = __dirname + "/../src/api/upl.reductor.js";
const transpiler_path = __dirname + "/../src/api/upl.transpiler.js";
const index_api_path = __dirname + "/../src/api/index.js";
const upl_api_path = __dirname + "/../src/upl.api.js";
const upl_api_dist_path = __dirname + "/../dist/upl.js";

const main = async function () {
  Unify_syntax: {
    let syntax_source = "";
    const syntax_folder = __dirname + "/../src/syntax";
    const syntax_files = fs.readdirSync(syntax_folder).map(f => path.resolve(syntax_folder, f));
    for (let index = 0; index < syntax_files.length; index++) {
      const syntax_file = syntax_files[index];
      const syntax_content = fs.readFileSync(syntax_file).toString();
      syntax_source += syntax_content + "\n";
    }
    fs.writeFileSync(syntax_source_file, syntax_source, "utf8");
  }
  Compile_syntax: {
    child_process.execSync(`npx pegjs -o ${JSON.stringify(syntax_output_file)} ${JSON.stringify(syntax_source_file)}`, {
      stdio: [process.stdin, process.stdout, process.stderr]
    });
    child_process.execSync(`npx pegjs --format globals --export-var UPL_parser -o ${JSON.stringify(syntax_output_file_globals)} ${JSON.stringify(syntax_source_file)}`, {
      stdio: [process.stdin, process.stdout, process.stderr]
    });
    Fix_exportation_of_pegjs_on_globals_format: {
      let fixed_1 = fs.readFileSync(syntax_output_file_globals).toString().replace(/\}\)\(this\);[ \t\n\r]*$/g, "})(typeof window !== 'undefined' ? window : global);")
      fs.writeFileSync(syntax_output_file_globals, fixed_1, "utf8");
    }
  }
  Compile_api: {
    const formatter_contents = fs.readFileSync(formatter_path).toString();
    const reductor_contents = fs.readFileSync(reductor_path).toString();
    const transpiler_contents = fs.readFileSync(transpiler_path).toString();
    const parser_contents = fs.readFileSync(syntax_output_file_globals).toString();
    const upl_api = fs.readFileSync(index_api_path).toString();
    let api_contents = "";
    api_contents += parser_contents + "\n";
    api_contents += reductor_contents + "\n";
    api_contents += formatter_contents + "\n";
    api_contents += transpiler_contents + "\n";
    api_contents += upl_api + "\n";
    fs.writeFileSync(upl_api_path, api_contents, "utf8");
  }
  Test_api: {
    await require(__dirname + "/../test/test.js");
  }
  Export_files: {
    fs.copyFileSync(upl_api_path, upl_api_dist_path)
  }
};

module.exports = main();