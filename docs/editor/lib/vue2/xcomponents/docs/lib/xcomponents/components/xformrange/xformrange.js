
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