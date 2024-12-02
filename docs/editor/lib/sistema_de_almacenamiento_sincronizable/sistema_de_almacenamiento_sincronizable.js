Sistema_de_modulos.definir("lib/sistema_de_almacenamiento_sincronizable", [], function () {
  class SistemaDeAlmacenamientoSincronizable {
    constructor() {
      this.state = {
        counter: 0
      };
      this.subscriptions = [];
    }
    getState() {
      return this.state;
    }
    setState(propertyPath, value) {
      let currentState = this.state;
      for (let i = 0; i < propertyPath.length - 1; i++) {
        currentState = currentState[propertyPath[i]];
      }
      currentState[propertyPath[propertyPath.length - 1]] = value;
      this.notifySubscribers(propertyPath);
    }
    subscribe(callback) {
      this.subscriptions.push(callback);
      return () => {
        this.subscriptions = this.subscriptions.filter(sub => sub !== callback);
      };
    }
    notifySubscribers(propertyPath) {
      this.subscriptions.forEach(subscription => {
        subscription(this.state, propertyPath);
      });
    }
  }
  /*
  const store = new SistemaDeAlmacenamientoSincronizable();
  const unsubscribe = store.subscribe((state, propertyPath) => {
    console.log('Nuevo estado:', state, 'en', propertyPath);
  });
  store.setState(['counter'], 42);
  unsubscribe();
  //*/
  return new SistemaDeAlmacenamientoSincronizable();
});