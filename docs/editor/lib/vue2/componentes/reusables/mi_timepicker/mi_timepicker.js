// Definir el componente Vue
Vue.component('mi-timepicker', {
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
  template: `<div>
    <mi-datepicker :on-change="v => dateValue" />
    <mi-hourpicker :on-change="v => hourValue" />
  </div>`,
  data: function() {
    return {
      dateValue: "",
      hourValue: ""
    };
  },
  computed: {
    timeValue() {
      return this.dateValue + " " + this.hourValue;
    }
  },
  watch: {
    inputValue: function(value) {
      this.onChange(value);
    }
  }
});
