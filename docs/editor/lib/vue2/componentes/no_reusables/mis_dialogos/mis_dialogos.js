return await Sistema_de_modulos.definir_componente_vue2(
  "lib/vue2/componentes/no_reusables/mis_dialogos/mis_dialogos.js",
  "lib/vue2/componentes/no_reusables/mis_dialogos", [
  // "lib/sistema_de_dialogos"
], async function () {
  return {
    name: "mis-dialogos",
    templateUrl: "lib/vue2/componentes/no_reusables/mis_dialogos/mis_dialogos.xml",
    props: {
      contexto: {
        type: Object,
        default: () => { return {} }
      }
    },
    data() {
      return {
        dialogo: undefined,
        respuesta_pendiente: false,
        respuesta: undefined,
        dialogo_de_confirmacion_titulo: "",
        dialogo_de_confirmacion_enunciado: "",
        dialogo_de_notificacion_titulo: "",
        dialogo_de_notificacion_enunciado: "",
        esta_dialogo_personalizado_abierto: false,
        dialogo_personalizado_titulo: "",
        dialogo_personalizado_plantilla: ""
      };
    },
    methods: {
      confirmar(opts) {
        const { pregunta, titulo } = opts;
        this.dialogo_de_confirmacion_titulo = titulo;
        this.dialogo_de_confirmacion_enunciado = pregunta;
        return this.abrir("dialogo_de_confirmacion");
      },
      notificar(opts) {
        const { pregunta, titulo } = opts;
        this.dialogo_de_notificacion_titulo = titulo;
        this.dialogo_de_notificacion_enunciado = pregunta;
        return this.abrir("dialogo_de_notificacion");
      },
      pedir_texto(opts) {
        const { pregunta, titulo } = opts;
        this.dialogo_de_notificacion_titulo = titulo;
        this.dialogo_de_notificacion_enunciado = pregunta;
        return this.abrir("dialogo_de_pedir_texto");
      },
      personalizado(opts) {
        const { plantilla, titulo, datos = false } = opts;
        this.dialogo_personalizado_titulo = titulo;
        this.$vue.component("dialogo-personalizado", {
          name: "dialogo-personalizado",
          template: "<div class='window-body'>" + plantilla + "</div>",
          data: datos ?? function() {
            return {

            };
          },
          props: {
            contexto: {
              type: Object,
              required: true,
            },
            dialogos: {
              type: Object,
              required: true,
            }
          },
          methods: {
            responder: (...args) => this.responder(...args),
            cerrar: (...args) => this.cerrar(...args),
          },
        });
        this.esta_dialogo_personalizado_abierto = true;
        return this.abrir("dialogo_personalizado");
      },
      abrir(id) {
        if(this.respuesta_pendiente) {
          throw new Error("Hay un diálogo pendiente y no se puede abrir el diálogo «" + id + "»");
        }
        const htmlDialog = this.$refs[id];
        if(!htmlDialog) {
          throw new Error("No se ha encontrado diálogo «" + id + "»");
        }
        htmlDialog.showModal();
        Actualizar_valores: {
          this.dialogo = htmlDialog;
          this.respuesta_pendiente = Promise.withResolvers();
          this.respuesta = undefined;
        }
        return this.respuesta_pendiente.promise;
      },
      responder(valor) {
        this.respuesta = valor;
        return this;
      },
      resetear_formularios() {
        const ids = Object.keys(this.$refs).filter(id => id.startsWith("respuesta_"));
        for(let i=0; i<ids.length; i++) {
          const id = ids[i];
          this.$refs[id].value = "";
        }
      },
      cerrar(error = false) {
        this.dialogo.close();
        const respuesta = this.respuesta;
        const respuesta_pendiente = this.respuesta_pendiente;
        Resetear_valores: {
          this.respuesta = undefined;
          this.respuesta_pendiente = undefined;
          this.dialogo = undefined;
          this.dialogo_de_confirmacion_titulo = undefined;
          this.dialogo_de_confirmacion_enunciado = undefined;
          this.esta_dialogo_personalizado_abierto = false;
          this.resetear_formularios();
        }
        if(error) {
          return respuesta_pendiente.reject(error);
        }
        return respuesta_pendiente.resolve(respuesta);
      }
    },
    mounted: function () {
      Vue.prototype.$dialogs = this;
    }
  };
});