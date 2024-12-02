Sistema_de_modulos.definir("lib/sistema_de_fechas", [], function () {
  class SistemaDeFechas {
    constructor() {
      this.formatoFecha = 'DD/MM/YYYY HH:mm:ss.SSS';
    }
    deTextoAFecha(textoFecha) {
      const partesFecha = textoFecha.split(/[\s/:.]+/);
      const [dia, mes, anio, hora, minutos, segundos, milisegundos] = partesFecha.map(Number);
      return new Date(anio, mes - 1, dia, hora, minutos, segundos, milisegundos || 0);
    }
    deFechaATexto(fecha) {
      const dia = fecha.getDate().toString().padStart(2, '0');
      const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
      const anio = fecha.getFullYear();
      const hora = fecha.getHours().toString().padStart(2, '0');
      const minutos = fecha.getMinutes().toString().padStart(2, '0');
      const segundos = fecha.getSeconds().toString().padStart(2, '0');
      const milisegundos = fecha.getMilliseconds().toString().padStart(3, '0');
      return `${dia}/${mes}/${anio} ${hora}:${minutos}:${segundos}.${milisegundos}`;
    }
  }
  return new SistemaDeFechas();
});