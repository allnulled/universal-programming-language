Sistema_de_modulos.definir("lib/aplicacion", [
  "vue",
  "vue-router",
  "vue-i18n",
  "lib/rutas",
  "lib/traducciones",
], async function (Vue, VueRouter, VueI18n, rutas, traducciones) {

  Vue.config.productionTip = false;

  /* INTERNATIONALIZATION */
  const i18n = new VueI18n({
    locale: "es",
    fallbackLocale: "en",
    messages: traducciones
  });

  /* FRAMEWORK */
  window.Vue = Vue;
  window.ufs = UFS_manager.create();

  Vue.prototype.$vue = Vue;
  Vue.prototype.$window = window;
  Vue.prototype.$ufs = window.ufs;

  /* ROUTER */
  Vue.use(VueRouter);
  const router = new VueRouter({
    routes: rutas
  });

  /* VUE */
  return new Vue({
    router,
    i18n,
    render: h => h(Vue.options.components.app),
  }).$mount("#app");

});