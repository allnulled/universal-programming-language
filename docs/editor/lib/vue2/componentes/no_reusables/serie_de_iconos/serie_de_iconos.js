return await Sistema_de_modulos.definir_componente_vue2(
  "lib/vue2/componentes/no_reusables/serie_de_iconos/serie_de_iconos.js",
  "lib/vue2/componentes/no_reusables/serie_de_iconos", [

], async function (mentemetria) {
  return {
    name: "serie-de-iconos",
    templateUrl: "lib/vue2/componentes/no_reusables/serie_de_iconos/serie_de_iconos.html",
    props: {
      contexto: {
        type: Object,
        default: undefined
      },
      identificador_de_contexto: {
        type: String,
        default: () => "indefinido"
      },
      iconosPredefinidos: {
        type: Array,
        default: () => {}
      }
    },
    data() {
      return {
        serie: this.iconosPredefinidos
      }
    },
    methods: {
      cambiar_iconos(nuevos_iconos) {
        this.serie = nuevos_iconos;
        this.$forceUpdate(true);
      }
    },
    mounted() {
      console.log("mounted");
      
    },
    unmounted() {
      console.log("unmounted");
      
    }
  };
});