// Definir el componente Vue
Vue.component('mi-textarea', {
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
  template: '<textarea :placeholder="placeholder" v-model="inputValue"></textarea>',
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
