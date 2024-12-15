#!/usr/bin/env node

const upl_utils = require(__dirname + "/upl.bin.utils.js");
const path = require("path");
const bin_parameters = [].concat(process.argv);
const node_path = bin_parameters.shift();
const upl_path = bin_parameters.shift();
const command = (bin_parameters.shift() || "help").replace(/\.|\+/g, "/");

console.log(`[*] Running command: «upl ${command}»`);

const command_path = path.resolve(__dirname + "/commands/" + command + "/index.js");

const main = async function() {
  try {
    const command_function = require(command_path);
    const command_output = await command_function(bin_parameters, upl_utils);
    if(command_output) {
      console.log(command_output);
    }
  } catch (error) {
    console.log(`[!] Error executing «upl ${command}»:`);
    console.error(error);
  }
};

main();