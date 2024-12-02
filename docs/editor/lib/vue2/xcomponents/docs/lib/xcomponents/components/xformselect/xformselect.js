
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