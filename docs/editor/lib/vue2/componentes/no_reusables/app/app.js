return await Sistema_de_modulos.definir_componente_vue2(
  "lib/vue2/componentes/no_reusables/app/app.js",
  "lib/vue2/componentes/no_reusables/app", [

], async function () {
  return {
    name: "app",
    templateUrl: "lib/vue2/componentes/no_reusables/app/app.xml",
    mounted: function () {
      console.log("Aplicación iniciada correctamente.");
    }
  };
});