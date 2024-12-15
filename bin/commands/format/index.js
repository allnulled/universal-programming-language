module.exports = async function(args, upl_utils) {
  const fs = require("fs");  
  const path = require("path");  
  const upl = upl_utils.import_upl();
  const upl_instance = new upl();
  const files = [].concat(args);
  for(let index=0; index<files.length; index++) {
    const file = files[index];
    const filepath = path.resolve(file);
    const filedir = path.dirname(filepath);
    const filename = path.basename(filepath);
    const filextension = filename.match(/\.[^.]+$/g)[0] || "";
    const filecontent = fs.readFileSync(filepath).toString();
    const outputcontent = upl_instance.format(filecontent);
    const outputname = filename.substr(0, filename.length - filextension.length) + ".fmt" + filextension;
    const outputpath = path.resolve(filedir, outputname);
    console.log(outputpath);
    console.log(outputcontent);
    fs.writeFileSync(outputpath, outputcontent, "utf8");
  }
}