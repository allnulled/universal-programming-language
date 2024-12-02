Sistema_de_modulos.definir("lib/sistema_de_refresco_automatico", [
  "lib/variables_de_entorno",
  "socket.io"
], function (envvars, socket_io) {
  if(envvars.NODE_ENV === "test") {
    // return "No se ejecuta ningún test de usuario en esta aplicación";
    const serverUrl = 'http://127.0.0.1';
    const serverPort = 3000;
    const socket = socket_io(`${serverUrl}:${serverPort}`);
    socket.on('refrescar', () => {
      console.log('Recibida la señal de refrescar desde el servidor');
      location.reload();
    });
    const payload = function() {
      // @TODO: sirve para emplazarte en el punto de desarrollo concreto automáticamente al empezar.
      setTimeout(function() {
        // document.querySelectorAll("button")[1].click();
      }, 1000 * 3);
    };
    payload();
    return socket;
  }
  return false;
});