Sistema_de_modulos.definir("lib/sistema_de_plantillas", [
  "ejs"
], function (ejs) {
  return {
    renderizar(plantilla, parametros = {}, configuraciones = {}) {
      return ejs.render(plantilla, parametros, configuraciones);
    }
  };
});