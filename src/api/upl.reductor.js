class UPL_reductor {
  constructor(...args) {
    
  }
  die(...args) {
    console.log(...args);
    process.exit(0);
  }
  trace(method) {
    console.log("[trace][reductor][" + method + "]");
  }
  stringify(ast) {
    return JSON.stringify(ast);
  }
  reduce(ast) {
    return ast;
  }
}