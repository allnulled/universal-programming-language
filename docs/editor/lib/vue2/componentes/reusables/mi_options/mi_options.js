// Definir el componente Vue para el option
Vue.component('mi-option', {
  props: ['value'],
  template: `
    <option v-bind:value="value">{{ value }}</option>
  `
});

// Definir el componente Vue para los options
Vue.component('mi-options', {
  data: function() {
    return {
      selectedOption: ''
    };
  },
  methods: {
    handleSelect(event) {
      this.selectedOption = event.target.value;
    }
  },
  template: `
    <select v-model="selectedOption" @change="handleSelect">
      <slot></slot>
    </select>
  `
});
