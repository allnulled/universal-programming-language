module.exports = async function(args) {
  console.log("\x1b[30m" + "\x1b[47m" + "\x1b[1m" );
  console.log("[*] [Universal Programming Language | Help page]");
  console.log("[*]");
  console.log("[*] [Commands]");
  console.log("[*]   · upl ");
  console.log("[*]   · upl help");
  console.log("[*]   · upl format {file}");
  console.log("[*]   · upl listen/format {file}");
  console.log("[*]   · upl editor");
  console.log("[*]");
  console.log("[*] [Examples]");
  console.log("[*]   [To print this help page:]");
  console.log("[*]     · upl");
  console.log("[*]     · upl help");
  console.log("[*]   [To format a file:]");
  console.log("[*]     · upl format file.upl ");
  console.log("[*]       # creates a file.fmt.upl");
  console.log("[*]   [To format a file when it is saved:]");
  console.log("[*]     · upl listen/format file.upl");
  console.log("[*]       # creates a file.fmt.upl");
  console.log("[*]       # when file.upl is saved");
  console.log("[*]   [To open the user interface editor:]");
  console.log("[*]     · upl editor");
  console.log("[*]");
  console.log("[*] [More info at]");
  console.log("[*]   https://github.com/allnulled/universal-programming-language");
  console.log("[*]\x1b[0m");
}