![Starter_front_oldschool](./docs/starter-front-oldschool.png)

Proyecto starter para aplicaciones basadas en tecnología web HTML5.

## Ventajas

- Sin proceso de construcción
- Sin dependencias NPM obligatorias
- Sin uso de módulos ES6 (import/export)
- Sistema de módulos asíncronos. Para definir interdependencias fácilmente.
- Carga de JavaScript y CSS dinámica y programática.
- Variables de entorno.
- Sistema de base de datos IndexedDB. Para persistencia de datos offline masivo.
- Sistema de aleatorización. Para entrada de información aleatoria.
- Sistema de almacenamiento sincronizable. Para patrones publish/subscribe de estados.
- Sistema de comunicaciones. Para AJAX, sockets, etc.
- Sistema de fechas. Para pasar de texto a fecha y viceversa fácilmente.
- Sistema de hooks. Para esparcir ganchos programáticos por la aplicación, y futuro soporte de plugins.
- Sistema de rutas. Para definir las rutas de la aplicación. Vía vue-router.
- Sistema de diálogos. Para gestionar diálogos rápidamente.
- Sistema de plantillas. Para usar EJS de forma estandarizada.
- Componentes con vue (versión 2).
- Internacionalización con vue-i18n.
- Routing con vue-router.
- Estilos basados en win7.css.
- Estilos dinámicos basados en EJS con los nuevos ficheros `*.jcss`.
- Kit de componentes básicos personalizables.
- Orientado a la programación funcional y modular.
- Con refresco automático del navegador. Para no perder ni un segundo en tus desarrollos.
- Con payload en el refresco. Para emplazarte automáticamente en la parte de la aplicación que estás desarrollando.
- Permite carga de lógicas y estilos condicionalmente. Para cargar lógica dinámicamente, basándose en variables, etc.
- Fácil de comprender.
- Fácil de extender.

## Librerías externas

- Vue (v2)
- Vue-Router
- Vue-I18n
- EJS
- jQuery
- jQuery-UI
- Win7.css

## Instalación

Clonar el repositorio en el directorio pertinente.

Si además quieres usar el `reloader.js` que es para detectar cambios y refrescar el navegador automáticamente, tienes que hacer:

```sh
npm install
```

Se instalarán algunas dependencias, como chokidar, socket.io o express. Luego tienes que encender el servidor para escuchar los cambios en los ficheros, y notificárselo al cliente para que refresque automáticamente.

```
node reloader.js
```

Y de ahí el cliente ya se conectará automáticamente, siempre que detecte que está en entorno de `NODE_ENV=test`.

## Uso

Hay 2 scripts: `serve.sh` y `serve.bat`. Se basan en `npx` y el módulo `http-server`, por lo cual se necesitan instalados en el espacio de nombres global de `npm` para arrancarlo.

Alternativamente, puedes usar cualquier servidor estático que se preste para colocar la aplicación, porque se basa únicamente en HTML5, CSS y JavaScript.

## Instrucciones

La distribución de directorios es bastante intuitiva.

Cabe destacar la importancia de algunos ficheros y directorios:

 - **index.js**: el arranque global.
 - **lib**: el directorio de librerías.
 - **lib/aplicacion/aplicacion.js**: el arranque de la aplicación.
 - **lib/aplicacion/estilos/variables.js**: puramente una definición de variables globales de estilos.
 - **lib/aplicacion/estilos/aplicacion.jcss**: los estilos específicos de la aplicación.
 - **lib/aplicacion/estilos/framework.jcss**: los estilos que quieres tener en el framework global.
 - **lib/aplicacion/estilos/aplicacion.jcss**: los estilos específicos de la aplicación.
 - **lib/aplicacion/aplicacion.js**: el arranque de la aplicación.
 - **lib/vue2/componentes**: los componentes gráficos basados en vue.js versión 2.
 - **lib/externos**: las librerías de terceros.
 - **lib/externos/externos.js**: donde registras los módulos externos globales como módulos del sistema.
 
A partir de ahí, es irse fijando en los ejemplos que ya hay, e ir copiando la forma de definir y cargar módulos.

