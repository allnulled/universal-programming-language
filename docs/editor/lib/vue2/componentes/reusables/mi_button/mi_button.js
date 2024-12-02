// Definir el componente Vue
Vue.component('mi-button', {
  props: {
    border: {
      type: String,
      default: "1px solid blue"
    },
    color: {
      type: String,
      default: "#00F"
    },
    backgroundColor: {
      type: String,
      default: "#FFF",
    },
    onClick: {
      type: Function,
      default: function() {}
    }
  },
  template: '<button class="mi-boton" :style="{ border, color, backgroundColor }" @click="onClick"><slot /></button>',
});