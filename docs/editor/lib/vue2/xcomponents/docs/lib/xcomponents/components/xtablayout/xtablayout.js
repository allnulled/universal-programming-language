
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