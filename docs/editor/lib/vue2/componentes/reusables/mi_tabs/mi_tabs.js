// Definir el componente Vue para el tab
Vue.component('mi-tab', {
  props: ['title'],
  template: `
    <div v-show="active">
      <slot></slot>
    </div>
  `,
  data: function() {
    return {
      active: false
    };
  },
  mounted() {
    this.$parent.registerTab(this);
  }
});

// Definir el componente Vue para los tabs
Vue.component('mi-tabs', {
  data: function() {
    return {
      activeTabIndex: 0,
      tabs: []
    };
  },
  methods: {
    registerTab(tab) {
      this.tabs.push(tab);
      if (this.tabs.length === 1) {
        tab.active = true;
      }
    },
    activateTab(index) {
      this.tabs.forEach((tab, i) => {
        tab.active = i === index;
      });
    }
  },
  template: `
    <div>
      <div>
        <button v-for="(tab, index) in tabs" :key="index" @click="activateTab(index)">
          {{ tab.title }}
        </button>
      </div>
      <div>
        <slot></slot>
      </div>
    </div>
  `
});
