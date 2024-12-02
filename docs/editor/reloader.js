const PORT = process.env.PORT || 3000;
const express = require('express');
const http = require('http');
const path = require('path');
const socketIo = require('socket.io');
const chokidar = require('chokidar');

const app = express();
const server = http.createServer(app);
app.use(express.static(__dirname));
const io = socketIo(server, {
  /*
  cors: {
    origin: "*"
  }
  //*/
});

io.on('connection', (socket) => {
  console.log('Un cliente se ha conectado');
  socket.on('refrescar', () => {
    console.log('El servidor ha recibido la señal de refrescar');
    io.emit('refrescar');
  });
  socket.on('disconnect', () => {
    console.log('Un cliente se ha desconectado');
  });
});

const directorioActual = __dirname;
const patrones = ['**/*.js', '**/*.css', '**/*.jcss', '**/*.xml', '**/*.html'];
const watcher = chokidar.watch(patrones.map(pat => path.join(directorioActual, pat)), {
  persistent: true,
  ignoreInitial: true,
  depth: Infinity,
  recursive: true
});
watcher.on('change', (evento, ruta) => {
  console.log(`Cambios han habido en el archivo: ${ruta}`);
  io.emit("refrescar");
});
watcher.on('error', error => {
  console.error('Error en el observador:', error);
});

server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
