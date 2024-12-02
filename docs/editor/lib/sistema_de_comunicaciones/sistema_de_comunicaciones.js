Sistema_de_modulos.definir("lib/sistema_de_comunicaciones", [], function () {
    class SistemaDeComunicaciones {
        static ajax(method, url, data = null, headers = {}) {
            return new Promise((resolve, reject) => {
                const request = new XMLHttpRequest();
                request.open(method.toUpperCase(), url);
                for (const [header, value] of Object.entries(headers)) {
                    request.setRequestHeader(header, value);
                }
                request.onload = () => {
                    if (request.status >= 200 && request.status < 300) {
                        resolve({
                            status: request.status,
                            headers: request.getAllResponseHeaders(),
                            data: request.responseText
                        });
                    } else {
                        reject(new Error(`HTTP error ${request.status}: ${request.statusText}`));
                    }
                };
                request.onerror = () => {
                    reject(new Error('Network error'));
                };
                request.send(data);
            });
        }
    }
    return SistemaDeComunicaciones;
});

/*
  try {
      const response = await SistemaDeComunicaciones.ajax('POST', 'https://jsonplaceholder.typicode.com/posts/1', {}, {Authorization: 'xxx'});
      console.log(response);
  } catch (error) {
      console.error('Error:', error);
  }
//*/