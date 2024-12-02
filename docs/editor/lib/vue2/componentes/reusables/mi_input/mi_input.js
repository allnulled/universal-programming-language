// Definir el componente Vue
Vue.component('mi-input', {
  props: {
    placeholder: {
      type: String,
      default: function() { return "" }
    },
    onChange: {
      type: Function,
      default: function() {}
    },
    onFocus: {
      type: Function,
      default: function() {}
    },
    onBlur: {
      type: Function,
      default: function() {}
    }
  },
  template: '<input type="text" :placeholder="placeholder" v-model="inputValue">',
  data: function() {
    return {
      inputValue: ''
    };
  },
  watch: {
    inputValue: function(value) {
      this.onChange(value);
    }
  }
});
