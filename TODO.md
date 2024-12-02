# 30-11-2024

Hay varios temas pendientes:

[ ] Poder transpilar sintaxis con:

```js
const transpiler = require("upl").generateTranspiler({ ... });
const transpiled = transpiler.transpile("...");
const formatted = transpiler.format("...");
const parsed = transpiler.parse("...");
```

[ ] Proporcionarle sintaxis básicas:

```js
const upl_js_transpiler = require("upl").setTranspiler("javascript");
const transpiled_1 = upl_js_transpiler.transpile('create{ @x }as{ 200 }');
const transpiled_2 = upl_js_transpiler.transpile('print{ "Hello, world!" }');
const transpiled_3 = upl_js_transpiler.transpile('from{ 0 }to{ 10 }do{ print{ @index } }');

const packer = require("upl").setTranspiler("packer");
const transpiled_1 = packer.transpile('pack into{ "src/api.js" }files{ "src/api/**.js.upl" }joined by{ "\n" }');
const transpiled_1 = packer.transpile('copy{ "src/api.js" }into{ "dist/api.js" }replacing{ "" }by{ "" }');
const transpiled_1 = packer.transpile('pack into{ "main.js" }files{ "src/api.js" }joined by{ "\n" }prepended by{ "" }appended by{ "" }');
```

[ ] Y pasaríamos a el editor: