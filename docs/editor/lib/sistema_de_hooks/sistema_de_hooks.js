Sistema_de_modulos.definir("lib/sistema_de_hooks", [], function () {
  class SistemaDeHooks {
    constructor() {
      this.hooks = {};
    }
    agregarHook(nombre, callback, prioridad = 0) {
      if (!this.hooks[nombre]) {
        this.hooks[nombre] = [];
      }
      this.hooks[nombre].push({ callback, prioridad });
      // Ordenar los hooks por prioridad
      this.hooks[nombre].sort((a, b) => b.prioridad - a.prioridad);
    }
    async ejecutarHooks(nombre, ...args) {
      const hooks = this.hooks[nombre] || [];
      for (const hook of hooks) {
        await hook.callback(...args);
      }
    }
  }
  return new SistemaDeHooks();
});