return await Sistema_de_modulos.definir_componente_vue2(
  "lib/vue2/componentes/no_reusables/pagina_de_inicio/pagina_de_inicio.js",
  "lib/vue2/componentes/no_reusables/pagina_de_inicio", [

], async function (mentemetria) {
  return {
    name: "pagina-de-inicio",
    templateUrl: "lib/vue2/componentes/no_reusables/pagina_de_inicio/pagina_de_inicio.xml",
    data() {
      return {
        error: undefined,
        nodo_actual: "/",
        nodo_actual_es_fichero: false,
        nodo_actual_es_directorio: true,
        nodo_actual_subnodos: [],
        nodo_actual_contenido_de_fichero: undefined,
        iconos_derechos: [],
        iconos_inferiores: [],
        iconos_izquierdos: [],
        editor_de_codigo_familia_de_fuente: "monospace",
        editor_de_codigo_tamanio_de_fuente: 10,
        editor_de_codigo_posicion_cursor: undefined
      }
    },
    methods: {
      registrar_evento_de_redimensionar() {
        console.log("registrar_evento_de_redimensionar");
        window.addEventListener("resize", this.evento_de_redimensionar);
      },
      desregistrar_evento_de_redimensionar() {
        console.log("desregistrar_evento_de_redimensionar");
        window.removeEventListener("resize", this.evento_de_redimensionar);
      },
      evento_de_redimensionar() {
        console.log("evento_de_redimensionar");
        this.$refs.panel_medio.style.height = (window.innerHeight - (40 * 2)) + "px";
      },
      lose_focus_from_editor() {
        console.log("lose_focus_from_editor");
        this.$refs.editor_de_codigo.blur();
      },
      obtener_posicion_de_cursor(textarea) {
        console.log("obtener_posicion_de_cursor");
        const { value, selectionStart, selectionEnd } = textarea;
        const getLineAndColumn = (offset) => {
          const lines = value.slice(0, offset).split("\n");
          const line = lines.length;
          const column = lines[lines.length - 1].length + 1;
          return { line, column, offset };
        };
        return {
          start: getLineAndColumn(selectionStart),
          end: getLineAndColumn(selectionEnd),
        };
      },
      actualizar_posicion_de_cursor() {
        console.log("actualizar_posicion_de_cursor");
        const editor = this.$refs.editor_de_codigo;
        this.editor_de_codigo_posicion_cursor = false;
        setTimeout(() => {
          this.editor_de_codigo_posicion_cursor = this.obtener_posicion_de_cursor(editor);
        }, 0);
      },
      async cargar_subnodos() {
        try {
          console.log("cargar_subnodos");
          const subnodos = await this.$ufs.read_directory(this.nodo_actual);
          const subnodos_ordenados = Object.keys(subnodos).sort((s1, s2) => {
            const v1 = subnodos[s1];
            const v2 = subnodos[s2];
            const is_object_1 = typeof v1 === "object";
            const is_object_2 = typeof v2 === "object";
            if (is_object_1 && is_object_2) {
              return s1 < s2 ? -1 : 1;
            }
            if ((!is_object_1) && (!is_object_2)) {
              return s1 < s2 ? -1 : 1;
            }
            if (is_object_1) return -1;
            if (is_object_2) return 1;
            return s1 < s2 ? -1 : 1;
          }).reduce((output, key) => {
            output.push({
              nombre: key,
              valor: subnodos[key]
            });
            return output;
          }, []);
          this.nodo_actual_subnodos = subnodos_ordenados;
        } catch (error) {
          this.gestionar_error(error);
        }
      },
      gestionar_error(error, no_propagar = false) {
        console.log("gestionar_error");
        console.log(error);
        this.error = error;
        if (!no_propagar) {
          throw error;
        }
      },
      subir_de_directorio() {
        console.log("subir_de_directorio");
        const partes = this.nodo_actual.split(/\//g);
        const nodo_anterior = "/" + partes.splice(0, partes.length - 1).join("/");
        const nodo_anterior_corregido = this.$ufs.resolve_path(nodo_anterior)
        return this.abrir_nodo(nodo_anterior_corregido);
      },
      async crear_carpeta() {
        try {
          console.log("crear_carpeta");
          const nombre = await this.$dialogs.abrir("dialogo_de_pedir_nombre_de_directorio");
          if (!nombre) return;
          const ruta = this.$ufs.resolve_path(this.nodo_actual, nombre);
          console.log("Creando carpeta: " + ruta);
          await this.$ufs.make_directory(ruta);
          await this.cargar_subnodos();
          return;
        } catch (error) {
          this.gestionar_error(error);
        }
      },
      async crear_fichero() {
        try {
          console.log("crear_fichero");
          const nombre = await this.$dialogs.abrir("dialogo_de_pedir_nombre_de_fichero");
          if (!nombre) return;
          const ruta = this.$ufs.resolve_path(this.nodo_actual, nombre);
          await this.$ufs.write_file(ruta, "");
          await this.cargar_subnodos();
          return;
        } catch (error) {
          this.gestionar_error(error);
        }
      },
      async guardar_fichero_actual() {
        try {
          console.log("abrir_nodo");
          await this.$ufs.write_file(this.nodo_actual, this.nodo_actual_contenido_de_fichero);
          return;
        } catch (error) {
          this.gestionar_error(error);
        }
      },
      async cargar_fichero_actual() {
        try {
          console.log("cargar_fichero_actual");
          const contenido = await this.$ufs.read_file(this.nodo_actual);
          this.nodo_actual_contenido_de_fichero = contenido;
          this.$forceUpdate(true);
          return;
        } catch (error) {
          this.gestionar_error(error);
        }
      },
      async abrir_nodo(nodo) {
        try {
          console.log("abrir_nodo");
          const ruta = this.$ufs.resolve_path(this.nodo_actual, nodo);
          const es_fichero = await this.$ufs.is_file(ruta);
          if (es_fichero) {
            this.nodo_actual = ruta;
            this.nodo_actual_es_directorio = false;
            this.nodo_actual_contenido_de_fichero = await this.$ufs.read_file(ruta);
            // this.nodo_actual_subnodos = []; // Lo dejamos igual
            this.nodo_actual_es_fichero = true;
            return;
          }
          const es_directorio = await this.$ufs.is_directory(ruta);
          if (es_directorio) {
            this.nodo_actual = ruta;
            // this.nodo_actual_contenido_de_fichero = await this.$ufs.read_file(ruta); // Lo dejamos igual también
            this.nodo_actual_es_directorio = true;
            this.nodo_actual_es_fichero = false;
            await this.cargar_subnodos();
            return;
          }
        } catch (error) {
          this.gestionar_error(error);
        }
      },
      async eliminar_carpeta_actual() {
        try {
          console.log("eliminar_carpeta_actual");
          const confirmation = await this.$dialogs.abrir("dialogo_de_confirmar_eliminar_directorio_actual");
          if (!confirmation) return;
          await this.$ufs.delete_directory(this.nodo_actual);
          await this.subir_de_directorio();
          return;
        } catch (error) {
          this.gestionar_error(error);
        }
      },
      async eliminar_fichero_actual() {
        try {
          console.log("eliminar_fichero_actual");
          const confirmation = await this.$dialogs.abrir("dialogo_de_confirmar_eliminar_fichero_actual");
          if (!confirmation) return;
          await this.$ufs.delete_file(this.nodo_actual);
          await this.subir_de_directorio();
          return;
        } catch (error) {
          this.gestionar_error(error);
        }
      },
      async ejecutar_fichero_actual() {
        try {
          console.log("ejecutar_fichero_actual");
          const AsyncFunction = (async function () { }).constructor;
          const function_content = this.nodo_actual_contenido_de_fichero;
          const execution = new AsyncFunction(function_content);
          await execution.call(this);
        } catch (error) {
          this.gestionar_error(error, true);
        }
      },
      async compilar_fichero_actual() {
        try {
          console.log("compilar_fichero_actual");
          // @TODO...
        } catch (error) {
          this.gestionar_error(error, true);
        }
      },
      async formatear_fichero_actual() {
        try {
          console.log("formatear_fichero_actual");
          // @TODO...
        } catch (error) {
          this.gestionar_error(error, true);
        }
      },
      incrementar_tamanio_de_fuente(cantidad) {
        console.log("incrementar_tamanio_de_fuente");
        this.editor_de_codigo_tamanio_de_fuente += cantidad;
        this.$refs.editor_de_codigo.style.fontSize = this.editor_de_codigo_tamanio_de_fuente + "px";
      },
      alternar_familia_de_fuente() {
        console.log("alternar_familia_de_fuente");
        if (this.editor_de_codigo_familia_de_fuente === "monospace") {
          this.editor_de_codigo_familia_de_fuente = "'9pt Segoe UI','SegoeUI','Noto Sans','sans-serif'";
        } else {
          this.editor_de_codigo_familia_de_fuente = "monospace";
        }
        this.$refs.editor_de_codigo.style.fontFamily = this.editor_de_codigo_familia_de_fuente;
      },
      cargar_source() {
        console.log("cargar_source");
        return this.import("/kernel/source.js");
      },
      async import(file) {
        try {
          console.log("import");
          const has_source = await this.$ufs.exists(file);
          if (has_source) {
            const source_contents = await this.$ufs.read_file(file);
            const source_function = new (async function () { }).constructor(source_contents);
            return await source_function.call(this);
          }
        } catch (error) {
          this.gestionar_error(error);
        }
      },
      async renombrar_nodo_actual() {
        try {
          console.log("renombrar_nodo_actual");
          const name2 = await this.$dialogs.abrir("dialogo_de_renombrar_nodo_actual");
          if (!name2) return;
          await this.$ufs.rename(this.nodo_actual, name2);
          const parts = this.nodo_actual.split("/");
          parts.pop();
          const nuevo_nodo = this.$ufs.resolve_path(...parts.concat(name2));
          await this.abrir_nodo("/" + nuevo_nodo);
          return;
        } catch (error) {
          this.gestionar_error(error);
        }
      }
    },
    watch: {
      iconos_izquierdos(nuevo_valor) {
        console.log("watch.iconos_izquierdos");
        this.$refs.serie_iconos_izquierdos.cambiar_iconos(nuevo_valor);
      },
      iconos_superiores(nuevo_valor) {
        console.log("watch.iconos_superiores");
        this.$refs.serie_iconos_superiores.cambiar_iconos(nuevo_valor);
      },
      iconos_inferiores(nuevo_valor) {
        console.log("watch.iconos_inferiores");
        this.$refs.serie_iconos_inferiores.cambiar_iconos(nuevo_valor);
      },
      iconos_derechos(nuevo_valor) {
        console.log("watch.iconos_derechos");
        this.$refs.serie_iconos_derechos.cambiar_iconos(nuevo_valor);
      },
    },
    async mounted() {
      try {
        console.log("mounted");
        this.$window.inicio = this;
        this.registrar_evento_de_redimensionar();
        this.evento_de_redimensionar();
        await this.cargar_subnodos();
        await this.cargar_source();
      } catch (error) {
        this.gestionar_error(error);
      }
    },
    unmounted() {
      console.log("unmounted");
      this.desregistrar_evento_de_redimensionar();
    }
  };
});