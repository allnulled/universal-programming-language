// Definir el componente Vue para el layout vertical
Vue.component('mi-layout-vertical', {
  template: `
    <div class="vertical-layout">
      <slot></slot>
    </div>
  `
});

// Definir el componente Vue para el layout horizontal
Vue.component('mi-layout-horizontal', {
  template: `
    <div class="horizontal-layout">
      <slot></slot>
    </div>
  `
});
