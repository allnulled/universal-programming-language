(function () {

  const framework = {};

  framework.utilidades = {};

  framework.utilidades.evaluar_definicion = function (sentencia, estado) {
    if (!(sentencia.fenomeno in estado.global.definiciones)) {
      estado.global.definiciones[sentencia.fenomeno] = sentencia;
    }
    if (sentencia.limites) {
      estado.global.definiciones[sentencia.fenomeno].limites = sentencia.limites;
    }
    if (sentencia.composicion) {
      estado.global.definiciones[sentencia.fenomeno].composicion = sentencia.composicion;
      estado.global.definiciones[sentencia.fenomeno].causales = sentencia.composicion.map(c => c.fenomeno);
    }
    // aplicar métricas de objetivos:
    // ok.
  };

  framework.utilidades.evaluar_datos = function (sentencia, estado) {
    // Registrar sentencia como nuevo dato:
    // estado.global.datos.push(sentencia);
    // Aplicar métricas de objetivos:
    if (!sentencia.computable) {
      return;
    }
    const eventos = sentencia.eventos;
    // Iteramos los eventos de la tabla de datos:
    Procesando_eventos:
    for (let i1 = 0; i1 < eventos.length; i1++) {
      const evento = eventos[i1];
      // Filtramos si el evento no está completado:
      if (!evento.cantidad.completado) {
        continue Procesando_eventos;
      }
      // Obtenemos los fenómenos alimentados originalmente por el dato:
      const fenomenos = evento.fenomenos.fenomenos;
      // Obtenemos las cantidades que interesan:
      const horas = evento.hora;
      // Iteramos los fenómenos alimentados originalmente por el dato:
      for (let i2 = 0; i2 < fenomenos.length; i2++) {
        // Aislamos cada fenómeno:
        const fenomeno = fenomenos[i2];
        console.log(fenomeno, framework.utilidades.representar_horas(horas));
        // Propagamos las causas de este fenómeno en el estado:
        framework.utilidades.propagar_causas(fenomeno, horas, evento, sentencia, estado);
      }
    }
  };

  framework.utilidades.representar_horas = function (horas) {
    return (horas.dias ?? "0") + "d " + (horas.horas ?? "0") + "h " + (horas.minutos ?? "0") + "min";
  };

  framework.utilidades.propagar_causas = function (fenomeno_propagado, horas, evento, sentencia, estado) {
    // Añadimos las horas indicadas en el sumatorio de horas del fenómeno:
    let tiene_subtipo = false;
    if (!(fenomeno_propagado in estado.global.estadisticas.datos)) {
      estado.global.estadisticas.datos[fenomeno_propagado] = { sumatorio: [] };
      if (fenomeno_propagado in estado.global.definiciones) {
        const subtipo = estado.global.definiciones[fenomeno_propagado].subtipo;
        if (!(subtipo in estado.global.estadisticas.tipos)) {
          estado.global.estadisticas.tipos[subtipo] = {};
        }
        if (!(fenomeno_propagado in estado.global.estadisticas.tipos[subtipo])) {
          estado.global.estadisticas.tipos[subtipo][fenomeno_propagado] = { sumatorio: [] };
        }
        tiene_subtipo = subtipo;
      }
    }
    console.log("EVENTOOO", evento);
    estado.global.estadisticas.datos[fenomeno_propagado].sumatorio.push(evento);
    if (tiene_subtipo) {
      estado.global.estadisticas.tipos[tiene_subtipo][fenomeno_propagado].sumatorio.push(evento);
    }
    // Obtenemos los nombres de todos los fenómenos:
    const fenomenos_definidos = Object.keys(estado.global.definiciones);
    // Iteramos cada fenómeno:
    for (let i1 = 0; i1 < fenomenos_definidos.length; i1++) {
      // Obtenemos el nombre del fenómeno, la definición, y los causales de la definición
      const fenomeno_definido = fenomenos_definidos[i1];
      const definicion = estado.global.definiciones[fenomeno_definido];
      const causales = definicion.causales;
      // Si el fenómeno propagado está entre los causales de la definición
      if (Array.isArray(causales)) {
        if(causales.indexOf(fenomeno_propagado) !== -1) {
          // Entonces propagamos este fenómeno también
          framework.utilidades.propagar_causas(definicion.fenomeno, horas, evento, sentencia, estado);
        }
      } else {
        
      }
    }
  };

  framework.utilidades.evaluar_modalidad = function (sentencia, estado) {
    estado.global.modulos[sentencia.titulo] = sentencia;
  };

  framework.utilidades.evaluar_uso_de_modulo = function (sentencia, estado) {
    if(!(sentencia.modulo in estado.global.modulos)) {
      console.log(sentencia);
      throw new Error("No se ha encontrado módulo «" + sentencia.modulo + "» entre los definidos «" + Object.keys(estado.global.modulos).join("», «") + "»");
    }
    const sentencias_de_modulo = estado.global.modulos[sentencia.modulo].sentencias;
    for (let index_subsentencia = 0; index_subsentencia < sentencias_de_modulo.length; index_subsentencia++) {
      const subsentencia = sentencias_de_modulo[index_subsentencia];
      framework.utilidades.evaluar_sentencia(subsentencia, estado);
    }
  };

  framework.utilidades.evaluar_sentencia = function (sentencia, estado) {
    if (sentencia.tipo === "sentencia de definición") {
      framework.utilidades.evaluar_definicion(sentencia, estado);
    } else if (sentencia.tipo === "sentencia de datos") {
      framework.utilidades.evaluar_datos(sentencia, estado);
    } else if (sentencia.tipo === "sentencia de modalidad") {
      framework.utilidades.evaluar_modalidad(sentencia, estado);
    } else if (sentencia.tipo === "sentencia de uso de módulo") {
      framework.utilidades.evaluar_uso_de_modulo(sentencia, estado);
    }
  };

  framework.utilidades.pasar_fecha_de_objeto_a_texto = function (objeto_de_fecha) {
    const anio = objeto_de_fecha.anio;
    const mes = objeto_de_fecha.mes ? "" + objeto_de_fecha.mes : "1";
    const dia = objeto_de_fecha.dia ? "" + objeto_de_fecha.dia : "1";
    let salida = "";
    salida += anio;
    salida += "/";
    salida += mes.length === 1 ? "0" + mes : mes;
    salida += "/";
    salida += dia.length === 1 ? "0" + dia : dia;
    return salida;
  };
  framework.utilidades.pasar_cantidad_de_tiempo_de_objeto_a_texto = function (objeto_de_cantidad_de_tiempo) {
    let salida = "";
    if (objeto_de_cantidad_de_tiempo.dias) {
      salida += objeto_de_cantidad_de_tiempo.dias + "d";
    }
    if (objeto_de_cantidad_de_tiempo.horas) {
      if (salida.length) {
        salida += " ";
      }
      salida += objeto_de_cantidad_de_tiempo.horas + "h";
    }
    if (objeto_de_cantidad_de_tiempo.minutos) {
      if (salida.length) {
        salida += " ";
      }
      salida += objeto_de_cantidad_de_tiempo.minutos + "min";
    }
    if (!salida.length) {
      salida = "0min";
    }
    return salida;
  };
  framework.utilidades.pasar_cantidad_de_tiempo_de_minutos_a_texto = function (t1) {
    const dias = Math.floor(t1 / 1440);
    const minutos_sobrantes_1 = Math.floor(t1 % 1440);
    const horas = Math.floor(minutos_sobrantes_1 / 60);
    const minutos = Math.floor(minutos_sobrantes_1 % 60);
    let salida = "";
    if (dias) {
      salida += dias + "d";
    }
    if (horas) {
      if (salida.length) {
        salida += " ";
      }
      salida += horas + "h";
    }
    if (minutos) {
      if (salida.length) {
        salida += " ";
      }
      salida += minutos + "min";
    }
    if (!salida.length) {
      salida = "0min";
    }
    return salida;
  };
  framework.utilidades.pasar_cantidad_de_tiempo_de_texto_a_minutos = function (t1) {
    const tokens = t1.trim().split(" ");
    const cantidad_de_tiempo = {};
    for (let i1 = 0; i1 < tokens.length; i1++) {
      const token = tokens[i1].trim();
      const es_dia = token.endsWith("d");
      const es_hora = token.endsWith("h");
      const es_minuto = token.endsWith("min");
      //console.log("Token:", token);
      if (es_dia) {
        cantidad_de_tiempo.dias = parseInt(token.substr(0, token.length - 1));
      } else if (es_hora) {
        cantidad_de_tiempo.horas = parseInt(token.substr(0, token.length - 1));
      } else if (es_minuto) {
        cantidad_de_tiempo.minutos = parseInt(token.substr(0, token.length - 3));
      }
    }
    let salida = 0;
    if (cantidad_de_tiempo.dias) {
      salida = salida + (cantidad_de_tiempo.dias * 1440);
    }
    if (cantidad_de_tiempo.horas) {
      salida = salida + (cantidad_de_tiempo.horas * 60);
    }
    if (cantidad_de_tiempo.minutos) {
      salida = salida + cantidad_de_tiempo.minutos;
    }
    return salida;
  };
  framework.utilidades.sumar_cantidades_de_tiempo = function (t1, t2) {
    const tt1 = t1;
    const tt2 = t2;
    const tm1 = framework.utilidades.pasar_cantidad_de_tiempo_de_texto_a_minutos(tt1);
    const tm2 = framework.utilidades.pasar_cantidad_de_tiempo_de_texto_a_minutos(tt2);
    const tm3 = tm1 + tm2;
    const t3 = framework.utilidades.pasar_cantidad_de_tiempo_de_minutos_a_texto(tm3);
    return t3;
  };

  framework.utilidades.calcular_ultimo_intervalo = function ultimaRepeticion(desde, hasta, cada) {
    // Convertir los objetos Date a timestamps para facilitar las operaciones
    let desdeTime = Math.floor(desde.getTime() / 60 / 1000);
    let hastaTime = Math.floor(hasta.getTime() / 60 / 1000);
    // Calcular el incremento en milisegundos
    let incremento = (cada.dias || 0) * 24 * 60 +
      (cada.horas || 0) * 60 +
      (cada.minutos || 0);
    // Si el incremento es cero, retornar null porque no se puede avanzar en el tiempo
    if (incremento === 0) return null;
    // Calcular el número de repeticiones completas que caben entre "desde" y "hasta"
    let numeroDeRepeticiones = Math.floor((hastaTime - desdeTime) / incremento);
    if(numeroDeRepeticiones < 1) {
      numeroDeRepeticiones = 1;
    }
    // Calcular el inicio de la última repetición
    let ultimaRepeticionTime = desdeTime + (numeroDeRepeticiones * incremento);
    // Calcular la fecha de finalización de la última repetición
    let finUltimaRepeticionTime = ultimaRepeticionTime + incremento;
    // Convertir los timestamps de vuelta a objetos Date
    let inicioUltimaRepeticion = new Date(ultimaRepeticionTime * 60 * 1000);
    let finUltimaRepeticion = new Date(finUltimaRepeticionTime * 60 * 1000);
    const intervalo_de_tiempo = {
      inicio: inicioUltimaRepeticion,
      fin: finUltimaRepeticion
    };
    return intervalo_de_tiempo;
  };

  framework.utilidades.pasar_date_a_objeto = function(fecha) {
    let salida = "";
    const year = fecha.getFullYear();
    const month = fecha.getMonth() + 1;
    const day = fecha.getDate();
    const hours = fecha.getHours();
    const minutes = fecha.getMinutes();
    salida += year;
    salida += "/";
    salida += month < 9 ? "0" + month : month;
    salida += "/";
    salida += day < 9 ? "0" + day : day;
    salida += " ";
    salida += hours < 9 ? "0" + hours : hours;
    salida += ":";
    salida += minutes < 9 ? "0" + minutes : minutes;
    return salida;
  };

  framework.utilidades.pasar_fecha_de_objeto_a_date = function (obj, resetear_horas_y_minutos = false) {
    const { anio, mes, dia, horas, minutos } = obj;
    const fecha = new Date();
    if (anio) {
      fecha.setFullYear(anio);
    }
    if (mes) {
      fecha.setMonth(parseInt(mes) - 1);
    } else {
      fecha.setMonth(0);
    }
    if (dia) {
      fecha.setDate(dia);
    } else {
      fecha.setDate(1);
    }
    if(resetear_horas_y_minutos) {
      fecha.setHours(0);
      fecha.setMinutes(0);
    } else {
      if(horas) {
        fecha.setHours(horas);
      }
      if(minutos) {
        fecha.setMinutes(minutos);
      }
    }
    fecha.setSeconds(0);
    fecha.setMilliseconds(0);
    return fecha;
  }

  framework.utilidades.calcular_tiempo_dedicado_en_ultimo_intervalo = function (estado, definicion, limite) {
    const { desde, hasta, cada } = limite;
    console.log({ desde, hasta, cada });
    const cada_en_texto = framework.utilidades.pasar_cantidad_de_tiempo_de_objeto_a_texto(cada);
    const cada_en_minutos = framework.utilidades.pasar_cantidad_de_tiempo_de_texto_a_minutos(cada_en_texto);
    console.log(desde, hasta, cada, cada_en_texto, cada_en_minutos);
    let salida = "0min";
    const ahora_en_date = new Date();
    const desde_en_date = framework.utilidades.pasar_fecha_de_objeto_a_date(desde, true);
    const hasta_en_date = framework.utilidades.pasar_fecha_de_objeto_a_date(hasta, true);
    if (hasta_en_date < ahora_en_date) {
      return salida;
    }
    const ultimo_intervalo = framework.utilidades.calcular_ultimo_intervalo(desde_en_date, ahora_en_date, cada);
    if(!ultimo_intervalo) {
      return;
    }
    const { inicio, fin } = ultimo_intervalo;
    console.log("inicio:", inicio);
    console.log("fin:", fin);
    if(!(definicion.fenomeno in estado.global.estadisticas.datos)) {
      return;
    }
    const dato_de_estadistica = estado.global.estadisticas.datos[definicion.fenomeno];
    const eventos = dato_de_estadistica.sumatorio;
    for(let i1=0; i1<eventos.length; i1++) {
      const evento = eventos[i1];
      console.log("evento:", evento);
      console.log("evento fecha fecha:", evento.fecha.fecha);
      const objeto_de_fecha_completo = { ...evento.fecha.fecha, ...evento.hora };
      console.log("semilla de fecha del evento:", objeto_de_fecha_completo);
      const fecha_del_evento = framework.utilidades.pasar_fecha_de_objeto_a_date(objeto_de_fecha_completo, false);
      console.log("fecha del evento:", fecha_del_evento);
      console.log("inicio:", inicio);
      console.log("fin:", fin);
      if(fecha_del_evento > inicio) {
        if(fecha_del_evento < fin) {
          const cantidad_de_tiempo_en_evento = framework.utilidades.pasar_cantidad_de_tiempo_de_objeto_a_texto(evento.cantidad.cantidad);
          salida = framework.utilidades.sumar_cantidades_de_tiempo(salida, cantidad_de_tiempo_en_evento);
        }
      }
    }
    // @TODO.............................
    // @TODO.............................
    // @TODO.............................
    // @TODO.............................
    // @TODO.............................
    // @TODO.............................
    // @TODO.............................
    const evaluacion_de_estado = framework.utilidades.obtener_estado_de_limite(salida, limite);
    return { ...ultimo_intervalo, total: salida, estado: evaluacion_de_estado };
  };

  framework.utilidades.restar_cantidades_de_tiempo_en_texto = function(tiempo_1, tiempo_2) {
    console.log("Restando tiempos:", tiempo_1, tiempo_2);
    const tiempo_1_en_minutos = framework.utilidades.pasar_cantidad_de_tiempo_de_texto_a_minutos(tiempo_1);
    const tiempo_2_en_minutos = framework.utilidades.pasar_cantidad_de_tiempo_de_texto_a_minutos(tiempo_2);
    let resta_total = tiempo_1_en_minutos - tiempo_2_en_minutos;
    let es_negativo = false;
    if(resta_total < 0) {
      resta_total = Math.abs(resta_total);
      es_negativo = true;
    }
    let tiempo_3_en_texto = framework.utilidades.pasar_cantidad_de_tiempo_de_minutos_a_texto(resta_total);
    if(es_negativo) {
      tiempo_3_en_texto = "-" + tiempo_3_en_texto;
    }
    return tiempo_3_en_texto;
  };

  framework.utilidades.obtener_estado_de_limite = function(salida, limite) {
    const operacion = limite.limite.limite;
    const limite_en_texto = framework.utilidades.pasar_cantidad_de_tiempo_de_objeto_a_texto(limite.limite.cantidad);
    const resultado = framework.utilidades.restar_cantidades_de_tiempo_en_texto(salida, limite_en_texto);
    if(operacion === "mínimo") {
      if(resultado.startsWith("-")) {
        return "faltan " + resultado.substr(1);
      }
    } else if(operacion === "máximo") {
      if(!resultado.startsWith("-")) {
        return "sobran " + resultado;
      }
    }
    return "ok";
  };

  framework.utilidades.expandir_datos_de_estado = function (estado) {
    // Añado los datos ordenados alfabéticamente:
    estado.global.estadisticas.datos_ordenados_alfabeticamente = {};
    const ids_ordenados = Object.keys(estado.global.estadisticas.datos).sort((item1, item2) => {
      if (item1 > item2) {
        return 1;
      }
      return -1;
    });
    for (let i1 = 0; i1 < ids_ordenados.length; i1++) {
      // Aislo el dato:
      const id = ids_ordenados[i1];
      const dato = estado.global.estadisticas.datos[id];
      // Les saco el sumatorio total:
      estado.global.estadisticas.datos[id].sumatorio_total = dato.sumatorio.reduce((out, item, index) => {
        const cantidad_de_tiempo = framework.utilidades.pasar_cantidad_de_tiempo_de_objeto_a_texto(item.cantidad.cantidad);
        out = framework.utilidades.sumar_cantidades_de_tiempo(out, cantidad_de_tiempo);
        return out;
      }, "0min");
      // Los pongo en alfabéticamente:
      const datos_de_fenomeno = estado.global.estadisticas.datos[id];
      estado.global.estadisticas.datos_ordenados_alfabeticamente[id] = datos_de_fenomeno;
    }
    // Añado las alertas:
    estado.global.estadisticas.alertas = {};
    const todas_las_definiciones = Object.keys(estado.global.definiciones);
    for (let i1 = 0; i1 < todas_las_definiciones.length; i1++) {
      // Aislo el dato:
      const definicion_id = todas_las_definiciones[i1];
      const definicion = estado.global.definiciones[definicion_id];
      // Le saco las alertas:
      // Si tiene limites definidos:
      if (definicion.limites) {
        estado.global.estadisticas.alertas[definicion_id] = definicion;
        Procesando_limites:
        for (let i2 = 0; i2 < definicion.limites.length; i2++) {
          const limite = definicion.limites[i2];
          const { desde, hasta, cada } = limite;
          console.log(desde, hasta, cada);
          const datos_intervalo = framework.utilidades.calcular_tiempo_dedicado_en_ultimo_intervalo(estado, definicion, limite);
          if(typeof datos_intervalo === 'undefined') {
            continue Procesando_limites;
          }
          datos_intervalo.inicio_en_texto = framework.utilidades.pasar_date_a_objeto(datos_intervalo.inicio);
          datos_intervalo.fin_en_texto = framework.utilidades.pasar_date_a_objeto(datos_intervalo.fin);
          console.log(datos_intervalo);
          estado.global.estadisticas.alertas[definicion_id].limites[i2].actual = datos_intervalo;
        }
      }
    }
  };

  framework.extraer_estadisticas_de_ast = function (ast) {
    // Creo estado inicial:
    const estado = {
      global: {
        definiciones: {},
        datos: [],
        modulos: {},
        estadisticas: {
          datos: {},
          tipos: {}
        }
      }
    };
    // Itero y evalúo sentencias:
    for (let index_sentencia_general = 0; index_sentencia_general < ast.length; index_sentencia_general++) {
      const sentencia_general = ast[index_sentencia_general];
      framework.utilidades.evaluar_sentencia(sentencia_general, estado);
    }
    // Añado modificaciones a posteriori:
    framework.utilidades.expandir_datos_de_estado(estado);
    // Retorno estado:
    return estado;
  };

  window.mentemetria_estadisticas = framework;

})();