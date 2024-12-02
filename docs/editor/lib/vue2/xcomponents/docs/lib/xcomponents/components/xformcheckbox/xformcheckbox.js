
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