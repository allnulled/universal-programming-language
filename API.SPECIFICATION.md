# The UPL Transpiler API

### Uso básico 1: conseguir el AST puro

Este uso nos devuelve el JSON:

```js
const ast_puro = require("upl").parse("esto es UPLanguage!");
```

### Uso básico 2: conseguir el formateo del código fuente

Este uso nos devuelve el código formateado:

```js
const codigo_formateado = require("upl").format("esto es upl{ formateado! }");
```

## Uso avanzado 1: generar un transpilador y obtener la salida

```js
const transpiler = require("upl").generateTranspiler([
    {
        on: "molecules",
        matcher: "^if@then@(else if@then@)*(else then@)?$",
        tagger(ast, indexes, asb) {
            return {
                is_sentence: true,
                is_generative: false,
            };
        }
        checker(ast, indexes, asb) {
           
        },
        transpiler(ast, indexes, asb) {
           
        }
    }, {
        on: "molecules",
        matcher: "^print@$",
        tagger(ast, indexes, asb) {
            return {
                is_sentence: true,
                is_generative: false,
            };
        }
        checker(ast, indexes, asb) {
           
        },
        transpiler(ast, indexes, asb) {
           
        }
    }
]);

```

