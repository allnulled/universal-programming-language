// Definir el componente Vue para el radio button
Vue.component('mi-radiobutton', {
  props: ['label', 'value', 'name'],
  template: `
    <div>
      <input type="radio" :id="value" :value="value" v-model="$parent.selectedOption" name="name">
      <label :for="value">{{ label }}</label>
    </div>
  `
});

// Definir el componente Vue para los radio buttons
Vue.component('mi-radiobuttons', {
  props: ['options', 'name'],
  template: `
    <div>
      <mi-radiobutton v-for="option in options" :key="option.id" :label="option.label" :value="option.label" @change="$parent.handleOptionChange(option)" :name="name">
      </mi-radiobutton>
    </div>
  `
});
