
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