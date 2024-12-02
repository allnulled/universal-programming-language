const main = async function() {
  try {

    // VARIABLES DE ENTORNO:
    await Sistema_de_modulos.cargar_script("lib/variables_de_entorno/variables_de_entorno.js");
    const envvars = await Sistema_de_modulos.cargar_modulo("lib/variables_de_entorno");

    // VUEJS Y COMPAÑEROS:
    await Sistema_de_modulos.cargar_script(envvars.NODE_ENV === "test" ? "lib/vue2/vue2.js" : "lib/vue2/vue2.min.js");
    await Sistema_de_modulos.cargar_script("lib/externos/vue-router/vue-router.js");
    await Sistema_de_modulos.cargar_script("lib/externos/vue-i18n/vue-i18n.js");

    // OTRAS LIBRERÍAS DE TERCEROS:
    // await Sistema_de_modulos.cargar_script("lib/externos/jquery/jquery.js");
    // await Sistema_de_modulos.cargar_script("lib/externos/jquery-ui/jquery-ui.js");
    // await Sistema_de_modulos.cargar_script("lib/externos/ejs/ejs.js");
    // await Sistema_de_modulos.cargar_script("lib/externos/socket.io/socket.io.js");
    await Sistema_de_modulos.cargar_script("lib/externos/js-beautify/beautifier.min.js");
    await Sistema_de_modulos.cargar_script("lib/externos/ufs/ufs.js");
    await Sistema_de_modulos.cargar_script("lib/externos/upl/upl.js");
    
    // LÓGICAS:
    await Sistema_de_modulos.cargar_script("lib/sistema_de_hooks/sistema_de_hooks.js");
    await Sistema_de_modulos.cargar_script("lib/sistema_de_aleatorizacion/sistema_de_aleatorizacion.js");
    await Sistema_de_modulos.cargar_script("lib/sistema_de_base_de_datos_indexeddb/sistema_de_base_de_datos_indexeddb.js");
    await Sistema_de_modulos.cargar_script("lib/sistema_de_fechas/sistema_de_fechas.js");
    await Sistema_de_modulos.cargar_script("lib/sistema_de_almacenamiento_sincronizable/sistema_de_almacenamiento_sincronizable.js");
    await Sistema_de_modulos.cargar_script("lib/sistema_de_plantillas/sistema_de_plantillas.js");
    await Sistema_de_modulos.cargar_script("lib/sistema_de_refresco_automatico/sistema_de_refresco_automatico.js");
    await Sistema_de_modulos.cargar_script("lib/utilidades_de_texto/utilidades_de_texto.js");
    await Sistema_de_modulos.cargar_script("lib/rutas/rutas.js");
    await Sistema_de_modulos.cargar_script("lib/traducciones/traducciones.js");

    // COMPONENTES GRÁFICOS:
    await Sistema_de_modulos.cargar_script("lib/vue2/componentes/reusables/mi_button/mi_button.js");
    await Sistema_de_modulos.cargar_script("lib/vue2/componentes/reusables/mi_checkbox/mi_checkbox.js");
    await Sistema_de_modulos.cargar_script("lib/vue2/componentes/reusables/mi_datepicker/mi_datepicker.js");
    await Sistema_de_modulos.cargar_script("lib/vue2/componentes/reusables/mi_fieldset/mi_fieldset.js");
    await Sistema_de_modulos.cargar_script("lib/vue2/componentes/reusables/mi_hourpicker/mi_hourpicker.js");
    await Sistema_de_modulos.cargar_script("lib/vue2/componentes/reusables/mi_input/mi_input.js");
    await Sistema_de_modulos.cargar_script("lib/vue2/componentes/reusables/mi_label/mi_label.js");
    await Sistema_de_modulos.cargar_script("lib/vue2/componentes/reusables/mi_layout/mi_layout.js");
    await Sistema_de_modulos.cargar_script("lib/vue2/componentes/reusables/mi_options/mi_options.js");
    await Sistema_de_modulos.cargar_script("lib/vue2/componentes/reusables/mi_paragraph/mi_paragraph.js");
    await Sistema_de_modulos.cargar_script("lib/vue2/componentes/reusables/mi_radiobuttons/mi_radiobuttons.js");
    await Sistema_de_modulos.cargar_script("lib/vue2/componentes/reusables/mi_subtitle/mi_subtitle.js");
    await Sistema_de_modulos.cargar_script("lib/vue2/componentes/reusables/mi_tabs/mi_tabs.js");
    await Sistema_de_modulos.cargar_script("lib/vue2/componentes/reusables/mi_textarea/mi_textarea.js");
    await Sistema_de_modulos.cargar_script("lib/vue2/componentes/reusables/mi_timepicker/mi_timepicker.js");
    await Sistema_de_modulos.cargar_script("lib/vue2/componentes/reusables/mi_title/mi_title.js");
    await Sistema_de_modulos.cargar_script_como_texto("lib/vue2/componentes/no_reusables/app/app.js");
    await Sistema_de_modulos.cargar_script_como_texto("lib/vue2/componentes/no_reusables/pagina_de_inicio/pagina_de_inicio.js");
    await Sistema_de_modulos.cargar_script_como_texto("lib/vue2/componentes/no_reusables/serie_de_iconos/serie_de_iconos.js");
    await Sistema_de_modulos.cargar_script_como_texto("lib/vue2/componentes/no_reusables/mis_dialogos/mis_dialogos.js");

    // MÓDULOS DE INICIO:
    await Sistema_de_modulos.cargar_script("lib/traducciones/traducciones.js");
    await Sistema_de_modulos.cargar_script("lib/externos/externos.js");

    // ESTILOS:
    await Sistema_de_modulos.cargar_estilo("lib/externos/win7/win7.css");
    await Sistema_de_modulos.cargar_script("lib/aplicacion/estilos/variables.js");
    // await Sistema_de_modulos.cargar_estilo_dinamico("lib/aplicacion/estilos/framework.jcss");
    // await Sistema_de_modulos.cargar_estilo_dinamico("lib/aplicacion/estilos/aplicacion.jcss");
    await Sistema_de_modulos.cargar_estilo("lib/vue2/componentes/reusables/mi_button/mi_button.css");
    await Sistema_de_modulos.cargar_estilo("lib/vue2/componentes/reusables/mi_checkbox/mi_checkbox.css");
    await Sistema_de_modulos.cargar_estilo("lib/vue2/componentes/reusables/mi_datepicker/mi_datepicker.css");
    await Sistema_de_modulos.cargar_estilo("lib/vue2/componentes/reusables/mi_fieldset/mi_fieldset.css");
    await Sistema_de_modulos.cargar_estilo("lib/vue2/componentes/reusables/mi_hourpicker/mi_hourpicker.css");
    await Sistema_de_modulos.cargar_estilo("lib/vue2/componentes/reusables/mi_input/mi_input.css");
    await Sistema_de_modulos.cargar_estilo("lib/vue2/componentes/reusables/mi_label/mi_label.css");
    await Sistema_de_modulos.cargar_estilo("lib/vue2/componentes/reusables/mi_layout/mi_layout.css");
    await Sistema_de_modulos.cargar_estilo("lib/vue2/componentes/reusables/mi_options/mi_options.css");
    await Sistema_de_modulos.cargar_estilo("lib/vue2/componentes/reusables/mi_paragraph/mi_paragraph.css");
    await Sistema_de_modulos.cargar_estilo("lib/vue2/componentes/reusables/mi_radiobuttons/mi_radiobuttons.css");
    await Sistema_de_modulos.cargar_estilo("lib/vue2/componentes/reusables/mi_subtitle/mi_subtitle.css");
    await Sistema_de_modulos.cargar_estilo("lib/vue2/componentes/reusables/mi_tabs/mi_tabs.css");
    await Sistema_de_modulos.cargar_estilo("lib/vue2/componentes/reusables/mi_textarea/mi_textarea.css");
    await Sistema_de_modulos.cargar_estilo("lib/vue2/componentes/reusables/mi_timepicker/mi_timepicker.css");
    await Sistema_de_modulos.cargar_estilo("lib/vue2/componentes/reusables/mi_title/mi_title.css");
    await Sistema_de_modulos.cargar_estilo("lib/vue2/componentes/no_reusables/app/app.css");
    await Sistema_de_modulos.cargar_estilo("lib/vue2/componentes/no_reusables/pagina_de_inicio/pagina_de_inicio.css");
    await Sistema_de_modulos.cargar_estilo("lib/vue2/componentes/no_reusables/serie_de_iconos/serie_de_iconos.css");
    await Sistema_de_modulos.cargar_estilo("lib/vue2/componentes/no_reusables/mis_dialogos/mis_dialogos.css");
    await Sistema_de_modulos.cargar_estilo("lib/vue2/xcomponents/docs/lib/xcomponents/xcomponents.css");
    
    // ARRANQUE:
    await Sistema_de_modulos.cargar_script("lib/aplicacion/aplicacion.js");
    // await Sistema_de_modulos.cargar_modulo("lib/sistema_de_refresco_automatico");
    await Sistema_de_modulos.cargar_modulo("lib/aplicacion");

  } catch (error) {
    console.log(error);
    alert("Hubo errores en el despliegue de la aplicación");
  }
};

main();