
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