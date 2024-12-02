
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