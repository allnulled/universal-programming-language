// Definir el componente Vue
Vue.component('mi-checkbox', {
  props: ['label'],
  template: `
    <label>
      <input type="checkbox" v-bind:checked="isChecked" v-on:change="handleChange">
      {{ label }}
    </label>
  `,
  data: function() {
    return {
      isChecked: false
    };
  },
  methods: {
    handleChange: function(event) {
      this.isChecked = event.target.checked;
      this.$emit('input', this.isChecked);
    }
  }
});
