(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.xcomponents_components = {};
window.xcomponents_api = {};

const xbiglist = require("./xbiglist/xbiglist.js");
const xbiglistitem = require("./xbiglistitem/xbiglistitem.js");
const xbreadcrumb = require("./xbreadcrumb/xbreadcrumb.js");
const xbutton = require("./xbutton/xbutton.js");
const xcollapsible = require("./xcollapsible/xcollapsible.js");
const xcollapser = require("./xcollapser/xcollapser.js");
const xdialogport = require("./xdialogport/xdialogport.js");
const xdialogcurrent = require("./xdialogport/xdialogcurrent.js");
const xform = require("./xform/xform.js");
const xformcheckbox = require("./xformcheckbox/xformcheckbox.js");
const xformcheckboxes = require("./xformcheckboxes/xformcheckboxes.js");
const xformcombobox = require("./xformcombobox/xformcombobox.js");
const xformfield = require("./xformfield/xformfield.js");
const xformtextarea = require("./xformtextarea/xformtextarea.js");
const xformselect = require("./xformselect/xformselect.js");
const xformnumber = require("./xformnumber/xformnumber.js");
const xformrange = require("./xformrange/xformrange.js");
const xformdate = require("./xformdate/xformdate.js");
const xformtime = require("./xformtime/xformtime.js");
const xformdatetime = require("./xformdatetime/xformdatetime.js");
const xjumbotron = require("./xjumbotron/xjumbotron.js");
const xlabel = require("./xlabel/xlabel.js");
const xlayout = require("./xlayout/xlayout.js");
const xlayoutnopaddingbottom = require("./xlayoutnopaddingbottom/xlayoutnopaddingbottom.js");
const xlayoutnopaddingtop = require("./xlayoutnopaddingtop/xlayoutnopaddingtop.js");
const xlayoutnopaddingvertical = require("./xlayoutnopaddingvertical/xlayoutnopaddingvertical.js");
const xlayoutvertical = require("./xlayoutvertical/xlayoutvertical.js");
const xlayoutverticalitem = require("./xlayoutverticalitem/xlayoutverticalitem.js");
const xlayouthorizontal = require("./xlayouthorizontal/xlayouthorizontal.js");
const xlayouthorizontalitem = require("./xlayouthorizontalitem/xlayouthorizontalitem.js");
const xlink = require("./xlink/xlink.js");
const xlist = require("./xlist/xlist.js");
const xlistitem = require("./xlistitem/xlistitem.js");
const xonscreendependant = require("./xonscreendependant/xonscreendependant.js");
const xonscreenlg = require("./xonscreenlg/xonscreenlg.js");
const xonscreenmd = require("./xonscreenmd/xonscreenmd.js");
const xonscreensm = require("./xonscreensm/xonscreensm.js");
const xonscreenxl = require("./xonscreenxl/xonscreenxl.js");
const xonscreenxs = require("./xonscreenxs/xonscreenxs.js");
const xpage = require("./xpage/xpage.js");
const xpanel = require("./xpanel/xpanel.js");
const xparagraph = require("./xparagraph/xparagraph.js");
const xpill = require("./xpill/xpill.js");
const xprogressbar = require("./xprogressbar/xprogressbar.js");
const xseparator = require("./xseparator/xseparator.js");
const xspinner = require("./xspinner/xspinner.js");
const xsubtitle = require("./xsubtitle/xsubtitle.js");
const xtableviewer = require("./xtableviewer/xtableviewer.js");
const xtable = require("./xtable/xtable.js");
const xtablecell = require("./xtablecell/xtablecell.js");
const xtablerow = require("./xtablerow/xtablerow.js");
const xtablehead = require("./xtablehead/xtablehead.js");
const xtableheader = require("./xtableheader/xtableheader.js");
const xtablebody = require("./xtablebody/xtablebody.js");
const xtablayout = require("./xtablayout/xtablayout.js");
const xtab = require("./xtab/xtab.js");
const xtester = require("./xtester/xtester.js");
const xtitle = require("./xtitle/xtitle.js");
const xtooltip = require("./xtooltip/xtooltip.js");
const xwindow = require("./xwindow/xwindow.js");
const xwindowbody = require("./xwindowbody/xwindowbody.js");
const xwindowfooter = require("./xwindowfooter/xwindowfooter.js");
const xwindowfooteritem = require("./xwindowfooteritem/xwindowfooteritem.js");
const xwindowtitle = require("./xwindowtitle/xwindowtitle.js");
const vuejsCalendario = require("./vuejs-calendario/vuejs-calendario.js");
const xstatic = require("./xstatic/xstatic.js");

Object.assign(window.xcomponents_api, {
    components: window.xcomponents_components
});

window.xcomponents_api.default = window.xcomponents_api;

module.exports = window.xcomponents_api;
},{"./vuejs-calendario/vuejs-calendario.js":2,"./xbiglist/xbiglist.js":3,"./xbiglistitem/xbiglistitem.js":4,"./xbreadcrumb/xbreadcrumb.js":5,"./xbutton/xbutton.js":6,"./xcollapser/xcollapser.js":7,"./xcollapsible/xcollapsible.js":8,"./xdialogport/xdialogcurrent.js":9,"./xdialogport/xdialogport.js":10,"./xform/xform.js":11,"./xformcheckbox/xformcheckbox.js":12,"./xformcheckboxes/xformcheckboxes.js":13,"./xformcombobox/xformcombobox.js":14,"./xformdate/xformdate.js":15,"./xformdatetime/xformdatetime.js":16,"./xformfield/xformfield.js":17,"./xformnumber/xformnumber.js":18,"./xformrange/xformrange.js":19,"./xformselect/xformselect.js":20,"./xformtextarea/xformtextarea.js":21,"./xformtime/xformtime.js":22,"./xjumbotron/xjumbotron.js":23,"./xlabel/xlabel.js":24,"./xlayout/xlayout.js":25,"./xlayouthorizontal/xlayouthorizontal.js":26,"./xlayouthorizontalitem/xlayouthorizontalitem.js":27,"./xlayoutnopaddingbottom/xlayoutnopaddingbottom.js":28,"./xlayoutnopaddingtop/xlayoutnopaddingtop.js":29,"./xlayoutnopaddingvertical/xlayoutnopaddingvertical.js":30,"./xlayoutvertical/xlayoutvertical.js":31,"./xlayoutverticalitem/xlayoutverticalitem.js":32,"./xlink/xlink.js":33,"./xlist/xlist.js":34,"./xlistitem/xlistitem.js":35,"./xonscreendependant/xonscreendependant.js":36,"./xonscreenlg/xonscreenlg.js":37,"./xonscreenmd/xonscreenmd.js":38,"./xonscreensm/xonscreensm.js":39,"./xonscreenxl/xonscreenxl.js":40,"./xonscreenxs/xonscreenxs.js":41,"./xpage/xpage.js":42,"./xpanel/xpanel.js":43,"./xparagraph/xparagraph.js":44,"./xpill/xpill.js":45,"./xprogressbar/xprogressbar.js":46,"./xseparator/xseparator.js":47,"./xspinner/xspinner.js":48,"./xstatic/xstatic.js":49,"./xsubtitle/xsubtitle.js":50,"./xtab/xtab.js":51,"./xtablayout/xtablayout.js":52,"./xtable/xtable.js":53,"./xtablebody/xtablebody.js":54,"./xtablecell/xtablecell.js":55,"./xtablehead/xtablehead.js":56,"./xtableheader/xtableheader.js":57,"./xtablerow/xtablerow.js":58,"./xtableviewer/xtableviewer.js":59,"./xtester/xtester.js":60,"./xtitle/xtitle.js":61,"./xtooltip/xtooltip.js":62,"./xwindow/xwindow.js":63,"./xwindowbody/xwindowbody.js":64,"./xwindowfooter/xwindowfooter.js":65,"./xwindowfooteritem/xwindowfooteritem.js":66,"./xwindowtitle/xwindowtitle.js":67}],2:[function(require,module,exports){

window.VuejsCalendario = Castelog.metodos.un_componente_vue2("VuejsCalendario",
  "<div class=\"Component VuejsCalendario\">"
 + "    <div class=\"vuejs_calendario_contenedor\">"
 + "      <template v-if=\"mode === 'datetime' || mode === 'date'\">"
 + "        <div v-if=\"['datetime','date'].indexOf(mode) !== -1\" class=\"chivato_de_fecha\">{{ obtener_fecha_formateada(fecha_seleccionada) }}</div>"
 + "        <div v-if=\"['datetime','time'].indexOf(mode) !== -1\" class=\"chivato_de_fecha\">{{ espaciar_izquierda(hora_seleccionada, 2) }}:{{ espaciar_izquierda(minuto_seleccionado, 2) }}:{{ espaciar_izquierda(segundo_seleccionado, 2) }}.{{ espaciar_izquierda(milisegundo_seleccionado, 3) }}</div>"
 + "        <table class=\"tabla_de_calendario\">"
 + "          <tbody>"
 + "            <tr>"
 + "              <td>"
 + "                <button class=\"boton_de_mover_mes\" v-on:click=\"ir_a_mes_anterior\"> ◀ </button>"
 + "              </td>"
 + "              <td>"
 + "                <button class=\"boton_de_mover_mes\" v-on:click=\"ir_a_mes_siguiente\"> ▶ </button>"
 + "              </td>"
 + "            </tr>"
 + "          </tbody>"
 + "        </table>"
 + "        <table class=\"tabla_de_calendario\">"
 + "          <tbody>"
 + "            <tr v-for=\"semana, semana_index in celdas_del_mes_actual\" v-bind:key=\"'semana-' + semana_index\">"
 + "              <td v-for=\"dia, dia_index in semana\" v-bind:key=\"'dia-' + dia_index\">"
 + "                <span v-if=\"dia\">"
 + "                  <button class=\"boton_de_calendario\" :class=\"{active: dia.getDate() === fecha_seleccionada.getDate()}\" v-on:click=\"() => seleccionar_dia(dia)\">{{ dia.getDate() }}</button>"
 + "                </span>"
 + "              </td>"
 + "            </tr>"
 + "          </tbody>"
 + "        </table>"
 + "      </template>"
 + "      <template v-if=\"mode === 'datetime' || mode === 'time'\">"
 + "        <table class=\"tabla_de_calendario\">"
 + "          <tbody>"
 + "            <tr>"
 + "              <td>"
 + "                <button class=\"boton_de_calendario\" v-on:click=\"agregar_hora\"> ▲ </button>"
 + "              </td>"
 + "              <td>"
 + "                <button class=\"boton_de_calendario\" v-on:click=\"agregar_minuto\"> ▲ </button>"
 + "              </td>"
 + "              <td>"
 + "                <button class=\"boton_de_calendario\" v-on:click=\"agregar_segundo\"> ▲ </button>"
 + "              </td>"
 + "            </tr>"
 + "            <tr>"
 + "              <td>"
 + "                <table>"
 + "                  <tr>"
 + "                    <td><input class=\"entrada_de_calendario\" type=\"text\" v-model=\"hora_seleccionada\" /></td>"
 + "                  </tr>"
 + "                </table>"
 + "              </td>"
 + "              <td>"
 + "                <table>"
 + "                  <tr>"
 + "                    <td><input class=\"entrada_de_calendario\" type=\"text\" v-model=\"minuto_seleccionado\" /></td>"
 + "                  </tr>"
 + "                </table>"
 + "              </td>"
 + "              <td>"
 + "                <table>"
 + "                  <tr>"
 + "                    <td><input class=\"entrada_de_calendario\" type=\"text\" v-model=\"segundo_seleccionado\" /></td>"
 + "                  </tr>"
 + "                </table>"
 + "              </td>"
 + "            </tr>"
 + "            <tr>"
 + "              <td>"
 + "                <button class=\"boton_de_calendario\" v-on:click=\"quitar_hora\"> ▼ </button>"
 + "              </td>"
 + "              <td>"
 + "                <button class=\"boton_de_calendario\" v-on:click=\"quitar_minuto\"> ▼ </button>"
 + "              </td>"
 + "              <td>"
 + "                <button class=\"boton_de_calendario\" v-on:click=\"quitar_segundo\"> ▼ </button>"
 + "              </td>"
 + "            </tr>"
 + "            <tr>"
 + "              <td colspan=\"100\">"
 + "                <input class=\"entrada_de_calendario\" type=\"text\" v-model=\"milisegundo_seleccionado\" />"
 + "              </td>"
 + "            </tr>"
 + "          </tbody>"
 + "        </table>"
 + "      </template>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ mode:{ type:String,
default:function() {try {
return "datetime";
} catch(error) {
console.log(error);
throw error;
}

}
},
initialValue:{ type:String,
default:function() {try {
return "";
} catch(error) {
console.log(error);
throw error;
}

}
},
onChange:{ type:Function,
default:function() {
}
}
},
data() {try {
return { fecha_seleccionada:undefined,
celdas_del_mes_actual:undefined,
hora_seleccionada:"0",
minuto_seleccionado:"0",
segundo_seleccionado:"0",
milisegundo_seleccionado:"0"
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ ir_a_mes_anterior() {try {
const nueva_fecha = new Date( this.fecha_seleccionada );
nueva_fecha.setMonth( nueva_fecha.getMonth(  ) - 1 );
this.fecha_seleccionada = nueva_fecha;
} catch(error) {
console.log(error);
throw error;
}

},
ir_a_mes_siguiente() {try {
const nueva_fecha = new Date( this.fecha_seleccionada );
nueva_fecha.setMonth( nueva_fecha.getMonth(  ) + 1 );
this.fecha_seleccionada = nueva_fecha;
} catch(error) {
console.log(error);
throw error;
}

},
agregar_hora() {try {
let hora = parseInt( this.hora_seleccionada );
hora += 1;
this.hora_seleccionada = hora;
} catch(error) {
console.log(error);
throw error;
}

},
agregar_minuto() {try {
let minuto = parseInt( this.minuto_seleccionado );
minuto += 1;
this.minuto_seleccionado = minuto;
} catch(error) {
console.log(error);
throw error;
}

},
agregar_segundo() {try {
let segundo = parseInt( this.segundo_seleccionado );
segundo += 1;
this.segundo_seleccionado = segundo;
} catch(error) {
console.log(error);
throw error;
}

},
quitar_hora() {try {
let hora = parseInt( this.hora_seleccionada );
hora -= 1;
this.hora_seleccionada = hora;
} catch(error) {
console.log(error);
throw error;
}

},
quitar_minuto() {try {
let minuto = parseInt( this.minuto_seleccionado );
minuto -= 1;
this.minuto_seleccionado = minuto;
} catch(error) {
console.log(error);
throw error;
}

},
quitar_segundo() {try {
let segundo = parseInt( this.segundo_seleccionado );
segundo -= 1;
this.segundo_seleccionado = segundo;
} catch(error) {
console.log(error);
throw error;
}

},
seleccionar_dia( dia ) {try {
this.fecha_seleccionada = dia;
} catch(error) {
console.log(error);
throw error;
}

},
espaciar_izquierda( texto,
longitud,
relleno = "0" ) {try {
let salida = "" + texto;
while(salida.length < longitud) {
salida = relleno + salida;
}
return salida;
} catch(error) {
console.log(error);
throw error;
}

},
obtener_fecha_formateada( fecha ) {try {
if(typeof fecha === 'undefined') {
return;
}
let formato = "";
formato += ( () => {
try {
if(fecha.getDay(  ) === 0) {
return "Domingo";
}
if(fecha.getDay(  ) === 1) {
return "Lunes";
}
if(fecha.getDay(  ) === 2) {
return "Martes";
}
if(fecha.getDay(  ) === 3) {
return "Miércoles";
}
if(fecha.getDay(  ) === 4) {
return "Jueves";
}
if(fecha.getDay(  ) === 5) {
return "Viernes";
}
if(fecha.getDay(  ) === 6) {
return "Sábado";
}
} catch(error) {
console.log(error);
throw error;
}
})();
formato += ", ";
formato += fecha.getDate(  );
formato += " de ";
formato += ( () => {
try {
if(fecha.getMonth(  ) === 0) {
return "Enero";
}
if(fecha.getMonth(  ) === 1) {
return "Febrero";
}
if(fecha.getMonth(  ) === 2) {
return "Marzo";
}
if(fecha.getMonth(  ) === 3) {
return "Abril";
}
if(fecha.getMonth(  ) === 4) {
return "Mayo";
}
if(fecha.getMonth(  ) === 5) {
return "Junio";
}
if(fecha.getMonth(  ) === 6) {
return "Julio";
}
if(fecha.getMonth(  ) === 7) {
return "Agosto";
}
if(fecha.getMonth(  ) === 8) {
return "Septiembre";
}
if(fecha.getMonth(  ) === 9) {
return "Octubre";
}
if(fecha.getMonth(  ) === 10) {
return "Noviembre";
}
if(fecha.getMonth(  ) === 11) {
return "Diciembre";
}
} catch(error) {
console.log(error);
throw error;
}
})();
formato += " de ";
formato += fecha.getFullYear(  );
return formato;
} catch(error) {
console.log(error);
throw error;
}

},
obtener_valor() {try {
let valor = "";
if(this.mode === "datetime" || this.mode === "date") {
valor += this.espaciar_izquierda( this.fecha_seleccionada.getFullYear(  ),
4 );
valor += "-";
valor += this.espaciar_izquierda( this.fecha_seleccionada.getMonth(  ) + 1,
2 );
valor += "-";
valor += this.espaciar_izquierda( this.fecha_seleccionada.getDate(  ),
2 );
}
if(this.mode === "datetime") {
valor += " ";
}
if(this.mode === "datetime" || this.mode === "time") {
valor += this.espaciar_izquierda( this.hora_seleccionada,
2 );
valor += ":";
valor += this.espaciar_izquierda( this.minuto_seleccionado,
2 );
valor += ":";
valor += this.espaciar_izquierda( this.segundo_seleccionado,
2 );
valor += ".";
valor += this.espaciar_izquierda( this.milisegundo_seleccionado,
3 );
}
return valor;
} catch(error) {
console.log(error);
throw error;
}

},
obtener_fecha_a_partir_de_texto( texto_de_fecha_original ) {try {
const argumentos = [  ];
let texto_de_fecha = texto_de_fecha_original;
if(this.mode === "time") {
texto_de_fecha = "2024-01-01 " + texto_de_fecha;
}
if(texto_de_fecha) {
argumentos.push( texto_de_fecha );
}
let date = new Date( 
...(argumentos ) );
if(date instanceof Date && (!(isNaN( date )))) {

}
else {
date = new Date(  );
}
console.log("texto_de_fecha");
console.log(texto_de_fecha);
return date;
} catch(error) {
console.log(error);
throw error;
}

}
},
watch:{ fecha_seleccionada( nuevo_valor ) {try {
const dias = [  ];
const dia_1_del_mes = new Date( nuevo_valor );
dia_1_del_mes.setDate( 1 );
dia_1_del_mes.setHours( 0 );
dia_1_del_mes.setMinutes( 0 );
dia_1_del_mes.setSeconds( 0 );
dia_1_del_mes.setMilliseconds( 0 );
const dias_antes_de_entrar_en_el_mes = ( () => {
try {
const dia_de_semana = dia_1_del_mes.getDay(  );
if(dia_de_semana === 0) {
return 6;
}
if(dia_de_semana === 1) {
return 0;
}
if(dia_de_semana === 2) {
return 1;
}
if(dia_de_semana === 3) {
return 2;
}
if(dia_de_semana === 4) {
return 3;
}
if(dia_de_semana === 5) {
return 4;
}
if(dia_de_semana === 6) {
return 5;
}
} catch(error) {
console.log(error);
throw error;
}
})();
const celdas_vacias_anteriores = new Array( dias_antes_de_entrar_en_el_mes );
const dia_final_del_mes = new Date( nuevo_valor );
dia_final_del_mes.setMonth( dia_final_del_mes.getMonth(  ) + 1 );
dia_final_del_mes.setDate( 1 );
dia_final_del_mes.setDate( dia_final_del_mes.getDate(  ) - 1 );
const numero_final_de_mes = dia_final_del_mes.getDate(  );
let fila_actual = celdas_vacias_anteriores;
for(let index = 1; index < numero_final_de_mes + 1; index++) {const nueva_fecha = new Date( dia_1_del_mes );
nueva_fecha.setDate( index );
fila_actual.push( nueva_fecha );
if(nueva_fecha.getDay(  ) === 0) {
dias.push( fila_actual );
fila_actual = [  ];
}}
if(fila_actual.length) {
dias.push( fila_actual );
}
this.celdas_del_mes_actual = dias;
this.onChange( this.obtener_valor(  ),
this );
} catch(error) {
console.log(error);
throw error;
}

},
hora_seleccionada( nuevo_valor ) {try {
this.onChange( this.obtener_valor(  ),
this );
} catch(error) {
console.log(error);
throw error;
}

},
minuto_seleccionado( nuevo_valor ) {try {
this.onChange( this.obtener_valor(  ),
this );
} catch(error) {
console.log(error);
throw error;
}

},
segundo_seleccionado( nuevo_valor ) {try {
this.onChange( this.obtener_valor(  ),
this );
} catch(error) {
console.log(error);
throw error;
}

},
milisegundo_seleccionado( nuevo_valor ) {try {
this.onChange( this.obtener_valor(  ),
this );
} catch(error) {
console.log(error);
throw error;
}

}
},
mounted() {try {
const date = this.obtener_fecha_a_partir_de_texto( this.initialValue );
console.log(date);
this.fecha_seleccionada = date;
this.hora_seleccionada = date.getHours(  );
this.minuto_seleccionado = date.getMinutes(  );
this.segundo_seleccionado = date.getSeconds(  );
this.milisegundo_seleccionado = date.getMilliseconds(  );
} catch(error) {
console.log(error);
throw error;
}

}
};},
  null);
},{}],3:[function(require,module,exports){

xcomponents_components.xbiglist = Castelog.metodos.un_componente_vue2("xbiglist",
  "<ul class=\"Component xbiglist\">"
 + "    <slot></slot>"
 + "  </ul>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],4:[function(require,module,exports){

xcomponents_components.xbiglistitem = Castelog.metodos.un_componente_vue2("xbiglistitem",
  "<ul class=\"Component xbiglistitem\">"
 + "    <slot></slot>"
 + "  </ul>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],5:[function(require,module,exports){

xcomponents_components.xbreadcrumb = Castelog.metodos.un_componente_vue2("xbreadcrumb",
  "<div class=\"Component xbreadcrumb\">"
 + "    <div class=\"content\">"
 + "      <slot></slot>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],6:[function(require,module,exports){

xcomponents_components.xbutton = Castelog.metodos.un_componente_vue2("xbutton",
  "<button class=\"Component xbutton\">"
 + "    <slot></slot>"
 + "  </button>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],7:[function(require,module,exports){

xcomponents_components.xcollapser = Castelog.metodos.un_componente_vue2("xcollapser",
  "<summary class=\"Component xcollapser\">"
 + "    <slot></slot>"
 + "  </summary>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],8:[function(require,module,exports){

xcomponents_components.xcollapsible = Castelog.metodos.un_componente_vue2("xcollapsible",
  "<details class=\"Component xcollapsible\">"
 + "    <slot></slot>"
 + "  </details>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],9:[function(require,module,exports){

xcomponents_components.xdialogcurrent = Castelog.metodos.un_componente_vue2("xdialogcurrent",
  "<div class=\"Component xdialogcurrent\">"
 + ""
 + "  </div>",
  function(component) {return { props:{ port:{ type:Object,
required:true
}
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],10:[function(require,module,exports){

xcomponents_components.xdialogport = Castelog.metodos.un_componente_vue2("xdialogport",
  "<div class=\"Component xdialogport\">"
 + "    <div class=\"\" v-if=\"dialogs && dialogs.length && !is_loading\">"
 + "      <table>"
 + "        <tbody>"
 + "          <tr>"
 + "            <td>"
 + "              <div>"
 + "                <xdialogcurrent :port=\"this\" ref=\"current_dialog\"></xdialogcurrent>"
 + "              </div>"
 + "            </td>"
 + "          </tr>"
 + "        </tbody>"
 + "      </table>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { is_loading:false,
dialogs:[  ]
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ generate_html_1( html,
title,
footer ) {try {
let html_vue = "";
html_vue += "<xwindow>";
html_vue += " <xwindowtitle>";
html_vue += "  " + title;
html_vue += " </xwindowtitle>";
html_vue += " <xwindowbody>";
html_vue += "  <form v-on:submit='finalize_dialog'>";
html_vue += "   <xlayout>";
html_vue += "   " + html;
html_vue += "   </xlayout>";
html_vue += "  </form>";
html_vue += " </xwindowbody>";
if(footer) {
html_vue += " <xwindowfooter>";
html_vue += "  <xwindowfooteritem>";
html_vue += "   " + footer;
html_vue += "  </xwindowfooteritem>";
html_vue += " </xwindowfooter>";
}
html_vue += "</xwindow>";
return html_vue;
} catch(error) {
console.log(error);
throw error;
}

},
generate_html_2( html,
title,
footer,
button_accept = "Sí",
button_reject = "No" ) {try {
let html_vue = "";
html_vue += "<xwindow>";
html_vue += " <xwindowtitle>";
html_vue += "  " + title;
html_vue += " </xwindowtitle>";
html_vue += " <xwindowbody>";
html_vue += "  <form v-on:submit='finalize_dialog'>";
html_vue += "   <xlayout>";
html_vue += "   " + html;
html_vue += "   </xlayout>";
html_vue += "   <div style='text-align:right;padding:4px;border-top:1px solid #CCC;'>";
html_vue += "     <button v-on:click='finalize_dialog_accepting'>";
html_vue += "       " + button_accept;
html_vue += "     </button>";
html_vue += "     <button v-on:click='finalize_dialog_rejecting'>";
html_vue += "       " + button_reject;
html_vue += "     </button>";
html_vue += "   </div>";
html_vue += "  </form>";
html_vue += " </xwindowbody>";
if(footer) {
html_vue += " <xwindowfooter>";
html_vue += "  <xwindowfooteritem>";
html_vue += "   " + footer;
html_vue += "  </xwindowfooteritem>";
html_vue += " </xwindowfooter>";
}
html_vue += "</xwindow>";
return html_vue;
} catch(error) {
console.log(error);
throw error;
}

},
generate_html_3( html,
title,
footer,
button_accept = "Sí" ) {try {
let html_vue = "";
html_vue += "<xwindow>";
html_vue += " <xwindowtitle>";
html_vue += "  " + title;
html_vue += " </xwindowtitle>";
html_vue += " <xwindowbody>";
html_vue += "  <form v-on:submit='finalize_dialog'>";
html_vue += "   <xlayout>";
html_vue += "   " + html;
html_vue += "   </xlayout>";
html_vue += "   <div style='text-align:right;padding:4px;border-top:1px solid #CCC;'>";
html_vue += "     <button v-on:click='finalize_dialog_accepting'>";
html_vue += "       " + button_accept;
html_vue += "     </button>";
html_vue += "   </div>";
html_vue += "  </form>";
html_vue += " </xwindowbody>";
if(footer) {
html_vue += " <xwindowfooter>";
html_vue += "  <xwindowfooteritem>";
html_vue += "   " + footer;
html_vue += "  </xwindowfooteritem>";
html_vue += " </xwindowfooter>";
}
html_vue += "</xwindow>";
return html_vue;
} catch(error) {
console.log(error);
throw error;
}

},
async reset() {try {
this.is_loading = true;
this.$forceUpdate( true );
setTimeout( () => {try {
this.is_loading = false;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
0 );
} catch(error) {
console.log(error);
throw error;
}

},
obtener_subcomponente(  ) {try {
return { props:{ port:{ type:Object,
required:true
}
},
methods:{ finalize_dialog( evento ) {try {
this.port.close_first(  );
return false;
} catch(error) {
console.log(error);
throw error;
}

},
finalize_dialog_accepting( evento ) {try {
this.port.close_first_accepting(  );
return false;
} catch(error) {
console.log(error);
throw error;
}

},
finalize_dialog_rejecting( evento ) {try {
this.port.close_first_rejecting(  );
return false;
} catch(error) {
console.log(error);
throw error;
}

}
}
};
} catch(error) {
console.log(error);
throw error;
}

},
async extract_fields_from_dialog( current_dialog ) {try {
const formulario = current_dialog.$el.querySelector( "form" );
const elementos = formulario.elements;
const salida = { 
};
iterando_elementos:
for(let index = 0; index < elementos.length; index++) {const elemento = elementos[ index ];
const nombre = elemento.getAttribute( "name" );
const valor = ( () => {
try {
if(elemento.type === "file") {
return elemento.files;
}
else {
return elemento.value;
}
} catch(error) {
console.log(error);
throw error;
}
})();
if((!(typeof nombre === 'string'))) {
continue iterando_elementos;
}
salida[ nombre ] = valor;}
return salida;
} catch(error) {
console.log(error);
throw error;
}

},
get_template_from_dialog( dialogo_2 ) {try {
let html_vue = undefined;
if(dialogo_2.type === "form") {
html_vue = this.generate_html_1( dialogo_2.html,
dialogo_2.title,
dialogo_2.footer );
}
else if(dialogo_2.type === "confirm") {
html_vue = this.generate_html_2( dialogo_2.html,
dialogo_2.title,
dialogo_2.footer,
dialogo_2.button_accept,
dialogo_2.button_reject );
}
else if(dialogo_2.type === "inform") {
html_vue = this.generate_html_3( dialogo_2.html,
dialogo_2.title,
dialogo_2.footer,
dialogo_2.button_accept );
}
else {
throw new Error( "No se identificó el tipo de diálogo" );
}
return html_vue;
} catch(error) {
console.log(error);
throw error;
}

},
async close_first() {try {
const dialogo = this.dialogs.shift(  );
const tipo = dialogo.type;
const datos = this.extract_fields_from_dialog( this.$refs.current_dialog );
dialogo.promise_handler.ok( datos );
if(this.dialogs.length === 0) {
return this.reset(  );
}
const dialogo_2 = this.dialogs[ 0 ];
const html_vue = this.get_template_from_dialog( dialogo_2 );
Vue.component( "xdialogcurrent",
{ template:html_vue,

...(this.obtener_subcomponente(  ) )
} );
this.reset(  );
} catch(error) {
console.log(error);
throw error;
}

},
async close_first_returning( datos ) {try {
const dialogo = this.dialogs.shift(  );
dialogo.promise_handler.ok( datos );
if(this.dialogs.length === 0) {
return this.reset(  );
}
const dialogo_2 = this.dialogs[ 0 ];
const html_vue = this.get_template_from_dialog( dialogo_2 );
Vue.component( "xdialogcurrent",
{ template:html_vue,

...(this.obtener_subcomponente(  ) )
} );
this.reset(  );
} catch(error) {
console.log(error);
throw error;
}

},
async close_first_accepting() {try {
const dialogo = this.dialogs.shift(  );
const tipo = dialogo.type;
const datos = this.extract_fields_from_dialog( this.$refs.current_dialog );
dialogo.promise_handler.ok( true );
if(this.dialogs.length === 0) {
return this.reset(  );
}
const dialogo_2 = this.dialogs[ 0 ];
const html_vue = this.get_template_from_dialog( dialogo_2 );
Vue.component( "xdialogcurrent",
{ template:html_vue,

...(this.obtener_subcomponente(  ) )
} );
this.reset(  );
} catch(error) {
console.log(error);
throw error;
}

},
async close_first_rejecting() {try {
const dialogo = this.dialogs.shift(  );
const tipo = dialogo.type;
const datos = this.extract_fields_from_dialog( this.$refs.current_dialog );
dialogo.promise_handler.ok( false );
if(this.dialogs.length === 0) {
return this.reset(  );
}
const dialogo_2 = this.dialogs[ 0 ];
const html_vue = this.get_template_from_dialog( dialogo_2 );
Vue.component( "xdialogcurrent",
{ template:html_vue,

...(this.obtener_subcomponente(  ) )
} );
this.reset(  );
} catch(error) {
console.log(error);
throw error;
}

},
async form( ...args ) {try {
const [ html_o_todos ] = args;
if(typeof html_o_todos === 'string') {
return this.form_by_parameters( 
...(args ) );
}
if(typeof html_o_todos === 'object') {
return this.form_by_parameters( html_o_todos.html,
html_o_todos.title,
html_o_todos.footer );
}
throw new Error( "Parámetro no identificado en llamada a «xdialogport.form»" );
} catch(error) {
console.log(error);
throw error;
}

},
async form_by_parameters( html,
title = "Mensaje",
footer = false ) {try {
const promise_handler = { 
};
promise_handler.ok = undefined;
promise_handler.fail = undefined;
promise_handler.promise = new Promise( ( ok2,
fail2 ) => {try {
promise_handler.ok = ok2;
promise_handler.fail = fail2;
} catch(error) {
console.log(error);
throw error;
}

} );
this.dialogs.push( { type:"form",
html,
title,
footer,
promise_handler
} );
if(this.dialogs.length === 1) {
const dialogo_2 = this.dialogs[ 0 ];
const html_vue = this.get_template_from_dialog( dialogo_2 );
Vue.component( "xdialogcurrent",
{ template:html_vue,

...(this.obtener_subcomponente(  ) )
} );
this.reset(  );
}
this.$forceUpdate( true );
return promise_handler.promise;
} catch(error) {
console.log(error);
throw error;
}

},
async confirm( ...args ) {try {
const [ html_o_todos ] = args;
if(typeof html_o_todos === 'string') {
return this.confirm_by_parameters( 
...(args ) );
}
if(typeof html_o_todos === 'object') {
return this.confirm_by_parameters( html_o_todos.html,
html_o_todos.title,
html_o_todos.footer,
html_o_todos.button_accept,
html_o_todos.button_reject );
}
throw new Error( "Parámetro no identificado en llamada a «xdialogport.confirm»" );
} catch(error) {
console.log(error);
throw error;
}

},
async confirm_by_parameters( html,
title = "Mensaje",
footer = false,
button_accept = "Sí",
button_reject = "No" ) {try {
const promise_handler = { 
};
promise_handler.ok = undefined;
promise_handler.fail = undefined;
promise_handler.promise = new Promise( ( ok2,
fail2 ) => {try {
promise_handler.ok = ok2;
promise_handler.fail = fail2;
} catch(error) {
console.log(error);
throw error;
}

} );
this.dialogs.push( { type:"confirm",
html,
title,
footer,
button_accept,
button_reject,
promise_handler
} );
if(this.dialogs.length === 1) {
const dialogo_2 = this.dialogs[ 0 ];
const html_vue = this.get_template_from_dialog( dialogo_2 );
Vue.component( "xdialogcurrent",
{ template:html_vue,

...(this.obtener_subcomponente(  ) )
} );
this.reset(  );
}
this.$forceUpdate( true );
return promise_handler.promise;
} catch(error) {
console.log(error);
throw error;
}

},
async inform( ...args ) {try {
const [ html_o_todos ] = args;
if(typeof html_o_todos === 'string') {
return this.inform_by_parameters( 
...(args ) );
}
if(typeof html_o_todos === 'object') {
return this.inform_by_parameters( html_o_todos.html,
html_o_todos.title,
html_o_todos.footer,
html_o_todos.button_accept );
}
throw new Error( "Parámetro no identificado en llamada a «xdialogport.inform»" );
} catch(error) {
console.log(error);
throw error;
}

},
async inform_by_parameters( html,
title = "Mensaje",
footer = false,
button_accept = "Sí" ) {try {
const promise_handler = { 
};
promise_handler.ok = undefined;
promise_handler.fail = undefined;
promise_handler.promise = new Promise( ( ok2,
fail2 ) => {try {
promise_handler.ok = ok2;
promise_handler.fail = fail2;
} catch(error) {
console.log(error);
throw error;
}

} );
this.dialogs.push( { type:"inform",
html,
title,
footer,
button_accept,
promise_handler
} );
if(this.dialogs.length === 1) {
const dialogo_2 = this.dialogs[ 0 ];
const html_vue = this.get_template_from_dialog( dialogo_2 );
Vue.component( "xdialogcurrent",
{ template:html_vue,

...(this.obtener_subcomponente(  ) )
} );
this.reset(  );
}
this.$forceUpdate( true );
return promise_handler.promise;
} catch(error) {
console.log(error);
throw error;
}

},
async error( error ) {try {
const promise_handler = { 
};
promise_handler.ok = undefined;
promise_handler.fail = undefined;
promise_handler.promise = new Promise( ( ok2,
fail2 ) => {try {
promise_handler.ok = ok2;
promise_handler.fail = fail2;
} catch(error) {
console.log(error);
throw error;
}

} );
let html = "";
html += error.message;
html += ". ";
if(error && error.response && error.response.data && error.response.data.error) {
html += ( error.response ? ( error.response.data.error.name + ": " + error.response.data.error.message ) : "" );
}
else {
html += "";
}
html = this.escapeHtml( html );
html = "<xlayout style='color: red;text-shadow: 0 0 2px red;'>" + html + "</xlayout>";
const title = "Error de aplicación";
const footer = "Hubo un error.";
const button_accept = "De acuerdo";
this.dialogs.push( { type:"inform",
html,
title,
footer,
button_accept,
promise_handler
} );
if(this.dialogs.length === 1) {
const dialogo_2 = this.dialogs[ 0 ];
const html_vue = this.get_template_from_dialog( dialogo_2 );
Vue.component( "xdialogcurrent",
{ template:html_vue,

...(this.obtener_subcomponente(  ) )
} );
this.reset(  );
}
this.$forceUpdate( true );
return promise_handler.promise.then( () => {try {
return error;
} catch(error) {
console.log(error);
throw error;
}

} );
} catch(error) {
console.log(error);
throw error;
}

},
escapeHtml( texto ) {try {
return texto.replace( new RegExp( ">",
"g" ),
"&gt;" ).replace( new RegExp( "<",
"g" ),
"&lt;" );
} catch(error) {
console.log(error);
throw error;
}

}
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {try {
Vue.prototype.$dialogs = this;
Vue.prototype.$xdialogport = this;
} catch(error) {
console.log(error);
throw error;
}

},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],11:[function(require,module,exports){

xcomponents_components.xform = Castelog.metodos.un_componente_vue2("xform",
  "<div class=\"Component xform\">"
 + "    <div class=\"content\">"
 + "      <slot></slot>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],12:[function(require,module,exports){

xcomponents_components.xformcheckbox = Castelog.metodos.un_componente_vue2("xformcheckbox",
  "<div class=\"Component xformcheckbox\">"
 + "    <div class=\"form_group\">"
 + "      <div class=\"form_group_label\">"
 + "        <slot></slot>"
 + "      </div>"
 + "      <div>"
 + "        <input class=\"checkbox_input\" type=\"checkbox\" v-model=\"value\" :id=\"customId\" />"
 + "        <label :for=\"customId\">"
 + "          <span v-if=\"value\">{{ messageOnSelected }}</span>"
 + "          <span v-else=\"\">{{ messageOnUnselected }}</span>"
 + "        </label>"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ customId:{ type:String,
default:function() {try {
return Castelog.metodos.un_texto_aleatorio(10, undefined);
} catch(error) {
console.log(error);
throw error;
}

}
},
initialValue:{ type:Boolean,
default:function() {try {
return false;
} catch(error) {
console.log(error);
throw error;
}

}
},
onChange:{ type:Function,
default:function() {
}
},
messageOnSelected:{ type:String,
default:function() {try {
return "Yes";
} catch(error) {
console.log(error);
throw error;
}

}
},
messageOnUnselected:{ type:String,
default:function() {try {
return "No";
} catch(error) {
console.log(error);
throw error;
}

}
}
},
data() {try {
return { value:this.initialValue
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ value( nuevo_valor ) {try {
this.onChange( nuevo_valor,
this );
} catch(error) {
console.log(error);
throw error;
}

}
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],13:[function(require,module,exports){

xcomponents_components.xformcheckboxes = Castelog.metodos.un_componente_vue2("xformcheckboxes",
  "<div class=\"Component xformcheckboxes\">"
 + "    <div class=\"form_group\">"
 + "      <div class=\"form_group_label\">"
 + "        <slot></slot>"
 + "      </div>"
 + "      <div>"
 + "        <div v-for=\"option, option_index in options\" v-bind:key=\"'xformcheckboxes-' + customId + '-option-' + option_index\">"
 + "          <div v-on:click=\"() => select_value(option)\">"
 + "            <input class=\"checkbox_input\" type=\"checkbox\" :checked=\"value.indexOf(option) !== -1\" />"
 + "            <label>{{ option }}</label>"
 + "          </div>"
 + "        </div>"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ customId:{ type:String,
default:function() {try {
return Castelog.metodos.un_texto_aleatorio(10, undefined);
} catch(error) {
console.log(error);
throw error;
}

}
},
initialValue:{ type:Array,
default:function() {try {
return [  ];
} catch(error) {
console.log(error);
throw error;
}

}
},
onChange:{ type:Function,
default:function() {
}
},
options:{ type:Array,
default:function() {try {
return [ "Yes",
"No",
"Maybe" ];
} catch(error) {
console.log(error);
throw error;
}

}
}
},
data() {try {
return { value:this.initialValue
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ select_value( option ) {try {
const posicion = this.value.indexOf( option );
if((!(posicion === 0 - 1))) {
this.value.splice( posicion,
1 );
}
else {
this.value.push( option );
}
} catch(error) {
console.log(error);
throw error;
}

}
},
watch:{ value( nuevo_valor ) {try {
this.onChange( nuevo_valor,
this );
} catch(error) {
console.log(error);
throw error;
}

}
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],14:[function(require,module,exports){

xcomponents_components.xformcombobox = Castelog.metodos.un_componente_vue2("xformcombobox",
  "<div class=\"Component xformcombobox\">"
 + "    <div class=\"form_group\">"
 + "      <div class=\"form_group_label\">"
 + "        <slot></slot>"
 + "      </div>"
 + "      <div>"
 + "        <div v-for=\"option, option_index in options\" v-bind:key=\"'xformcombobox-' + customId + '-option-' + option_index\">"
 + "          <div v-on:click=\"() => select_value(option)\">"
 + "            <input class=\"combobox_input\" type=\"radio\" :id=\"'xformcombobox-' + customId + '-option-' + option_index\" :checked=\"value === option\" />"
 + "            <label :for=\"'xformcombobox-' + customId + '-option-' + option_index\">{{ option }}</label>"
 + "          </div>"
 + "        </div>"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ customId:{ type:String,
default:function() {try {
return Castelog.metodos.un_texto_aleatorio(10, undefined);
} catch(error) {
console.log(error);
throw error;
}

}
},
initialValue:{ type:String,
default:function() {try {
return "";
} catch(error) {
console.log(error);
throw error;
}

}
},
onChange:{ type:Function,
default:function() {
}
},
options:{ type:Array,
default:function() {try {
return [ "Yes",
"No",
"Maybe" ];
} catch(error) {
console.log(error);
throw error;
}

}
}
},
data() {try {
return { value:this.initialValue
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ select_value( option ) {try {
this.value = option;
} catch(error) {
console.log(error);
throw error;
}

}
},
watch:{ value( nuevo_valor ) {try {
this.onChange( nuevo_valor,
this );
} catch(error) {
console.log(error);
throw error;
}

}
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],15:[function(require,module,exports){

xcomponents_components.xformdate = Castelog.metodos.un_componente_vue2("xformdate",
  "<div class=\"Component xformdate\">"
 + "    <div class=\"form_group\">"
 + "      <div class=\"form_group_label\">"
 + "        <slot></slot>"
 + "      </div>"
 + "      <div style=\"position: relative; background-color: #222; color: white;\">"
 + "        <xtable style=\"width:100%;\">"
 + "          <xtablebody>"
 + "            <xtablerow>"
 + "              <xtablecell>"
 + "                <button style=\"min-width: auto;\" v-on:click=\"() => esta_mostrando_calendario = !esta_mostrando_calendario\">🗓</button>"
 + "              </xtablecell>"
 + "              <xtablecell style=\"white-space: nowrap; width:100%;\">"
 + "                <input type=\"text\" v-model=\"value\" style=\"text-align: left; width: 100%;\" disabled=\"true\" />"
 + "              </xtablecell>"
 + "            </xtablerow>"
 + "            <xtablerow v-if=\"esta_mostrando_calendario\">"
 + "              <xtablecell colspan=\"100\" style=\"max-width: 220px;\">"
 + "                <VuejsCalendario mode=\"date\" :initial-value=\"value\" :on-change=\"v => value = v\"></VuejsCalendario>"
 + "              </xtablecell>"
 + "            </xtablerow>"
 + "          </xtablebody>"
 + "        </xtable>"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ initialValue:{ type:String,
default:function() {try {
return "";
} catch(error) {
console.log(error);
throw error;
}

}
},
onChange:{ type:Function,
default:function() {
}
},
placeholder:{ type:String,
default:function() {try {
return "";
} catch(error) {
console.log(error);
throw error;
}

}
},
min:{ type:Number,
default:function() {try {
return 0;
} catch(error) {
console.log(error);
throw error;
}

}
},
max:{ type:Number,
default:function() {try {
return 100;
} catch(error) {
console.log(error);
throw error;
}

}
},
step:{ type:Number,
default:function() {try {
return 10;
} catch(error) {
console.log(error);
throw error;
}

}
}
},
data() {try {
return { esta_mostrando_calendario:false,
value:this.initialValue
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ value( nuevo_valor ) {try {
this.onChange( nuevo_valor,
this );
} catch(error) {
console.log(error);
throw error;
}

}
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],16:[function(require,module,exports){

xcomponents_components.xformdatetime = Castelog.metodos.un_componente_vue2("xformdatetime",
  "<div class=\"Component xformdatetime\">"
 + "    <div class=\"form_group\">"
 + "      <div class=\"form_group_label\">"
 + "        <slot></slot>"
 + "      </div>"
 + "      <div style=\"position: relative; background-color: #222; color: white;\">"
 + "        <xtable style=\"width:100%;\">"
 + "          <xtablebody>"
 + "            <xtablerow>"
 + "              <xtablecell>"
 + "                <button style=\"min-width: auto;\" v-on:click=\"() => esta_mostrando_calendario = !esta_mostrando_calendario\">🗓</button>"
 + "              </xtablecell>"
 + "              <xtablecell style=\"white-space: nowrap; width:100%;\">"
 + "                <input type=\"text\" v-model=\"value\" style=\"text-align: left; width: 100%;\" disabled=\"true\" />"
 + "              </xtablecell>"
 + "            </xtablerow>"
 + "            <xtablerow v-if=\"esta_mostrando_calendario\">"
 + "              <xtablecell colspan=\"100\" style=\"max-width: 220px;\">"
 + "                <VuejsCalendario mode=\"datetime\" :initial-value=\"value\" :on-change=\"v => value = v\"></VuejsCalendario>"
 + "              </xtablecell>"
 + "            </xtablerow>"
 + "          </xtablebody>"
 + "        </xtable>"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ initialValue:{ type:String,
default:function() {try {
return "";
} catch(error) {
console.log(error);
throw error;
}

}
},
onChange:{ type:Function,
default:function() {
}
},
placeholder:{ type:String,
default:function() {try {
return "";
} catch(error) {
console.log(error);
throw error;
}

}
},
min:{ type:Number,
default:function() {try {
return 0;
} catch(error) {
console.log(error);
throw error;
}

}
},
max:{ type:Number,
default:function() {try {
return 100;
} catch(error) {
console.log(error);
throw error;
}

}
},
step:{ type:Number,
default:function() {try {
return 10;
} catch(error) {
console.log(error);
throw error;
}

}
}
},
data() {try {
return { esta_mostrando_calendario:false,
value:this.initialValue
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ value( nuevo_valor ) {try {
this.onChange( nuevo_valor,
this );
} catch(error) {
console.log(error);
throw error;
}

}
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],17:[function(require,module,exports){

xcomponents_components.xformfield = Castelog.metodos.un_componente_vue2("xformfield",
  "<div class=\"Component xformfield\">"
 + "    <div class=\"form_group\">"
 + "      <div class=\"form_group_label\">"
 + "        <slot></slot>"
 + "      </div>"
 + "      <div>"
 + "        <input class=\"text_input\" type=\"text\" v-model=\"value\" :placeholder=\"placeholder\" />"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ initialValue:{ type:String,
default:function() {try {
return "";
} catch(error) {
console.log(error);
throw error;
}

}
},
onChange:{ type:Function,
default:function() {
}
},
placeholder:{ type:String,
default:function() {try {
return "";
} catch(error) {
console.log(error);
throw error;
}

}
}
},
data() {try {
return { value:this.initialValue
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ value( nuevo_valor ) {try {
this.onChange( nuevo_valor,
this );
} catch(error) {
console.log(error);
throw error;
}

}
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],18:[function(require,module,exports){

xcomponents_components.xformnumber = Castelog.metodos.un_componente_vue2("xformnumber",
  "<div class=\"Component xformnumber\">"
 + "    <div class=\"form_group\">"
 + "      <div class=\"form_group_label\">"
 + "        <slot></slot>"
 + "      </div>"
 + "      <div>"
 + "        <input class=\"text_input\" type=\"number\" v-model=\"value\" :placeholder=\"placeholder\" />"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ initialValue:{ type:Number,
default:function() {try {
return 0;
} catch(error) {
console.log(error);
throw error;
}

}
},
onChange:{ type:Function,
default:function() {
}
},
placeholder:{ type:String,
default:function() {try {
return "";
} catch(error) {
console.log(error);
throw error;
}

}
}
},
data() {try {
return { value:this.initialValue
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ value( nuevo_valor ) {try {
this.onChange( nuevo_valor,
this );
} catch(error) {
console.log(error);
throw error;
}

}
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],19:[function(require,module,exports){

xcomponents_components.xformrange = Castelog.metodos.un_componente_vue2("xformrange",
  "<div class=\"Component xformrange\">"
 + "    <div class=\"form_group\">"
 + "      <div class=\"form_group_label\">"
 + "        <slot></slot>"
 + "      </div>"
 + "      <div>"
 + "        <input class=\"text_input\" type=\"range\" v-model=\"value\" :min=\"min\" :max=\"max\" :step=\"step\" :placeholder=\"placeholder\" />"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ initialValue:{ type:Number,
default:function() {try {
return 0;
} catch(error) {
console.log(error);
throw error;
}

}
},
onChange:{ type:Function,
default:function() {
}
},
placeholder:{ type:String,
default:function() {try {
return "";
} catch(error) {
console.log(error);
throw error;
}

}
},
min:{ type:Number,
default:function() {try {
return 0;
} catch(error) {
console.log(error);
throw error;
}

}
},
max:{ type:Number,
default:function() {try {
return 100;
} catch(error) {
console.log(error);
throw error;
}

}
},
step:{ type:Number,
default:function() {try {
return 10;
} catch(error) {
console.log(error);
throw error;
}

}
}
},
data() {try {
return { value:this.initialValue
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ value( nuevo_valor ) {try {
this.onChange( nuevo_valor,
this );
} catch(error) {
console.log(error);
throw error;
}

}
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],20:[function(require,module,exports){

xcomponents_components.xformselect = Castelog.metodos.un_componente_vue2("xformselect",
  "<div class=\"Component xformselect\">"
 + "    <div class=\"form_group\">"
 + "      <div class=\"form_group_label\">"
 + "        <slot></slot>"
 + "      </div>"
 + "      <select class=\"select_input\" v-model=\"value\">"
 + "        <option v-for=\"option, option_index in options\" v-bind:key=\"'xformselect-' + customId + '-option-' + option_index\" :value=\"option\">"
 + "          {{ option }}"
 + "        </option>"
 + "      </select>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ customId:{ type:String,
default:function() {try {
return Castelog.metodos.un_texto_aleatorio(10, undefined);
} catch(error) {
console.log(error);
throw error;
}

}
},
initialValue:{ type:String,
default:function() {try {
return "";
} catch(error) {
console.log(error);
throw error;
}

}
},
onChange:{ type:Function,
default:function() {
}
},
options:{ type:Array,
required:true
}
},
data() {try {
return { value:this.initialValue
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ value( nuevo_valor ) {try {
this.onChange( nuevo_valor,
this );
} catch(error) {
console.log(error);
throw error;
}

}
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],21:[function(require,module,exports){

xcomponents_components.xformtextarea = Castelog.metodos.un_componente_vue2("xformtextarea",
  "<div class=\"Component xformtextarea\">"
 + "    <div class=\"form_group\">"
 + "      <div class=\"form_group_label\">"
 + "        <slot></slot>"
 + "      </div>"
 + "      <div>"
 + "        <textarea class=\"textarea_input\" v-model=\"value\" :placeholder=\"placeholder\"></textarea>"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ initialValue:{ type:String,
default:function() {try {
return "";
} catch(error) {
console.log(error);
throw error;
}

}
},
onChange:{ type:Function,
default:function() {
}
},
placeholder:{ type:String,
default:function() {try {
return "";
} catch(error) {
console.log(error);
throw error;
}

}
}
},
data() {try {
return { value:this.initialValue
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ value( nuevo_valor ) {try {
this.onChange( nuevo_valor,
this );
} catch(error) {
console.log(error);
throw error;
}

}
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],22:[function(require,module,exports){

xcomponents_components.xformtime = Castelog.metodos.un_componente_vue2("xformtime",
  "<div class=\"Component xformtime\">"
 + "    <div class=\"form_group\">"
 + "      <div class=\"form_group_label\">"
 + "        <slot></slot>"
 + "      </div>"
 + "      <div style=\"position: relative; background-color: #222; color: white;\">"
 + "        <xtable style=\"width:100%;\">"
 + "          <xtablebody>"
 + "            <xtablerow>"
 + "              <xtablecell>"
 + "                <button style=\"min-width: auto;\" v-on:click=\"() => esta_mostrando_calendario = !esta_mostrando_calendario\">🗓</button>"
 + "              </xtablecell>"
 + "              <xtablecell style=\"white-space: nowrap; width: 100%;\">"
 + "                <input type=\"text\" v-model=\"value\" style=\"text-align: left; width: 100%;\" disabled=\"true\" />"
 + "              </xtablecell>"
 + "            </xtablerow>"
 + "            <xtablerow v-if=\"esta_mostrando_calendario\">"
 + "              <xtablecell colspan=\"100\" style=\"max-width:220px;\">"
 + "                <VuejsCalendario mode=\"time\" :initial-value=\"value\" :on-change=\"v => value = v\"></VuejsCalendario>"
 + "              </xtablecell>"
 + "            </xtablerow>"
 + "          </xtablebody>"
 + "        </xtable>"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ initialValue:{ type:String,
default:function() {try {
return "";
} catch(error) {
console.log(error);
throw error;
}

}
},
onChange:{ type:Function,
default:function() {
}
},
placeholder:{ type:String,
default:function() {try {
return "";
} catch(error) {
console.log(error);
throw error;
}

}
},
min:{ type:Number,
default:function() {try {
return 0;
} catch(error) {
console.log(error);
throw error;
}

}
},
max:{ type:Number,
default:function() {try {
return 100;
} catch(error) {
console.log(error);
throw error;
}

}
},
step:{ type:Number,
default:function() {try {
return 10;
} catch(error) {
console.log(error);
throw error;
}

}
}
},
data() {try {
return { esta_mostrando_calendario:false,
value:this.initialValue
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ value( nuevo_valor ) {try {
this.onChange( nuevo_valor,
this );
} catch(error) {
console.log(error);
throw error;
}

}
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],23:[function(require,module,exports){

xcomponents_components.xjumbotron = Castelog.metodos.un_componente_vue2("xjumbotron",
  "<div class=\"Component xjumbotron\">"
 + "    <table>"
 + "      <tbody>"
 + "        <tr>"
 + "          <td>"
 + "            <slot></slot>"
 + "          </td>"
 + "        </tr>"
 + "      </tbody>"
 + "    </table>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],24:[function(require,module,exports){

xcomponents_components.xlabel = Castelog.metodos.un_componente_vue2("xlabel",
  "<div class=\"Component xlabel\">"
 + "    <div class=\"content\">"
 + "      <slot></slot>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],25:[function(require,module,exports){

xcomponents_components.xlayout = Castelog.metodos.un_componente_vue2("xlayout",
  "<div class=\"Component xlayout\">"
 + "    <slot></slot>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],26:[function(require,module,exports){

xcomponents_components.xlayouthorizontal = Castelog.metodos.un_componente_vue2("xlayouthorizontal",
  "<div class=\"Component xlayouthorizontal\">"
 + "    <slot></slot>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],27:[function(require,module,exports){

xcomponents_components.xlayouthorizontalitem = Castelog.metodos.un_componente_vue2("xlayouthorizontalitem",
  "<div class=\"Component xlayouthorizontalitem\">"
 + "    <slot></slot>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],28:[function(require,module,exports){

xcomponents_components.xlayoutnopaddingbottom = Castelog.metodos.un_componente_vue2("xlayoutnopaddingbottom",
  "<div class=\"Component xlayoutnopaddingbottom\">"
 + "    <slot></slot>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],29:[function(require,module,exports){

xcomponents_components.xlayoutnopaddingtop = Castelog.metodos.un_componente_vue2("xlayoutnopaddingtop",
  "<div class=\"Component xlayoutnopaddingtop\">"
 + "    <slot></slot>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],30:[function(require,module,exports){

xcomponents_components.xlayoutnopaddingvertical = Castelog.metodos.un_componente_vue2("xlayoutnopaddingvertical",
  "<div class=\"Component xlayoutnopaddingvertical\">"
 + "    <slot></slot>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],31:[function(require,module,exports){

xcomponents_components.xlayoutvertical = Castelog.metodos.un_componente_vue2("xlayoutvertical",
  "<div class=\"Component xlayoutvertical\">"
 + "    <slot></slot>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],32:[function(require,module,exports){

xcomponents_components.xlayoutverticalitem = Castelog.metodos.un_componente_vue2("xlayoutverticalitem",
  "<div class=\"Component xlayoutverticalitem\">"
 + "    <slot></slot>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],33:[function(require,module,exports){

xcomponents_components.xlink = Castelog.metodos.un_componente_vue2("xlink",
  "<a class=\"Component xlink\" :href=\"href\">"
 + "    <slot></slot>"
 + "  </a>",
  function(component) {return { props:{ href:{ type:String,
default:"javascript:void(0)"
}
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],34:[function(require,module,exports){

xcomponents_components.xlist = Castelog.metodos.un_componente_vue2("xlist",
  "<ul class=\"Component xlist\">"
 + "    <slot></slot>"
 + "  </ul>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],35:[function(require,module,exports){

xcomponents_components.xlistitem = Castelog.metodos.un_componente_vue2("xlistitem",
  "<li class=\"Component xlistitem\">"
 + "    <slot></slot>"
 + "  </li>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],36:[function(require,module,exports){

xcomponents_components.xonscreendependant = Castelog.metodos.un_componente_vue2("xonscreendependant",
  "<div class=\"Component xonscreendependant\">"
 + "    <slot></slot>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],37:[function(require,module,exports){

xcomponents_components.xonscreenlg = Castelog.metodos.un_componente_vue2("xonscreenlg",
  "<div class=\"Component xonscreenlg\">"
 + "    <slot></slot>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],38:[function(require,module,exports){

xcomponents_components.xonscreenmd = Castelog.metodos.un_componente_vue2("xonscreenmd",
  "<div class=\"Component xonscreenmd\">"
 + "    <slot></slot>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],39:[function(require,module,exports){

xcomponents_components.xonscreensm = Castelog.metodos.un_componente_vue2("xonscreensm",
  "<div class=\"Component xonscreensm\">"
 + "    <slot></slot>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],40:[function(require,module,exports){

xcomponents_components.xonscreenxl = Castelog.metodos.un_componente_vue2("xonscreenxl",
  "<div class=\"Component xonscreenxl\">"
 + "    <slot></slot>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],41:[function(require,module,exports){

xcomponents_components.xonscreenxs = Castelog.metodos.un_componente_vue2("xonscreenxs",
  "<div class=\"Component xonscreenxs\">"
 + "    <slot></slot>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],42:[function(require,module,exports){

xcomponents_components.xpage = Castelog.metodos.un_componente_vue2("xpage",
  "<div class=\"Component xpage\">"
 + "    <div class=\"title\" v-if=\"title\">{{ title }}</div>"
 + "    <div class=\"container\">"
 + "      <div class=\"content\">"
 + "        <slot></slot>"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ title:{ type:String,
default:""
}
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],43:[function(require,module,exports){

xcomponents_components.xpanel = Castelog.metodos.un_componente_vue2("xpanel",
  "<div class=\"Component xpanel\">"
 + "    <slot></slot>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],44:[function(require,module,exports){

xcomponents_components.xparagraph = Castelog.metodos.un_componente_vue2("xparagraph",
  "<p class=\"Component xparagraph\">"
 + "    <slot></slot>"
 + "  </p>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],45:[function(require,module,exports){

xcomponents_components.xpill = Castelog.metodos.un_componente_vue2("xpill",
  "<div class=\"Component xpill\">"
 + "    <slot></slot>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],46:[function(require,module,exports){

xcomponents_components.xprogressbar = Castelog.metodos.un_componente_vue2("xprogressbar",
  "<div class=\"Component xprogressbar\">"
 + "    <div role=\"progressbar\" class=\"marquee\"></div>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],47:[function(require,module,exports){

xcomponents_components.xseparator = Castelog.metodos.un_componente_vue2("xseparator",
  "<hr class=\"Component xseparator\" />",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],48:[function(require,module,exports){

xcomponents_components.xspinner = Castelog.metodos.un_componente_vue2("xspinner",
  "<span class=\"Component xspinner loader animate\"></span>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],49:[function(require,module,exports){

xcomponents_components.xstatic = Castelog.metodos.un_componente_vue2("xstatic",
  "<div class=\"Component xstatic\">"
 + "    <div>"
 + "      <table>"
 + "        <tbody>"
 + "          <tr>"
 + "            <td>"
 + "              <div>"
 + "                <slot></slot>"
 + "              </div>"
 + "            </td>"
 + "          </tr>"
 + "        </tbody>"
 + "      </table>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],50:[function(require,module,exports){

xcomponents_components.xsubtitle = Castelog.metodos.un_componente_vue2("xsubtitle",
  "<div class=\"Component xsubtitle\">"
 + "    <slot></slot>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],51:[function(require,module,exports){

xcomponents_components.xtab = Castelog.metodos.un_componente_vue2("xtab",
  "<article role=\"tabpanel\" class=\"Component xtab\">"
 + "    <slot></slot>"
 + "  </article>",
  function(component) {return { props:{ tabId:{ type:String,
required:true
}
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],52:[function(require,module,exports){

xcomponents_components.xtablayout = Castelog.metodos.un_componente_vue2("xtablayout",
  "<section role=\"tabs\" class=\"Component xtablayout tabs\">"
 + "    <menu role=\"tablist\" :aria-label=\"customId\">"
 + "      <button role=\"tab\""
 + "        :aria-controls=\"customId + '-' + tab_index\""
 + "        :aria-selected=\"selected_tab === tab_index ? 'true' : 'false'\""
 + "        v-for=\"tab, tab_index in tabs\""
 + "        v-bind:key=\"'xtablayout-' + customId + '-tab-' + tab_index\""
 + "        v-on:click=\"() => select_tab(tab_index)\">"
 + "          {{ tab }}"
 + "      </button>"
 + "    </menu>"
 + "    <slot></slot>"
 + "  </section>",
  function(component) {return { props:{ customId:{ type:String,
required:Castelog.metodos.un_texto_aleatorio(10, undefined)
},
tabs:{ type:Array,
required:true
}
},
data() {try {
return { selected_tab:0
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ select_tab( tab_index ) {try {
this.selected_tab = tab_index;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

}
},
watch:{ selected_tab( nuevo_valor ) {try {
const all_articles = this.$el.querySelectorAll( "article" );
for(let index = 0; index < all_articles.length; index++) {const article = all_articles[ index ];
article.style.display = "none";}
const selected_article = all_articles[ nuevo_valor ];
selected_article.style.display = "block";
} catch(error) {
console.log(error);
throw error;
}

}
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],53:[function(require,module,exports){

xcomponents_components.xtable = Castelog.metodos.un_componente_vue2("xtable",
  "<table class=\"Component xtable\">"
 + "    <slot></slot>"
 + "  </table>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],54:[function(require,module,exports){

xcomponents_components.xtablebody = Castelog.metodos.un_componente_vue2("xtablebody",
  "<tbody class=\"Component xtablebody\">"
 + "    <slot></slot>"
 + "  </tbody>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],55:[function(require,module,exports){

xcomponents_components.xtablecell = Castelog.metodos.un_componente_vue2("xtablecell",
  "<td class=\"Component xtablecell\">"
 + "    <slot></slot>"
 + "  </td>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],56:[function(require,module,exports){

xcomponents_components.xtablehead = Castelog.metodos.un_componente_vue2("xtablehead",
  "<thead class=\"Component xtablehead\">"
 + "    <slot></slot>"
 + "  </thead>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],57:[function(require,module,exports){

xcomponents_components.xtableheader = Castelog.metodos.un_componente_vue2("xtableheader",
  "<th class=\"Component xtableheader\">"
 + "    <slot></slot>"
 + "  </th>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],58:[function(require,module,exports){

xcomponents_components.xtablerow = Castelog.metodos.un_componente_vue2("xtablerow",
  "<tr class=\"Component xtablerow\">"
 + "    <slot></slot>"
 + "  </tr>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],59:[function(require,module,exports){

xcomponents_components.xtableviewer = Castelog.metodos.un_componente_vue2("xtableviewer",
  "<table class=\"Component xtableviewer\">"
 + "    <slot></slot>"
 + "  </table>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],60:[function(require,module,exports){

xcomponents_components.xtester = Castelog.metodos.un_componente_vue2("xtester",
  "<div class=\"Component xtester\">"
 + "    <slot></slot>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
return { data:{ 
}
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {try {
window.xtesterr = this;
} catch(error) {
console.log(error);
throw error;
}

},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],61:[function(require,module,exports){

xcomponents_components.xtitle = Castelog.metodos.un_componente_vue2("xtitle",
  "<div class=\"Component xtitle\">"
 + "    <div class=\"content\">"
 + "      <slot></slot>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],62:[function(require,module,exports){

xcomponents_components.xtooltip = Castelog.metodos.un_componente_vue2("xtooltip",
  "<div class=\"Component xtooltip\" role=\"tooltip\">"
 + "    <slot></slot>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],63:[function(require,module,exports){

xcomponents_components.xwindow = Castelog.metodos.un_componente_vue2("xwindow",
  "<div class=\"Component xwindow window\">"
 + "    <slot></slot>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],64:[function(require,module,exports){

xcomponents_components.xwindowbody = Castelog.metodos.un_componente_vue2("xwindowbody",
  "<div class=\"Component xwindowbody window-body\">"
 + "    <slot></slot>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],65:[function(require,module,exports){

xcomponents_components.xwindowfooter = Castelog.metodos.un_componente_vue2("xwindowfooter",
  "<div class=\"Component xwindowfooter status-bar\">"
 + "    <slot></slot>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],66:[function(require,module,exports){

xcomponents_components.xwindowfooteritem = Castelog.metodos.un_componente_vue2("xwindowfooteritem",
  "<div class=\"Component xwindowfooteritem status-bar-field\">"
 + "    <slot></slot>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}],67:[function(require,module,exports){

xcomponents_components.xwindowtitle = Castelog.metodos.un_componente_vue2("xwindowtitle",
  "<div class=\"Component xwindowtitle title-bar\">"
 + "    <div class=\"title-bar-text\">"
 + "      <slot></slot>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
},{}]},{},[1]);
