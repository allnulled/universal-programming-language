
// [castelog:html5izable] ACTIVADO con: {"autor":"allnulled","nombre":"index","version":"1","contenido":{"head":"<head>\n    <title>🌐 xcomponents 🌐</title>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/win7/win7.scoped.2.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/xcomponents/xcomponents.css\" />\n    <script src=\"lib/calo/calo.js\"></script>\n    <script src=\"lib/xcomponents/xcomponents.js\"></script>\n    <style>\n      * {\n        font-family: Arial;\n      }\n      h5 {\n        padding: 12px;\n        margin: 0;\n        background-color: #333333;\n        color: white;\n      }\n    </style>\n</head>","body":"<body><div id=\"app\"></div></body>"}}

window.PaginaDeInicio = Castelog.metodos.un_componente_vue2("PaginaDeInicio",
  "<div class=\"PaginaDeInicio Component\">"
 + "    <h5>🌐 xcomponents 🌐</h5>"
 + "    <div>"
 + "      <h5>xtitle</h5>"
 + "      <xtitle>Title</xtitle>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xsubtitle</h5>"
 + "      <xsubtitle>Subtitle</xsubtitle>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xbreadcrumb</h5>"
 + "      <xbreadcrumb>"
 + "        Breadcrumb » Without » Links"
 + "      </xbreadcrumb>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xcollapsible</h5>"
 + "      <xcollapsible>"
 + "        <xcollapser>This is a label</xcollapser>"
 + "        <xpanel>And these are the contents inside.</xpanel>"
 + "      </xcollapsible>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xjumbotron</h5>"
 + "      <xjumbotron>Jumbotron</xjumbotron>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xparagraph</h5>"
 + "      <xparagraph>Paragraph</xparagraph>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xbutton</h5>"
 + "      <button v-on:click=\"$dialogs.confirm('This is a dialog that uses «xdialogport». Correct?', 'Open dialog message', 'This is a dialog', 'Yes', 'No')\">Button</button>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xdialogport</h5>"
 + "      <xdialogport />"
 + "      <button v-on:click=\"$dialogs.confirm('This is a dialog that uses «xdialogport». Correct?', 'Open dialog message', 'This is a dialog', 'Yes', 'No')\">Open dialog</button>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xform</h5>"
 + "      <xform>"
 + "        <xformfield placeholder=\"Some placeholder...\" :initial-value=\"form_field\" :on-change=\"v => form_field = v\">xformfield:</xformfield>"
 + "        <xformtextarea placeholder=\"Some placeholder...\" :initial-value=\"form_textarea\" :on-change=\"v => form_textarea = v\">xformtextarea:</xformtextarea>"
 + "        <xformcheckbox message-on-selected=\"Activated\" message-on-unselected=\"Deactivated\" :initial-value=\"form_checkbox\" :on-change=\"v => form_checkbox = v\">xformcheckbox:</xformcheckbox>"
 + "        <xformselect :options=\"['One', 'Two', 'Three', 'Four']\" :initial-value=\"form_select\" :on-change=\"v => form_select = v\">xformselect:</xformselect>"
 + "        <xformcombobox :options=\"['One', 'Two', 'Three', 'Four']\" :initial-value=\"form_combobox\" :on-change=\"v => form_combobox = v\">xformcombobox:</xformcombobox>"
 + "        <xformcheckboxes :options=\"['One', 'Two', 'Three', 'Four']\" :initial-value=\"form_checkboxes\" :on-change=\"v => form_checkboxes = v\">xformcheckboxes:</xformcheckboxes>"
 + "        <xformnumber :initial-value=\"50\" :on-change=\"v => form_number = v\">xformnumber:</xformnumber>"
 + "        <xformrange :initial-value=\"50\" :on-change=\"v => form_range = v\">xformrange:</xformrange>"
 + "        <xformdate :on-change=\"v => form_date = v\" :initial-value=\"form_date\">xformdate:</xformdate>"
 + "        <xformtime :on-change=\"v => form_time = v\" :initial-value=\"form_time\">xformtime:</xformtime>"
 + "        <xformdatetime :on-change=\"v => form_datetime = v\" :initial-value=\"form_datetime\">xformdatetime:</xformdatetime>"
 + "        <pre>{{ JSON.stringify({ form_field, form_textarea, form_checkbox, form_select, form_combobox, form_checkboxes, form_number, form_range, form_date, form_time, form_datetime }, null, 2) }}</pre>"
 + "      </xform>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xlabel</h5>"
 + "      <xlabel>Label</xlabel>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xlayout</h5>"
 + "      <xlayout />"
 + "    </div>"
 + "    <div>"
 + "      <h5>xlayoutnopaddingbottom</h5>"
 + "      <xlayoutnopaddingbottom>Layout no padding bottom</xlayoutnopaddingbottom>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xlayoutnopaddingtop</h5>"
 + "      <xlayoutnopaddingtop>Layout no padding top</xlayoutnopaddingtop>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xlayoutnopaddingvertical</h5>"
 + "      <xlayoutnopaddingvertical>Layout no padding vertical</xlayoutnopaddingvertical>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xlayouthorizontal</h5>"
 + "      <xlayouthorizontal>"
 + "        <xlayouthorizontalitem>Item</xlayouthorizontalitem>"
 + "        <xlayouthorizontalitem>Item</xlayouthorizontalitem>"
 + "        <xlayouthorizontalitem>Item</xlayouthorizontalitem>"
 + "        <xlayouthorizontalitem>Item</xlayouthorizontalitem>"
 + "      </xlayouthorizontal>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xlayoutvertical</h5>"
 + "      <xlayoutvertical>"
 + "        <xlayoutverticalitem>Item</xlayoutverticalitem>"
 + "        <xlayoutverticalitem>Item</xlayoutverticalitem>"
 + "        <xlayoutverticalitem>Item</xlayoutverticalitem>"
 + "        <xlayoutverticalitem>Item</xlayoutverticalitem>"
 + "      </xlayoutvertical>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xlink</h5>"
 + "      <xlink href=\"#\">Link</xlink>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xpage</h5>"
 + "      <xpage>"
 + "        Page"
 + "      </xpage>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xpanel</h5>"
 + "      <xpanel>Panel</xpanel>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xtable</h5>"
 + "      <xtable>"
 + "        <xtablehead>"
 + "          <xtablerow>"
 + "            <xtableheader>"
 + "            Table cell"
 + "            </xtableheader>"
 + "            <xtableheader>"
 + "            Table cell"
 + "            </xtableheader>"
 + "            <xtableheader>"
 + "            Table cell"
 + "            </xtableheader>"
 + "          </xtablerow>"
 + "        </xtablehead>"
 + "        <xtablebody>"
 + "          <xtablerow>"
 + "            <xtablecell>"
 + "            Table cell"
 + "            </xtablecell>"
 + "            <xtablecell>"
 + "            Table cell"
 + "            </xtablecell>"
 + "            <xtablecell>"
 + "            Table cell"
 + "            </xtablecell>"
 + "          </xtablerow>"
 + "        </xtablebody>"
 + "      </xtable>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xtooltip</h5>"
 + "      <div>"
 + "        <div>This is a layer.</div>"
 + "        <div style=\"min-height:20px;\"></div>"
 + "        <xtooltip class=\"is-bottom is-right\">And this is a tooltip.</xtooltip>"
 + "      </div>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xwindow</h5>"
 + "      <p>This component is combined with &lt;xwindowtitle&gt;, &lt;xwindowbody&gt;, &lt;xwindowfooter&gt;, &lt;xwindowfooteritem&gt;</p>"
 + "      <xwindow>"
 + "        <xwindowtitle>Title of the window</xwindowtitle>"
 + "        <xwindowbody>Contents of the body</xwindowbody>"
 + "        <xwindowfooter>"
 + "          <xwindowfooteritem>One footer item.</xwindowfooteritem>"
 + "        </xwindowfooter>"
 + "      </xwindow>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xprogressbar</h5>"
 + "      <xprogressbar />"
 + "    </div>"
 + "    <div>"
 + "      <h5>xonscreendependant</h5>"
 + "      <p>This component is combined with &lt;xonscreenxs&gt;, &lt;xonscreensm&gt;, &lt;xonscreenmd&gt;, &lt;xonscreenlg&gt;, &lt;xonscreenxl&gt;</p>"
 + "      <xonscreendependant>"
 + "        <xonscreenxs>xonscreenxs</xonscreenxs>"
 + "        <xonscreensm>xonscreensm</xonscreensm>"
 + "        <xonscreenmd>xonscreenmd</xonscreenmd>"
 + "        <xonscreenlg>xonscreenlg</xonscreenlg>"
 + "        <xonscreenxl>xonscreenxl</xonscreenxl>"
 + "      </xonscreendependant>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xpill</h5>"
 + "      <xpill>xpill 1</xpill>"
 + "      <xpill>xpill 2</xpill>"
 + "      <xpill>xpill 3</xpill>"
 + "      <xpill>xpill 4</xpill>"
 + "      <xpill>xpill 5</xpill>"
 + "      <xpill>xpill 6</xpill>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xbiglist</h5>"
 + "      <p>This component is combined with &lt;xbiglistitem&gt;</p>"
 + "      <xbiglist>"
 + "        <xbiglistitem>Item in list</xbiglistitem>"
 + "        <xbiglistitem>Item in list</xbiglistitem>"
 + "        <xbiglistitem>Item in list</xbiglistitem>"
 + "        <xbiglistitem>Item in list</xbiglistitem>"
 + "        <xbiglistitem>Item in list</xbiglistitem>"
 + "      </xbiglist>"
 + "    </div>"
 + "    <div>"
 + "      <h5>xspinner</h5>"
 + "      <xspinner />"
 + "    </div>"
 + "    <div>"
 + "      <h5>xseparator</h5>"
 + "      <xseparator />"
 + "    </div>"
 + "    <div>"
 + "      <h5>xtablayout</h5>"
 + "      <xtablayout :tabs=\"['One','Two','Three']\">"
 + "        <xtab id=\"One\">Tab one.</xtab>"
 + "        <xtab id=\"Two\">Tab two.</xtab>"
 + "        <xtab id=\"Three\">Tab three.</xtab>"
 + "      </xtablayout>"
 + "    </div>"
 + "    <div style=\"min-height: 500px;\"></div>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
return { form_field:"Default text",
form_select:"Two",
form_combobox:"Three",
form_textarea:"Default text for textarea",
form_checkbox:true,
form_checkboxes:[  ],
form_number:50,
form_range:20,
form_date:"2023-01-30",
form_time:"10:20:00.000",
form_datetime:"2023-01-30 10:20:00.000"
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
window.App = Castelog.metodos.una_aplicacion_vue2(
  "App",
  "<div class=\"App Component Castelog-app win7\">"
 + "    <router-view :root=\"this\"></router-view>"
 + "  </div>",
  function(component) {return { data() {try {
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
beforeMount() {try {
this.$window = window;
} catch(error) {
console.log(error);
throw error;
}

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
  "html {}\n    body {}\n    .Component {}\n    .App {}\n",
  {},
  [ { path:"/",
name:"PaginaDeInicio",
component:PaginaDeInicio,
props:{ 
}
} ],
  { es:{ 
},
en:{ 
},
ca:{ 
}
},
  "#app");