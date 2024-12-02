Sistema_de_modulos.definir("lib/rutas", ["vue"], async function (VuePromise) {
  const Vue = await VuePromise;
  return [{
    path: "/",
    component: Vue.options.components.home_page
  }];
});