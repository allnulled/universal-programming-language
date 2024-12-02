Sistema_de_modulos.definir("lib/sistema_de_aleatorizacion", [], function () {
  class SistemaDeAleatorizacion {
    constructor() {
      this.abecedario = 'abcdefghijklmnopqrstuvwxyz';
      this.vocales = 'aeiou';
      this.consonantes = 'bcdfghjklmnpqrstvwxyz';
    }
    numeroAleatorio(minimo, maximo) {
      return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    }
    textoAleatorio(longitud) {
      let texto = '';
      for (let i = 0; i < longitud; i++) {
        const indice = this.numeroAleatorio(0, this.abecedario.length - 1);
        texto += this.abecedario[indice];
      }
      return texto;
    }
    palabraAleatoria(numero) {
      let palabra = '';
      for (let i = 0; i < numero; i++) {
        const consonante = this.consonantes[this.numeroAleatorio(0, this.consonantes.length - 1)];
        const vocal = this.vocales[this.numeroAleatorio(0, this.vocales.length - 1)];
        palabra += consonante + vocal;
      }
      return palabra;
    }
    literaturaAleatoria(numero) {
      let literatura = '';
      for (let i = 0; i < numero; i++) {
        literatura += this.palabraAleatoria(this.numeroAleatorio(1, 5)) + ' ';
      }
      return literatura.trim();
    }
    fechaAleatoria(anioInicio, anioFin) {
      const año = this.numeroAleatorio(anioInicio, anioFin);
      const mes = this.numeroAleatorio(1, 12);
      const dia = this.numeroAleatorio(1, new Date(año, mes, 0).getDate());
      const horas = this.numeroAleatorio(0, 23);
      const minutos = this.numeroAleatorio(0, 59);
      const segundos = this.numeroAleatorio(0, 59);
      const milisegundos = this.numeroAleatorio(0, 999);
      return new Date(año, mes - 1, dia, horas, minutos, segundos, milisegundos);
    }
  }
  return new SistemaDeAleatorizacion();

  /* 
  // Uso:
  const generador = new SistemaDeAleatorizacion();
  
  console.log('Número Aleatorio:', generador.numeroAleatorio(1, 10));
  console.log('Texto Aleatorio:', generador.textoAleatorio(8));
  console.log('Palabra Aleatoria:', generador.palabraAleatoria(3));
  console.log('Literatura Aleatoria:', generador.literaturaAleatoria(5));
  console.log('Fecha Aleatoria:', generador.fechaAleatoria(2000, 2022));
  //*/

});