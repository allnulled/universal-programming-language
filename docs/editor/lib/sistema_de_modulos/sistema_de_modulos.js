(function (factoria) {
    const modulo = factoria();
    if (typeof window !== "undefined") {
        window.Sistema_de_modulos = modulo;
    }
    if (typeof global !== "undefined") {
        global.Sistema_de_modulos = modulo;
    }
})(function () {
    class Factoria_de_sistema_de_modulos {
        constructor() {
            this.modulos = {};
        }
        definir(nombreModulo, dependencias, factoria) {
            this.modulos[nombreModulo] = {
                dependencias: dependencias,
                factoria: factoria,
                exports: null,
                resuelto: false,
            };
        }
        requerir(nombresModulos, callback) {
            const modulosResueltos = nombresModulos.map((nombre) => this.cargar_modulo(nombre));
            return Promise.all(modulosResueltos).then((exportsResueltos) => {
                callback.apply(this, exportsResueltos);
            });
        }
        async cargar_modulo(nombreModulo) {
            try {
                const modulo = this.modulos[nombreModulo];
                if (typeof modulo === "undefined") {
                    throw new Error("No se encontró definido módulo «" + nombreModulo + "»");
                }
                if (!modulo.resuelto) {
                    const exports = {};
                    const dependencias = await Promise.all(modulo.dependencias.map((dep) => this.cargar_modulo(dep)));
                    modulo.exports = await modulo.factoria.apply(this, dependencias);
                    modulo.resuelto = true;
                }
                return await Promise.resolve(modulo.exports);
            } catch (error) {
                console.log(error);
                throw error;
            }
        }
        cargar_script(url) {
            return new Promise(function (resolve, reject) {
                var script = document.createElement("script");
                script.type = "text/javascript";
                if (script.readyState) {  // IE
                    script.onreadystatechange = function () {
                        if (script.readyState === "loaded" || script.readyState === "complete") {
                            script.onreadystatechange = null;
                            resolve();
                        }
                    };
                } else {  // Otros navegadores
                    script.onload = function () {
                        resolve();
                    };
                }
                script.onerror = function () {
                    reject(new Error("Error al cargar el script " + url));
                };
                script.src = url;
                document.getElementsByTagName("head")[0].appendChild(script);
            });
        }
        cargar_estilo(url) {
            return new Promise((resolve, reject) => {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = url;
                link.onload = () => {
                    resolve();
                };
                link.onerror = () => {
                    reject(new Error(`Error al cargar el archivo CSS: ${url}`));
                };
                document.head.appendChild(link);
            });
        }
        async cargar_estilo_dinamico(url) {
            try {
                const style = document.createElement('style');
                const style_contents_as_template = await this.cargar_texto_remoto(url);
                const style_contents = await ejs.render(style_contents_as_template, { Sistema_de_modulos: this }, { async: true });
                style.textContent = style_contents;
                document.head.appendChild(style);
            } catch (error) {
                console.log(error);
                throw error;
            }
        }
        cargar_texto_remoto(url) {
            return fetch(url)
                .then(response => {
                    if (response.ok) {
                        return response.text();
                    } else {
                        throw new Error('Error al obtener el texto desde la URL: ' + response.status);
                    }
                });
        }
        async cargar_script_como_texto(url) {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Error al obtener el texto desde la URL: ' + response.status);
                }
                const texto = await response.text();
                const asyncFunctionInst = async function () { };
                const AsyncFunction = asyncFunctionInst.constructor;
                const asyncFunction = new AsyncFunction(texto);
                return await asyncFunction();
            } catch (error) {
                console.error('Error:', error);
                throw error;
            }
        }
        async definir_componente_vue2(ruta, nombreComponente, modulos, factoria) {
            const id_completo = nombreComponente;
            await this.definir(id_completo, modulos, factoria);
            const modulo = await this.cargar_modulo(id_completo);
            const url_plantilla = modulo.templateUrl;
            const texto_plantilla = await this.cargar_texto_remoto(url_plantilla ?? ruta.replace(/\.js$/g, ".xml"));
            delete modulo.templateUrl;
            modulo.template = texto_plantilla;
            return Vue.component(modulo.name, modulo);
        }
    }
    return new Factoria_de_sistema_de_modulos();
});