
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