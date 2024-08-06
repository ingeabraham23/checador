// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
//import Dexie from 'dexie';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Tiempos.css"; // Asegúrate de tener el archivo CSS para los estilos
import db from "../db";
import ClockButton from "./Reloj";

import html2canvas from "html2canvas";
import { CopyToClipboard } from "react-copy-to-clipboard";

const UnidadesComponent = () => {
  const [ruta, setRuta] = useState("");
  const [tipo, setTipo] = useState("");
  const [numeroUnidad, setNumeroUnidad] = useState("");
  const [isFormVisible, setFormVisible] = useState(false);
  const inputRef = useRef(null);
  const [numerosTalzintan, setnumerosTalzintan] = useState([]);
  const [mostrarListaTalzintan, setMostrarListaTalzintan] = useState(false);
  const [numerosLoma, setnumerosLoma] = useState([]);
  const [mostrarListaLoma, setMostrarListaLoma] = useState(false);
  const [numerosTezotepec, setnumerosTezotepec] = useState([]);
  const [mostrarListaTezotepec, setMostrarListaTezotepec] = useState(false);
  const [numerosCalicapan, setnumerosCalicapan] = useState([]);
  const [mostrarListaCalicapan, setMostrarListaCalicapan] = useState(false);
  const [numerosSosa, setnumerosSosa] = useState([]);
  const [mostrarListaSosa, setMostrarListaSosa] = useState(false);
  const [numerosSanisidro, setnumerosSanisidro] = useState([]);
  const [mostrarListaSanisidro, setMostrarListaSanisidro] = useState(false);
  const [numerosTacopan, setnumerosTacopan] = useState([]);
  const [mostrarListaTacopan, setMostrarListaTacopan] = useState(false);
  const [numerosTequimila, setnumerosTequimila] = useState([]);
  const [mostrarListaTequimila, setMostrarListaTequimila] = useState(false);
  const [numerosQuinta, setnumerosQuinta] = useState([]);
  const [mostrarListaQuinta, setMostrarListaQuinta] = useState(false);
  const [numerosCalanorte, setnumerosCalanorte] = useState([]);
  const [mostrarListaCalanorte, setMostrarListaCalanorte] = useState(false);
  const [numerosPajaco, setnumerosPajaco] = useState([]);
  const [mostrarListaPajaco, setMostrarListaPajaco] = useState(false);
  const [numerosAnalco, setnumerosAnalco] = useState([]);
  const [mostrarListaAnalco, setMostrarListaAnalco] = useState(false);
  const [numerosYopi, setnumerosYopi] = useState([]);
  const [mostrarListaYopi, setMostrarListaYopi] = useState(false);
  const [numerosOtra, setnumerosOtra] = useState([]);
  const [mostrarListaOtra, setMostrarListaOtra] = useState(false);

  // Estados para todas las unidades
  const [ultimaUnidadTalzintan, setUltimaUnidadTalzintan] = useState(null);
  const [penultimaUnidadTalzintan, setPenultimaUnidadTalzintan] =
    useState(null);
  const [ultimaUnidadLoma, setUltimaUnidadLoma] = useState(null);
  const [penultimaUnidadLoma, setPenultimaUnidadLoma] = useState(null);

  const [ultimaUnidadTezotepec, setUltimaUnidadTezotepec] = useState(null);
  const [penultimaUnidadTezotepec, setPenultimaUnidadTezotepec] =
    useState(null);
  const [ultimaUnidadCalicapan, setUltimaUnidadCalicapan] = useState(null);
  const [penultimaUnidadCalicapan, setPenultimaUnidadCalicapan] =
    useState(null);
  const [ultimaUnidadSosaEscuela, setUltimaUnidadSosaEscuela] = useState(null);
  const [penultimaUnidadSosaEscuela, setPenultimaUnidadSosaEscuela] =
    useState(null);
  const [ultimaUnidadSanIsidro, setUltimaUnidadSanIsidro] = useState(null);
  const [penultimaUnidadSanIsidro, setPenultimaUnidadSanIsidro] =
    useState(null);
  const [ultimaUnidadTacopan, setUltimaUnidadTacopan] = useState(null);
  const [penultimaUnidadTacopan, setPenultimaUnidadTacopan] = useState(null);
  const [ultimaUnidadCalanorte, setUltimaUnidadCalanorte] = useState(null);
  const [penultimaUnidadCalanorte, setPenultimaUnidadCalanorte] =
    useState(null);
  const [ultimaUnidadPajaco, setUltimaUnidadPajaco] = useState(null);
  const [penultimaUnidadPajaco, setPenultimaUnidadPajaco] = useState(null);
  const [ultimaUnidadAnalco, setUltimaUnidadAnalco] = useState(null);
  const [penultimaUnidadAnalco, setPenultimaUnidadAnalco] = useState(null);
  const [ultimaUnidadYopi, setUltimaUnidadYopi] = useState(null);
  const [penultimaUnidadYopi, setPenultimaUnidadYopi] = useState(null);
  const [ultimaUnidadTequimila, setUltimaUnidadTequimila] = useState(null);
  const [penultimaUnidadTequimila, setPenultimaUnidadTequimila] =
    useState(null);
  const [ultimaUnidadQuinta, setUltimaUnidadQuinta] = useState(null);
  const [penultimaUnidadQuinta, setPenultimaUnidadQuinta] = useState(null);
  const [ultimaUnidadOtra, setUltimaUnidadOtra] = useState(null);
  const [penultimaUnidadOtra, setPenultimaUnidadOtra] = useState(null);

  // Estados para unidades de tipo rojo ROJO ROJO ROJO
  const [ultimaUnidadRojaTalzintan, setUltimaUnidadRojaTalzintan] =
    useState(null);
  const [penultimaUnidadRojaTalzintan, setPenultimaUnidadRojaTalzintan] =
    useState(null);

  const [ultimaUnidadRojaTezotepec, setUltimaUnidadRojaTezotepec] =
    useState(null);
  const [penultimaUnidadRojaTezotepec, setPenultimaUnidadRojaTezotepec] =
    useState(null);

  const [ultimaUnidadRojaSosaEscuela, setUltimaUnidadRojaSosaEscuela] =
    useState(null);
  const [penultimaUnidadRojaSosaEscuela, setPenultimaUnidadRojaSosaEscuela] =
    useState(null);
  const [ultimaUnidadRojaSanIsidro, setUltimaUnidadRojaSanIsidro] =
    useState(null);
  const [penultimaUnidadRojaSanIsidro, setPenultimaUnidadRojaSanIsidro] =
    useState(null);

  const [ultimaUnidadRojaCalicapan, setUltimaUnidadRojaCalicapan] =
    useState(null);
  const [penultimaUnidadRojaCalicapan, setPenultimaUnidadRojaCalicapan] =
    useState(null);

  // Estados para tiempos transcurridos
  const [tiempoTranscurridoTalzintan, setTiempoTranscurridoTalzintan] =
    useState(0);
  const [tiempoTranscurridoLoma, setTiempoTranscurridoLoma] = useState(0);
  const [tiempoTranscurridoTezotepec, setTiempoTranscurridoTezotepec] =
    useState(0);
  const [tiempoTranscurridoCalicapan, setTiempoTranscurridoCalicapan] =
    useState(0);
  const [tiempoTranscurridoSosaEscuela, setTiempoTranscurridoSosaEscuela] =
    useState(0);
  const [tiempoTranscurridoSanIsidro, setTiempoTranscurridoSanIsidro] =
    useState(0);
  const [tiempoTranscurridoTacopan, setTiempoTranscurridoTacopan] = useState(0);
  const [tiempoTranscurridoCalanorte, setTiempoTranscurridoCalanorte] =
    useState(0);
  const [tiempoTranscurridoPajaco, setTiempoTranscurridoPajaco] = useState(0);
  const [tiempoTranscurridoAnalco, setTiempoTranscurridoAnalco] = useState(0);
  const [tiempoTranscurridoYopi, setTiempoTranscurridoYopi] = useState(0);
  const [tiempoTranscurridoTequimila, setTiempoTranscurridoTequimila] =
    useState(0);
  const [tiempoTranscurridoQuinta, setTiempoTranscurridoQuinta] = useState(0);
  const [tiempoTranscurridoOtra, setTiempoTranscurridoOtra] = useState(0);

  // Estados para tiempos transcurridos ROJOS ROJOS ROJOS
  const [tiempoTranscurridoRojaTalzintan, setTiempoTranscurridoRojaTalzintan] =
    useState(0);
  const [tiempoTranscurridoRojaTezotepec, setTiempoTranscurridoRojaTezotepec] =
    useState(0);
  const [tiempoTranscurridoRojaCalicapan, setTiempoTranscurridoRojaCalicapan] =
    useState(0);
  const [
    tiempoTranscurridoRojaSosaEscuela,
    setTiempoTranscurridoRojaSosaEscuela,
  ] = useState(0);
  const [tiempoTranscurridoRojaSanIsidro, setTiempoTranscurridoRojaSanIsidro] =
    useState(0);

  // Estados para diferencias de tiempo entre último y penúltimo registro
  const [diferenciaTalzintan, setDiferenciaTalzintan] = useState(0);
  const [diferenciaLoma, setDiferenciaLoma] = useState(0);
  const [diferenciaTezotepec, setDiferenciaTezotepec] = useState(0);
  const [diferenciaCalicapan, setDiferenciaCalicapan] = useState(0);
  const [diferenciaSosaEscuela, setDiferenciaSosaEscuela] = useState(0);
  const [diferenciaSanIsidro, setDiferenciaSanIsidro] = useState(0);
  const [diferenciaTacopan, setDiferenciaTacopan] = useState(0);
  const [diferenciaCalanorte, setDiferenciaCalanorte] = useState(0);
  const [diferenciaPajaco, setDiferenciaPajaco] = useState(0);
  const [diferenciaAnalco, setDiferenciaAnalco] = useState(0);
  const [diferenciaYopi, setDiferenciaYopi] = useState(0);
  const [diferenciaTequimila, setDiferenciaTequimila] = useState(0);
  const [diferenciaQuinta, setDiferenciaQuinta] = useState(0);
  const [diferenciaOtra, setDiferenciaOtra] = useState(0);

  // Estados para diferencias de tiempo entre último y penúltimo registro ROJOS ROJOS ROJOS
  const [diferenciaRojaTalzintan, setDiferenciaRojaTalzintan] = useState(0);
  const [diferenciaRojaTezotepec, setDiferenciaRojaTezotepec] = useState(0);
  const [diferenciaRojaCalicapan, setDiferenciaRojaCalicapan] = useState(0);
  const [diferenciaRojaSosaEscuela, setDiferenciaRojaSosaEscuela] = useState(0);
  const [diferenciaRojaSanIsidro, setDiferenciaRojaSanIsidro] = useState(0);

  const [horaRegistro, setHoraRegistro] = useState(new Date().toISOString());
  const [isEditable, setIsEditable] = useState(false);
  const [isHoraVisible, setIsHoraVisible] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [color, setColor] = useState("#FFFFFF");

  const tablaTalzintanRef = useRef(null);
  const tablaLomaRef = useRef(null);
  const tablaTezotepecRef = useRef(null);
  const tablaCalicapanRef = useRef(null);
  const tablaSosaRef = useRef(null);
  const tablaSanisidroRef = useRef(null);
  const tablaTacopanRef = useRef(null);
  const tablaTequimilaRef = useRef(null);
  const tablaQuintaRef = useRef(null);
  const tablaCalanorteRef = useRef(null);
  const tablaPajacoRef = useRef(null);
  const tablaAnalcoRef = useRef(null);
  const tablaYopiRef = useRef(null);
  const tablaOtraRef = useRef(null);

  useEffect(() => {
    const actualizarCronometros = async () => {
      const unidadesTalzintan = await obtenerUnidades("talzintan");
      const unidadesLoma = await obtenerUnidades("loma");
      const unidadesTezotepec = await obtenerUnidades("tezotepec");
      const unidadesCalicapan = await obtenerUnidades("calicapan");
      const unidadesSosaEscuela = await obtenerUnidades("sosa escuela");
      const unidadesSanIsidro = await obtenerUnidades("san isidro");
      const unidadesTacopan = await obtenerUnidades("tacopan");
      const unidadesCalanorte = await obtenerUnidades("calanorte");
      const unidadesPajaco = await obtenerUnidades("pajaco");
      const unidadesAnalco = await obtenerUnidades("analco");
      const unidadesYopi = await obtenerUnidades("yopi");
      const unidadesTequimila = await obtenerUnidades("tequimila");
      const unidadesQuinta = await obtenerUnidades("quinta");
      const unidadesOtra = await obtenerUnidades("otra");

      const unidadesRojaTalzintan = await obtenerUnidades("talzintan", "rojo");
      const unidadesRojaTezotepec = await obtenerUnidades("tezotepec", "rojo");
      const unidadesRojaCalicapan = await obtenerUnidades("calicapan", "rojo");
      const unidadesRojaSosaEscuela = await obtenerUnidades(
        "sosa escuela",
        "rojo"
      );
      const unidadesRojaSanIsidro = await obtenerUnidades("san isidro", "rojo");

      // Unidades de cualquier tipo
      actualizarEstadoUnidades(
        unidadesTalzintan,
        setUltimaUnidadTalzintan,
        setPenultimaUnidadTalzintan,
        setTiempoTranscurridoTalzintan,
        setDiferenciaTalzintan
      );
      actualizarEstadoUnidades(
        unidadesLoma,
        setUltimaUnidadLoma,
        setPenultimaUnidadLoma,
        setTiempoTranscurridoLoma,
        setDiferenciaLoma
      );
      actualizarEstadoUnidades(
        unidadesTezotepec,
        setUltimaUnidadTezotepec,
        setPenultimaUnidadTezotepec,
        setTiempoTranscurridoTezotepec,
        setDiferenciaTezotepec
      );
      actualizarEstadoUnidades(
        unidadesCalicapan,
        setUltimaUnidadCalicapan,
        setPenultimaUnidadCalicapan,
        setTiempoTranscurridoCalicapan,
        setDiferenciaCalicapan
      );
      actualizarEstadoUnidades(
        unidadesSosaEscuela,
        setUltimaUnidadSosaEscuela,
        setPenultimaUnidadSosaEscuela,
        setTiempoTranscurridoSosaEscuela,
        setDiferenciaSosaEscuela
      );
      actualizarEstadoUnidades(
        unidadesSanIsidro,
        setUltimaUnidadSanIsidro,
        setPenultimaUnidadSanIsidro,
        setTiempoTranscurridoSanIsidro,
        setDiferenciaSanIsidro
      );
      actualizarEstadoUnidades(
        unidadesTacopan,
        setUltimaUnidadTacopan,
        setPenultimaUnidadTacopan,
        setTiempoTranscurridoTacopan,
        setDiferenciaTacopan
      );
      actualizarEstadoUnidades(
        unidadesCalanorte,
        setUltimaUnidadCalanorte,
        setPenultimaUnidadCalanorte,
        setTiempoTranscurridoCalanorte,
        setDiferenciaCalanorte
      );
      actualizarEstadoUnidades(
        unidadesPajaco,
        setUltimaUnidadPajaco,
        setPenultimaUnidadPajaco,
        setTiempoTranscurridoPajaco,
        setDiferenciaPajaco
      );
      actualizarEstadoUnidades(
        unidadesAnalco,
        setUltimaUnidadAnalco,
        setPenultimaUnidadAnalco,
        setTiempoTranscurridoAnalco,
        setDiferenciaAnalco
      );
      actualizarEstadoUnidades(
        unidadesYopi,
        setUltimaUnidadYopi,
        setPenultimaUnidadYopi,
        setTiempoTranscurridoYopi,
        setDiferenciaYopi
      );
      actualizarEstadoUnidades(
        unidadesTequimila,
        setUltimaUnidadTequimila,
        setPenultimaUnidadTequimila,
        setTiempoTranscurridoTequimila,
        setDiferenciaTequimila
      );
      actualizarEstadoUnidades(
        unidadesQuinta,
        setUltimaUnidadQuinta,
        setPenultimaUnidadQuinta,
        setTiempoTranscurridoQuinta,
        setDiferenciaQuinta
      );
      actualizarEstadoUnidades(
        unidadesOtra,
        setUltimaUnidadOtra,
        setPenultimaUnidadOtra,
        setTiempoTranscurridoOtra,
        setDiferenciaOtra
      );

      // Unidades de tipo rojo
      actualizarEstadoUnidades(
        unidadesRojaTalzintan,
        setUltimaUnidadRojaTalzintan,
        setPenultimaUnidadRojaTalzintan,
        setTiempoTranscurridoRojaTalzintan,
        setDiferenciaRojaTalzintan
      );
      actualizarEstadoUnidades(
        unidadesRojaTezotepec,
        setUltimaUnidadRojaTezotepec,
        setPenultimaUnidadRojaTezotepec,
        setTiempoTranscurridoRojaTezotepec,
        setDiferenciaRojaTezotepec
      );
      actualizarEstadoUnidades(
        unidadesRojaCalicapan,
        setUltimaUnidadRojaCalicapan,
        setPenultimaUnidadRojaCalicapan,
        setTiempoTranscurridoRojaCalicapan,
        setDiferenciaRojaCalicapan
      );
      actualizarEstadoUnidades(
        unidadesRojaSosaEscuela,
        setUltimaUnidadRojaSosaEscuela,
        setPenultimaUnidadRojaSosaEscuela,
        setTiempoTranscurridoRojaSosaEscuela,
        setDiferenciaRojaSosaEscuela
      );
      actualizarEstadoUnidades(
        unidadesRojaSanIsidro,
        setUltimaUnidadRojaSanIsidro,
        setPenultimaUnidadRojaSanIsidro,
        setTiempoTranscurridoRojaSanIsidro,
        setDiferenciaRojaSanIsidro
      );

      // Verificar si el tiempo transcurrido es de 6 minutos (360 segundos)
      if (
        tiempoTranscurridoTalzintan == 360 &&
        ultimaUnidadTalzintan.tipo == "rojo"
      ) {
        toast.success(`¡6 Minutos libres del rojo Talzintan!`);
      }

      if (
        tiempoTranscurridoTezotepec == 360 &&
        ultimaUnidadTezotepec.tipo == "rojo"
      ) {
        toast.warn(`¡6 Minutos libres del rojo Tezotepec!`);
      }

      if (
        tiempoTranscurridoCalicapan == 360 &&
        ultimaUnidadCalicapan.tipo == "rojo"
      ) {
        toast.info(`¡6 Minutos libres del rojo Calicapan!`);
      }

      if (
        tiempoTranscurridoSosaEscuela == 360 &&
        ultimaUnidadSosaEscuela.tipo == "rojo"
      ) {
        toast.error(`¡6 Minutos libres del rojo Sosa Escuela!`);
      }

      if (
        tiempoTranscurridoSanIsidro == 360 &&
        ultimaUnidadSanIsidro.tipo == "rojo"
      ) {
        toast(`¡6 Minutos libres del rojo San Isidro!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    };

    const intervalo = setInterval(actualizarCronometros, 1000);
    return () => clearInterval(intervalo);
  }, [
    tiempoTranscurridoCalicapan,
    tiempoTranscurridoSanIsidro,
    tiempoTranscurridoSosaEscuela,
    tiempoTranscurridoTalzintan,
    tiempoTranscurridoTezotepec,
    ultimaUnidadTalzintan,
    ultimaUnidadTezotepec,
    ultimaUnidadCalicapan,
    ultimaUnidadSosaEscuela,
    ultimaUnidadSanIsidro,
  ]);

  const obtenerUnidades = async (ruta, tipo) => {
    let unidades;
    if (tipo) {
      unidades = await db.unidades
        .where({ ruta, tipo })
        .reverse() // Ordenar en orden descendente
        .limit(10) // Limitar a los últimos 7 registros
        .toArray();
    } else {
      unidades = await db.unidades
        .where("ruta")
        .equals(ruta)
        .reverse() // Ordenar en orden descendente
        .limit(10) // Limitar a los últimos 7 registros
        .toArray();
    }

    // Comprobación de unidades
    if (!unidades || unidades.length === 0) {
      return []; // No existen unidades
    }

    return unidades.reverse(); // Revertir el orden para obtener los últimos 7 en orden cronológico
  };

  const actualizarEstadoUnidades = (
    unidades,
    setUltimaUnidad,
    setPenultimaUnidad,
    setTiempoTranscurrido,
    setDiferencia
  ) => {
    if (unidades.length > 0) {
      setUltimaUnidad(unidades[unidades.length - 1]);

      if (unidades.length > 1) {
        setPenultimaUnidad(unidades[unidades.length - 2]);
        const diferencia = Math.floor(
          (new Date(unidades[unidades.length - 1].horaRegistro) -
            new Date(unidades[unidades.length - 2].horaRegistro)) /
            1000
        );
        setDiferencia(diferencia);
      } else {
        setPenultimaUnidad(null);
        setDiferencia(0);
      }

      const tiempoTranscurrido = Math.floor(
        (new Date() - new Date(unidades[unidades.length - 1].horaRegistro)) /
          1000
      );
      setTiempoTranscurrido(tiempoTranscurrido);
    } else {
      setUltimaUnidad(null);
      setPenultimaUnidad(null);
      setTiempoTranscurrido(0);
      setDiferencia(0);
    }
  };

  const agregarUnidad = async () => {
    if (ruta && tipo && numeroUnidad) {
      const numeroUnidadNumerico = parseInt(numeroUnidad, 10);
      if (isNaN(numeroUnidadNumerico)) {
        alert("Por favor ingresa un número válido para la unidad.");
        return;
      }
      await db.unidades.add({
        ruta,
        tipo,
        numeroUnidad: numeroUnidadNumerico,
        horaRegistro,
        color,
      });
      setRuta("");
      setTipo("");
      setNumeroUnidad("");
      setHoraRegistro(new Date().toISOString());
      setFormVisible(false); // Ocultar el formulario después de agregar la unidad
    }
  };

  const handleAgregarTipo = (tipo) => {
    setTipo(tipo);
    agregarUnidad();
  };

  const handleCancelar = () => {
    setRuta("");
    setTipo("");
    setNumeroUnidad("");
    setHoraRegistro(new Date().toISOString());
    setFormVisible(false); // Ocultar el formulario al cancelar
  };

  const handleEditHora = () => {
    setIsEditable(true);
    setIsHoraVisible(true);
  };

  useEffect(() => {
    if (isFormVisible) {
      setHoraRegistro(new Date().toISOString());
      setIsEditable(false);
      setIsHoraVisible(false);
      inputRef.current.focus();
    }
  }, [isFormVisible]);

  const formatoTiempo = (segundos) => {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    return `${minutos < 10 ? "0" : ""}${minutos}:${
      segundosRestantes < 10 ? "0" : ""
    }${segundosRestantes}`;
  };

  const handleObtenerUnidadesTalzintan = async () => {
    const numerosTalzintan = await obtenerUnidades("talzintan");
    setnumerosTalzintan(numerosTalzintan);
    setMostrarListaTalzintan(true);
  };

  const handleCloseListaTalzintan = () => {
    setMostrarListaTalzintan(false);
  };

  const handleObtenerUnidadesLoma = async () => {
    const numerosLoma = await obtenerUnidades("loma");
    const numerosTalzintan = await obtenerUnidades("talzintan");
    setnumerosTalzintan(numerosTalzintan);
    setnumerosLoma(numerosLoma);
    setMostrarListaLoma(true);
  };

  const handleCloseListaLoma = () => {
    setMostrarListaLoma(false);
  };

  const handleObtenerUnidadesTezotepec = async () => {
    const numerosTezotepec = await obtenerUnidades("tezotepec");
    setnumerosTezotepec(numerosTezotepec);
    setMostrarListaTezotepec(true);
  };

  const handleCloseListaTezotepec = () => {
    setMostrarListaTezotepec(false);
  };

  const handleObtenerUnidadesCalicapan = async () => {
    const numerosCalicapan = await obtenerUnidades("calicapan");
    setnumerosCalicapan(numerosCalicapan);
    setMostrarListaCalicapan(true);
  };

  const handleCloseListaCalicapan = () => {
    setMostrarListaCalicapan(false);
  };

  const handleObtenerUnidadesSosa = async () => {
    const numerosSosa = await obtenerUnidades("sosa escuela");
    setnumerosSosa(numerosSosa);
    setMostrarListaSosa(true);
  };

  const handleCloseListaSosa = () => {
    setMostrarListaSosa(false);
  };

  const handleObtenerUnidadesSanisidro = async () => {
    const numerosSanisidro = await obtenerUnidades("san isidro");
    setnumerosSanisidro(numerosSanisidro);
    setMostrarListaSanisidro(true);
  };

  const handleCloseListaSanisidro = () => {
    setMostrarListaSanisidro(false);
  };

  const handleObtenerUnidadesTacopan = async () => {
    const numerosTacopan = await obtenerUnidades("tacopan");
    setnumerosTacopan(numerosTacopan);
    setMostrarListaTacopan(true);
  };

  const handleCloseListaTacopan = () => {
    setMostrarListaTacopan(false);
  };

  const handleObtenerUnidadesTequimila = async () => {
    const numerosTequimila = await obtenerUnidades("tequimila");
    setnumerosTequimila(numerosTequimila);
    setMostrarListaTequimila(true);
  };

  const handleCloseListaTequimila = () => {
    setMostrarListaTequimila(false);
  };

  const handleObtenerUnidadesQuinta = async () => {
    const numerosQuinta = await obtenerUnidades("quinta");
    setnumerosQuinta(numerosQuinta);
    setMostrarListaQuinta(true);
  };

  const handleCloseListaQuinta = () => {
    setMostrarListaQuinta(false);
  };

  const handleObtenerUnidadesCalanorte = async () => {
    const numerosCalanorte = await obtenerUnidades("calanorte");
    setnumerosCalanorte(numerosCalanorte);
    setMostrarListaCalanorte(true);
  };

  const handleCloseListaCalanorte = () => {
    setMostrarListaCalanorte(false);
  };

  const handleObtenerUnidadesPajaco = async () => {
    const numerosPajaco = await obtenerUnidades("pajaco");
    setnumerosPajaco(numerosPajaco);
    setMostrarListaPajaco(true);
  };

  const handleCloseListaPajaco = () => {
    setMostrarListaPajaco(false);
  };

  const handleObtenerUnidadesAnalco = async () => {
    const numerosAnalco = await obtenerUnidades("analco");
    setnumerosAnalco(numerosAnalco);
    setMostrarListaAnalco(true);
  };

  const handleCloseListaAnalco = () => {
    setMostrarListaAnalco(false);
  };

  const handleObtenerUnidadesYopi = async () => {
    const numerosYopi = await obtenerUnidades("yopi");
    setnumerosYopi(numerosYopi);
    setMostrarListaYopi(true);
  };

  const handleCloseListaYopi = () => {
    setMostrarListaYopi(false);
  };

  const handleObtenerUnidadesOtra = async () => {
    const numerosOtra = await obtenerUnidades("otra");
    setnumerosOtra(numerosOtra);
    setMostrarListaOtra(true);
  };

  const handleCloseListaOtra = () => {
    setMostrarListaOtra(false);
  };

  const formatHoraRegistro = (horaRegistro) => {
    const date = new Date(horaRegistro);
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    return `${hours}:${minutes} ${ampm}`;
  };

  const handleDownloadImageTalzintan = () => {
    const input = tablaTalzintanRef.current;
    const currentDate = new Date(); // Obtener la fecha y hora actual
    const days = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ]; // Obtener los nombres de los días y meses en español
    const months = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    // Función para convertir la hora de formato 24 horas a formato de 12 horas
    const get12HourFormat = (hour) => {
      return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    };
    // Formatear la fecha y hora actual en el formato deseado
    const dayOfWeek = days[currentDate.getDay()];
    const dayOfMonth = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    const hours = get12HourFormat(currentDate.getHours());
    const minutesWithLeadingZero = currentDate
      .getMinutes()
      .toString()
      .padStart(2, "0");

    const amOrPm = currentDate.getHours() >= 12 ? "pm" : "am";
    const formattedDate = `Tabla talzintan ${dayOfWeek} ${dayOfMonth} de ${month} de ${year} a las ${hours}.${minutesWithLeadingZero} ${amOrPm}`;

    // Guardar el IMAGEN con el nombre de archivo formateado
    const filename = `${formattedDate}`;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = filename + ".png";
      link.href = imgData;
      link.click();
    });
  };

  const handleDownloadImageLoma = () => {
    const input = tablaLomaRef.current;

    // Obtener la fecha y hora actual
    const currentDate = new Date();

    // Obtener los nombres de los días y meses en español
    const days = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    const months = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];

    // Función para convertir la hora de formato 24 horas a formato de 12 horas
    const get12HourFormat = (hour) => {
      return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    };
    // Formatear la fecha y hora actual en el formato deseado
    const dayOfWeek = days[currentDate.getDay()];
    const dayOfMonth = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    const hours = get12HourFormat(currentDate.getHours());
    const minutesWithLeadingZero = currentDate
      .getMinutes()
      .toString()
      .padStart(2, "0");

    const amOrPm = currentDate.getHours() >= 12 ? "pm" : "am";
    const formattedDate = `Tabla loma ${dayOfWeek} ${dayOfMonth} de ${month} de ${year} a las ${hours}.${minutesWithLeadingZero} ${amOrPm}`;

    // Guardar el IMAGEN con el nombre de archivo formateado
    const filename = `${formattedDate}`;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = filename + ".png";
      link.href = imgData;
      link.click();
    });
  };

  const handleDownloadImageTezotepec = () => {
    const input = tablaTezotepecRef.current;

    // Obtener la fecha y hora actual
    const currentDate = new Date();

    // Obtener los nombres de los días y meses en español
    const days = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    const months = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];

    // Función para convertir la hora de formato 24 horas a formato de 12 horas
    const get12HourFormat = (hour) => {
      return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    };
    // Formatear la fecha y hora actual en el formato deseado
    const dayOfWeek = days[currentDate.getDay()];
    const dayOfMonth = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    const hours = get12HourFormat(currentDate.getHours());
    const minutesWithLeadingZero = currentDate
      .getMinutes()
      .toString()
      .padStart(2, "0");

    const amOrPm = currentDate.getHours() >= 12 ? "pm" : "am";
    const formattedDate = `Tabla tezotepec ${dayOfWeek} ${dayOfMonth} de ${month} de ${year} a las ${hours}.${minutesWithLeadingZero} ${amOrPm}`;

    // Guardar el IMAGEN con el nombre de archivo formateado
    const filename = `${formattedDate}`;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = filename + ".png";
      link.href = imgData;
      link.click();
    });
  };

  const handleDownloadImageCalicapan = () => {
    const input = tablaCalicapanRef.current;
    const currentDate = new Date(); // Obtener la fecha y hora actual
    const days = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ]; // Obtener los nombres de los días y meses en español
    const months = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    // Función para convertir la hora de formato 24 horas a formato de 12 horas
    const get12HourFormat = (hour) => {
      return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    };
    // Formatear la fecha y hora actual en el formato deseado
    const dayOfWeek = days[currentDate.getDay()];
    const dayOfMonth = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    const hours = get12HourFormat(currentDate.getHours());
    const minutesWithLeadingZero = currentDate
      .getMinutes()
      .toString()
      .padStart(2, "0");

    const amOrPm = currentDate.getHours() >= 12 ? "pm" : "am";
    const formattedDate = `Tabla calicapan ${dayOfWeek} ${dayOfMonth} de ${month} de ${year} a las ${hours}.${minutesWithLeadingZero} ${amOrPm}`;

    // Guardar el IMAGEN con el nombre de archivo formateado
    const filename = `${formattedDate}`;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = filename + ".png";
      link.href = imgData;
      link.click();
    });
  };

  const handleDownloadImageSosa = () => {
    const input = tablaSosaRef.current;
    const currentDate = new Date(); // Obtener la fecha y hora actual
    const days = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ]; // Obtener los nombres de los días y meses en español
    const months = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    // Función para convertir la hora de formato 24 horas a formato de 12 horas
    const get12HourFormat = (hour) => {
      return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    };
    // Formatear la fecha y hora actual en el formato deseado
    const dayOfWeek = days[currentDate.getDay()];
    const dayOfMonth = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    const hours = get12HourFormat(currentDate.getHours());
    const minutesWithLeadingZero = currentDate
      .getMinutes()
      .toString()
      .padStart(2, "0");

    const amOrPm = currentDate.getHours() >= 12 ? "pm" : "am";
    const formattedDate = `Tabla sosa ${dayOfWeek} ${dayOfMonth} de ${month} de ${year} a las ${hours}.${minutesWithLeadingZero} ${amOrPm}`;

    // Guardar el IMAGEN con el nombre de archivo formateado
    const filename = `${formattedDate}`;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = filename + ".png";
      link.href = imgData;
      link.click();
    });
  };

  const handleDownloadImageSanisidro = () => {
    const input = tablaSanisidroRef.current;
    const currentDate = new Date(); // Obtener la fecha y hora actual
    const days = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ]; // Obtener los nombres de los días y meses en español
    const months = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    // Función para convertir la hora de formato 24 horas a formato de 12 horas
    const get12HourFormat = (hour) => {
      return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    };
    // Formatear la fecha y hora actual en el formato deseado
    const dayOfWeek = days[currentDate.getDay()];
    const dayOfMonth = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    const hours = get12HourFormat(currentDate.getHours());
    const minutesWithLeadingZero = currentDate
      .getMinutes()
      .toString()
      .padStart(2, "0");

    const amOrPm = currentDate.getHours() >= 12 ? "pm" : "am";
    const formattedDate = `Tabla san isidro ${dayOfWeek} ${dayOfMonth} de ${month} de ${year} a las ${hours}.${minutesWithLeadingZero} ${amOrPm}`;

    // Guardar el IMAGEN con el nombre de archivo formateado
    const filename = `${formattedDate}`;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = filename + ".png";
      link.href = imgData;
      link.click();
    });
  };

  const handleDownloadImageTacopan = () => {
    const input = tablaTacopanRef.current;
    const currentDate = new Date(); // Obtener la fecha y hora actual
    const days = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ]; // Obtener los nombres de los días y meses en español
    const months = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    // Función para convertir la hora de formato 24 horas a formato de 12 horas
    const get12HourFormat = (hour) => {
      return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    };
    // Formatear la fecha y hora actual en el formato deseado
    const dayOfWeek = days[currentDate.getDay()];
    const dayOfMonth = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    const hours = get12HourFormat(currentDate.getHours());
    const minutesWithLeadingZero = currentDate
      .getMinutes()
      .toString()
      .padStart(2, "0");

    const amOrPm = currentDate.getHours() >= 12 ? "pm" : "am";
    const formattedDate = `Tabla tacopan ${dayOfWeek} ${dayOfMonth} de ${month} de ${year} a las ${hours}.${minutesWithLeadingZero} ${amOrPm}`;

    // Guardar el IMAGEN con el nombre de archivo formateado
    const filename = `${formattedDate}`;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = filename + ".png";
      link.href = imgData;
      link.click();
    });
  };

  const handleDownloadImageTequimila = () => {
    const input = tablaTequimilaRef.current;
    const currentDate = new Date(); // Obtener la fecha y hora actual
    const days = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ]; // Obtener los nombres de los días y meses en español
    const months = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    // Función para convertir la hora de formato 24 horas a formato de 12 horas
    const get12HourFormat = (hour) => {
      return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    };
    // Formatear la fecha y hora actual en el formato deseado
    const dayOfWeek = days[currentDate.getDay()];
    const dayOfMonth = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    const hours = get12HourFormat(currentDate.getHours());
    const minutesWithLeadingZero = currentDate
      .getMinutes()
      .toString()
      .padStart(2, "0");

    const amOrPm = currentDate.getHours() >= 12 ? "pm" : "am";
    const formattedDate = `Tabla tequimila ${dayOfWeek} ${dayOfMonth} de ${month} de ${year} a las ${hours}.${minutesWithLeadingZero} ${amOrPm}`;

    // Guardar el IMAGEN con el nombre de archivo formateado
    const filename = `${formattedDate}`;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = filename + ".png";
      link.href = imgData;
      link.click();
    });
  };

  const handleDownloadImageQuinta = () => {
    const input = tablaQuintaRef.current;
    const currentDate = new Date(); // Obtener la fecha y hora actual
    const days = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ]; // Obtener los nombres de los días y meses en español
    const months = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    // Función para convertir la hora de formato 24 horas a formato de 12 horas
    const get12HourFormat = (hour) => {
      return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    };
    // Formatear la fecha y hora actual en el formato deseado
    const dayOfWeek = days[currentDate.getDay()];
    const dayOfMonth = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    const hours = get12HourFormat(currentDate.getHours());
    const minutesWithLeadingZero = currentDate
      .getMinutes()
      .toString()
      .padStart(2, "0");

    const amOrPm = currentDate.getHours() >= 12 ? "pm" : "am";
    const formattedDate = `Tabla quinta ${dayOfWeek} ${dayOfMonth} de ${month} de ${year} a las ${hours}.${minutesWithLeadingZero} ${amOrPm}`;

    // Guardar el IMAGEN con el nombre de archivo formateado
    const filename = `${formattedDate}`;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = filename + ".png";
      link.href = imgData;
      link.click();
    });
  };

  const handleDownloadImageCalanorte = () => {
    const input = tablaCalanorteRef.current;
    const currentDate = new Date(); // Obtener la fecha y hora actual
    const days = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ]; // Obtener los nombres de los días y meses en español
    const months = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    // Función para convertir la hora de formato 24 horas a formato de 12 horas
    const get12HourFormat = (hour) => {
      return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    };
    // Formatear la fecha y hora actual en el formato deseado
    const dayOfWeek = days[currentDate.getDay()];
    const dayOfMonth = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    const hours = get12HourFormat(currentDate.getHours());
    const minutesWithLeadingZero = currentDate
      .getMinutes()
      .toString()
      .padStart(2, "0");

    const amOrPm = currentDate.getHours() >= 12 ? "pm" : "am";
    const formattedDate = `Tabla calanorte ${dayOfWeek} ${dayOfMonth} de ${month} de ${year} a las ${hours}.${minutesWithLeadingZero} ${amOrPm}`;

    // Guardar el IMAGEN con el nombre de archivo formateado
    const filename = `${formattedDate}`;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = filename + ".png";
      link.href = imgData;
      link.click();
    });
  };

  const handleDownloadImagePajaco = () => {
    const input = tablaPajacoRef.current;
    const currentDate = new Date(); // Obtener la fecha y hora actual
    const days = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ]; // Obtener los nombres de los días y meses en español
    const months = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    // Función para convertir la hora de formato 24 horas a formato de 12 horas
    const get12HourFormat = (hour) => {
      return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    };
    // Formatear la fecha y hora actual en el formato deseado
    const dayOfWeek = days[currentDate.getDay()];
    const dayOfMonth = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    const hours = get12HourFormat(currentDate.getHours());
    const minutesWithLeadingZero = currentDate
      .getMinutes()
      .toString()
      .padStart(2, "0");

    const amOrPm = currentDate.getHours() >= 12 ? "pm" : "am";
    const formattedDate = `Tabla pajaco ${dayOfWeek} ${dayOfMonth} de ${month} de ${year} a las ${hours}.${minutesWithLeadingZero} ${amOrPm}`;

    // Guardar el IMAGEN con el nombre de archivo formateado
    const filename = `${formattedDate}`;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = filename + ".png";
      link.href = imgData;
      link.click();
    });
  };

  const handleDownloadImageAnalco = () => {
    const input = tablaAnalcoRef.current;
    const currentDate = new Date(); // Obtener la fecha y hora actual
    const days = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ]; // Obtener los nombres de los días y meses en español
    const months = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    // Función para convertir la hora de formato 24 horas a formato de 12 horas
    const get12HourFormat = (hour) => {
      return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    };
    // Formatear la fecha y hora actual en el formato deseado
    const dayOfWeek = days[currentDate.getDay()];
    const dayOfMonth = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    const hours = get12HourFormat(currentDate.getHours());
    const minutesWithLeadingZero = currentDate
      .getMinutes()
      .toString()
      .padStart(2, "0");

    const amOrPm = currentDate.getHours() >= 12 ? "pm" : "am";
    const formattedDate = `Tabla analco ${dayOfWeek} ${dayOfMonth} de ${month} de ${year} a las ${hours}.${minutesWithLeadingZero} ${amOrPm}`;

    // Guardar el IMAGEN con el nombre de archivo formateado
    const filename = `${formattedDate}`;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = filename + ".png";
      link.href = imgData;
      link.click();
    });
  };

  const handleDownloadImageYopi = () => {
    const input = tablaYopiRef.current;
    const currentDate = new Date(); // Obtener la fecha y hora actual
    const days = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ]; // Obtener los nombres de los días y meses en español
    const months = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    // Función para convertir la hora de formato 24 horas a formato de 12 horas
    const get12HourFormat = (hour) => {
      return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    };
    // Formatear la fecha y hora actual en el formato deseado
    const dayOfWeek = days[currentDate.getDay()];
    const dayOfMonth = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    const hours = get12HourFormat(currentDate.getHours());
    const minutesWithLeadingZero = currentDate
      .getMinutes()
      .toString()
      .padStart(2, "0");

    const amOrPm = currentDate.getHours() >= 12 ? "pm" : "am";
    const formattedDate = `Tabla yopi ${dayOfWeek} ${dayOfMonth} de ${month} de ${year} a las ${hours}.${minutesWithLeadingZero} ${amOrPm}`;

    // Guardar el IMAGEN con el nombre de archivo formateado
    const filename = `${formattedDate}`;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = filename + ".png";
      link.href = imgData;
      link.click();
    });
  };

  const handleDownloadImageOtra = () => {
    const input = tablaOtraRef.current;
    const currentDate = new Date(); // Obtener la fecha y hora actual
    const days = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ]; // Obtener los nombres de los días y meses en español
    const months = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    // Función para convertir la hora de formato 24 horas a formato de 12 horas
    const get12HourFormat = (hour) => {
      return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    };
    // Formatear la fecha y hora actual en el formato deseado
    const dayOfWeek = days[currentDate.getDay()];
    const dayOfMonth = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    const hours = get12HourFormat(currentDate.getHours());
    const minutesWithLeadingZero = currentDate
      .getMinutes()
      .toString()
      .padStart(2, "0");

    const amOrPm = currentDate.getHours() >= 12 ? "pm" : "am";
    const formattedDate = `Tabla otra ${dayOfWeek} ${dayOfMonth} de ${month} de ${year} a las ${hours}.${minutesWithLeadingZero} ${amOrPm}`;

    // Guardar el IMAGEN con el nombre de archivo formateado
    const filename = `${formattedDate}`;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = filename + ".png";
      link.href = imgData;
      link.click();
    });
  };

  const add46Minutes = (horaRegistro) => {
    const date = new Date(horaRegistro);
    date.setMinutes(date.getMinutes() + 46);
    return date;
  };

  const add50Minutes = (horaRegistro) => {
    const date = new Date(horaRegistro);
    date.setMinutes(date.getMinutes() + 50);
    return date;
  };

  const add70Minutes = (horaRegistro) => {
    const date = new Date(horaRegistro);
    date.setMinutes(date.getMinutes() + 70);
    return date;
  };

  const convertToLocalDateTime = (date) => {
    const localDate = new Date(date);
    const offset = localDate.getTimezoneOffset() * 60000;
    const localISOTime = new Date(localDate.getTime() - offset)
      .toISOString()
      .slice(0, 16);
    return localISOTime;
  };

  const formattedTextTacopan = `Te llevas:\r\n${
    formatoTiempo(diferenciaTacopan)
  } del ${
    penultimaUnidadTacopan ? penultimaUnidadTacopan.numeroUnidad : "N/A"
  } ${
    penultimaUnidadTacopan ? penultimaUnidadTacopan.tipo : "N/A"
  } Tacopan\r\n${
    formatoTiempo(tiempoTranscurridoTalzintan)
  } del ${
    ultimaUnidadTalzintan ? ultimaUnidadTalzintan.numeroUnidad : "N/A"
  } ${
    ultimaUnidadTalzintan ? ultimaUnidadTalzintan.tipo : "N/A"
  } Talzintan\r\n${
    formatoTiempo(tiempoTranscurridoLoma)
  } del ${
    ultimaUnidadLoma ? ultimaUnidadLoma.numeroUnidad : "N/A"
  } ${
    ultimaUnidadLoma? ultimaUnidadLoma.tipo : "N/A"
  } Loma\r\n${
    formatoTiempo(tiempoTranscurridoCalanorte)
  } del ${
    ultimaUnidadCalanorte ? ultimaUnidadCalanorte.numeroUnidad : "N/A"
  } ${
    ultimaUnidadCalanorte? ultimaUnidadCalanorte.tipo : "N/A"
  } Calanorte\r\n${
    formatoTiempo(tiempoTranscurridoPajaco)
  } del ${
    ultimaUnidadPajaco? ultimaUnidadPajaco.numeroUnidad : "N/A"
  } ${
    ultimaUnidadPajaco? ultimaUnidadPajaco.tipo : "N/A"
  } Pajaco`;

  const formattedTextTalzintan = `Te llevas:\r\n${
    formatoTiempo(diferenciaTalzintan)
  } del ${
    penultimaUnidadTalzintan ? penultimaUnidadTalzintan.numeroUnidad : "N/A"
  } ${
    penultimaUnidadTalzintan ? penultimaUnidadTalzintan.tipo : "N/A"
  } Talzintan\r\n${
    formatoTiempo(tiempoTranscurridoLoma)
  } del ${
    ultimaUnidadLoma? ultimaUnidadLoma.numeroUnidad : "N/A"
  } ${
    ultimaUnidadLoma ? ultimaUnidadLoma.tipo : "N/A"
  } Loma\r\nDe rojo a rojo:\r\n${
    formatoTiempo(diferenciaRojaTalzintan)
  } del ${
    penultimaUnidadRojaTalzintan ? penultimaUnidadRojaTalzintan.numeroUnidad : "N/A"
  } ${
    penultimaUnidadRojaTalzintan? penultimaUnidadRojaTalzintan.tipo : "N/A"
  } `;

  const formattedTextTezotepec = `Te llevas:\r\n${
    formatoTiempo(diferenciaTezotepec)
  } del ${
    penultimaUnidadTezotepec ? penultimaUnidadTezotepec.numeroUnidad : "N/A"
  } ${
    penultimaUnidadTezotepec ? penultimaUnidadTezotepec.tipo : "N/A"
  } Tezotepec\r\nDe rojo a rojo:\r\n${
    formatoTiempo(diferenciaRojaTezotepec)
  } del ${
    penultimaUnidadRojaTezotepec ? penultimaUnidadRojaTezotepec.numeroUnidad : "N/A"
  } `;

  const formattedTextCalicapan = `Te llevas:\r\n${
    formatoTiempo(diferenciaCalicapan)
  } del ${
    penultimaUnidadCalicapan ? penultimaUnidadCalicapan.numeroUnidad : "N/A"
  } ${
    penultimaUnidadCalicapan ? penultimaUnidadCalicapan.tipo : "N/A"
  } Calicapan\r\nDe rojo a rojo:\r\n${
    formatoTiempo(diferenciaRojaCalicapan)
  } del ${
    penultimaUnidadRojaCalicapan ? penultimaUnidadRojaCalicapan.numeroUnidad : "N/A"
  } `;

  const formattedTextSosaEscuela = `Te llevas:\r\n${
    formatoTiempo(diferenciaSosaEscuela)
  } del ${
    penultimaUnidadSosaEscuela ? penultimaUnidadSosaEscuela.numeroUnidad : "N/A"
  } ${
    penultimaUnidadSosaEscuela ? penultimaUnidadSosaEscuela.tipo : "N/A"
  } Sosa Escuela\r\nDe rojo a rojo:\r\n${
    formatoTiempo(diferenciaRojaSosaEscuela)
  } del ${
    penultimaUnidadRojaSosaEscuela ? penultimaUnidadRojaSosaEscuela.numeroUnidad : "N/A"
  } `;

  const formattedTextSanIsidro = `Te llevas:\r\n${
    formatoTiempo(diferenciaSanIsidro)
  } del ${
    penultimaUnidadSanIsidro ? penultimaUnidadSanIsidro.numeroUnidad : "N/A"
  } ${
    penultimaUnidadSanIsidro ? penultimaUnidadSanIsidro.tipo : "N/A"
  } San Isidro\r\nDe rojo a rojo:\r\n${
    formatoTiempo(diferenciaRojaSanIsidro)
  } del ${
    penultimaUnidadRojaSanIsidro ? penultimaUnidadRojaSanIsidro.numeroUnidad : "N/A"
  } `;

  return (
    <div>
      {/*FORMULARIO FORMULARIO FORMULARIO FORMULARIO FORMULARIO FORMULARIO FORMULARIO FORMULARIO*/}
      {isFormVisible && (
        <div>
          <div className="form-container">
            <ClockButton></ClockButton>
            <div className="ruta-display" style={{ backgroundColor: color }}>
              {ruta}
            </div>
            <form
              className="add-form"
              onSubmit={(e) => {
                e.preventDefault();
                agregarUnidad();
              }}
            >
              <div className="form-buttons">
                <label>
                  <input
                    className="styled-input"
                    type="number"
                    ref={inputRef}
                    value={numeroUnidad}
                    onChange={(e) => setNumeroUnidad(e.target.value)}
                    inputMode="numeric"
                    pattern="\d*"
                  />
                </label>
              </div>

              <div className="form-buttons">
                <button
                  className="save-button-rojo"
                  type="button"
                  onClick={() => handleAgregarTipo("rojo")}
                  disabled={[
                    "loma",
                    "tequimila",
                    "quinta",
                    "calanorte",
                    "pajaco",
                    "analco",
                    "yopi",
                  ].includes(ruta)}
                >
                  Rojo
                </button>
                <button
                  className="cancel-button"
                  type="button"
                  onClick={handleCancelar}
                >
                  Cancelar
                </button>
                <button
                  className="save-button-r3"
                  type="button"
                  onClick={() => handleAgregarTipo("blanco")}
                  disabled={["tacopan"].includes(ruta)}
                >
                  R-3
                </button>
              </div>

              <div className="hora-registro-container">
                <label></label>
                {isHoraVisible && (
                  <input
                    className="custom-datetime-input"
                    type="datetime-local"
                    value={convertToLocalDateTime(horaRegistro)}
                    onChange={(e) => setHoraRegistro(e.target.value)}
                    disabled={!isEditable}
                  />
                )}
                <button
                  className="boton-editar-hora"
                  type="button"
                  onClick={handleEditHora}
                >
                  Editar Hora
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* tabla rutas tabla rutas tabla rutas tabla rutas tabla rutas tabla rutas tabla rutas tabla rutas tabla rutas */}
      <table>
        <tbody>
          {/*FILA TALZINTAN  FILA TALZINTAN  FILA TALZINTAN  FILA TALZINTAN  FILA TALZINTAN  FILA TALZINTAN  */}
          <tr>
            <td></td>
            <td className="celda-talzintan">
              <button
                className="boton-cronometro"
                onClick={() => {
                  setRuta("talzintan");
                  setColor("#58ff66");
                  setFormVisible(true);
                }}
              >
                {formatoTiempo(tiempoTranscurridoTalzintan)}
              </button>
              <br></br> <span className="texto-chico-negro">Talzintan</span>
            </td>
            {ultimaUnidadTalzintan && (
              <td className="celda-talzintan">
                <CopyToClipboard text={formattedTextTalzintan}>
        <button
          className={`${
            ultimaUnidadTalzintan.tipo === "blanco" ? "white-bg" : "red-bg"
          }`}
        >
          {ultimaUnidadTalzintan.numeroUnidad}
        </button>
      </CopyToClipboard>
                {penultimaUnidadTalzintan && (
                  <>
                    <button className="button-se-lleva-talzintan">
                      {formatoTiempo(diferenciaTalzintan)}
                    </button>
                    <button
                      className={`${
                        penultimaUnidadTalzintan.tipo === "blanco"
                          ? "white-bg"
                          : "red-bg"
                      }`}
                      onClick={handleObtenerUnidadesTalzintan}
                    >
                      {penultimaUnidadTalzintan.numeroUnidad}
                    </button>
                    <br></br>
                    {ultimaUnidadRojaTalzintan && (
                      <>
                        <div className="rojo-texto-negro">
                          {formatoTiempo(tiempoTranscurridoRojaTalzintan)}
                        </div>
                        <div className="rojo-rojo">
                          {ultimaUnidadRojaTalzintan.numeroUnidad}
                        </div>
                        {penultimaUnidadRojaTalzintan && (
                          <>
                            <div className="rojo-texto-negro">
                              {formatoTiempo(diferenciaRojaTalzintan)}
                            </div>

                            <div className="rojo-rojo">
                              {penultimaUnidadRojaTalzintan.numeroUnidad}
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </td>
            )}
          </tr>

          {/*FILA LOMA  FILA LOMA  FILA LOMA  FILA LOMA  FILA LOMA  FILA LOMA  FILA LOMA  FILA LOMA   */}
          <tr>
            <td></td>
            <td className="celda-loma">
              <button
                className="boton-cronometro"
                onClick={() => {
                  setRuta("loma");
                  setColor("#adf7b3");
                  setFormVisible(true);
                }}
              >
                {formatoTiempo(tiempoTranscurridoLoma)}
              </button>
              <br></br> <span className="texto-chico-negro">Loma</span>
            </td>
            {ultimaUnidadLoma && (
              <td className="celda-loma">
                {" "}
                <button
                  className={`${
                    ultimaUnidadLoma.tipo === "blanco" ? "white-bg" : "red-bg"
                  }`}
                >
                  {ultimaUnidadLoma.numeroUnidad}
                </button>{" "}
                {penultimaUnidadLoma && (
                  <>
                    <button className="button-se-lleva-loma">
                      {formatoTiempo(diferenciaLoma)}
                    </button>
                    <button
                      className={`${
                        penultimaUnidadLoma.tipo === "blanco"
                          ? "white-bg"
                          : "red-bg"
                      }`}
                      onClick={handleObtenerUnidadesLoma}
                    >
                      {penultimaUnidadLoma.numeroUnidad}
                    </button>
                  </>
                )}
              </td>
            )}
          </tr>

          {/*FILA TEZOTEPEC  FILA TEZOTEPEC  FILA TEZOTEPEC  FILA TEZOTEPEC  FILA TEZOTEPEC  FILA TEZOTEPEC  */}
          <tr>
            <td></td>
            <td className="celda-tezotepec">
              <button
                className="boton-cronometro"
                onClick={() => {
                  setRuta("tezotepec");
                  setColor("#eb9d36");
                  setFormVisible(true);
                }}
              >
                {formatoTiempo(tiempoTranscurridoTezotepec)}
              </button>
              <br></br> <span className="texto-chico">Tezotepec</span>
            </td>
            {ultimaUnidadTezotepec && (
              <td className="celda-tezotepec">
                <CopyToClipboard text={formattedTextTezotepec}>
        <button
          className={`${
            ultimaUnidadTezotepec.tipo === "blanco" ? "white-bg" : "red-bg"
          }`}
        >
          {ultimaUnidadTezotepec.numeroUnidad}
        </button>
      </CopyToClipboard>
                {penultimaUnidadTezotepec && (
                  <>
                    <button className="button-se-lleva-tezotepec">
                      {formatoTiempo(diferenciaTezotepec)}
                    </button>
                    <button
                      className={`${
                        penultimaUnidadTezotepec.tipo === "blanco"
                          ? "white-bg"
                          : "red-bg"
                      }`}
                      onClick={handleObtenerUnidadesTezotepec}
                    >
                      {penultimaUnidadTezotepec.numeroUnidad}
                    </button>
                    <br></br>
                    {ultimaUnidadRojaTezotepec && (
                      <>
                        <div className="rojo-texto">
                          {formatoTiempo(tiempoTranscurridoRojaTezotepec)}
                        </div>
                        <div className="rojo-rojo">
                          {ultimaUnidadRojaTezotepec.numeroUnidad}
                        </div>
                        {penultimaUnidadRojaTezotepec && (
                          <>
                            <div className="rojo-texto">
                              {formatoTiempo(diferenciaRojaTezotepec)}
                            </div>

                            <div className="rojo-rojo">
                              {penultimaUnidadRojaTezotepec.numeroUnidad}
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </td>
            )}
          </tr>

          {/*FILA CALICAPAN FILA CALICAPAN FILA CALICAPAN FILA CALICAPAN FILA CALICAPAN FILA CALICAPAN FILA CALICAPAN*/}
          <tr>
            <td></td>
            <td className="celda-calicapan">
              <button
                className="boton-cronometro"
                onClick={() => {
                  setRuta("calicapan");
                  setColor("#00c3ff");
                  setFormVisible(true);
                }}
              >
                {formatoTiempo(tiempoTranscurridoCalicapan)}
              </button>
              <br></br> <span className="texto-chico">Calicapan</span>
            </td>
            {ultimaUnidadCalicapan && (
              <td className="celda-calicapan">
                <CopyToClipboard text={formattedTextCalicapan}>
        <button
          className={`${
            ultimaUnidadCalicapan.tipo === "blanco" ? "white-bg" : "red-bg"
          }`}
        >
          {ultimaUnidadCalicapan.numeroUnidad}
        </button>
      </CopyToClipboard>
                {penultimaUnidadCalicapan && (
                  <>
                    <button className="button-se-lleva-calicapan">
                      {formatoTiempo(diferenciaCalicapan)}
                    </button>
                    <button
                      className={`${
                        penultimaUnidadCalicapan.tipo === "blanco"
                          ? "white-bg"
                          : "red-bg"
                      }`}
                      onClick={handleObtenerUnidadesCalicapan}
                    >
                      {penultimaUnidadCalicapan.numeroUnidad}
                    </button>
                    <br></br>
                    {ultimaUnidadRojaCalicapan && (
                      <>
                        <div className="rojo-texto">
                          {formatoTiempo(tiempoTranscurridoRojaCalicapan)}
                        </div>
                        <div className="rojo-rojo">
                          {ultimaUnidadRojaCalicapan.numeroUnidad}
                        </div>
                        {penultimaUnidadRojaCalicapan && (
                          <>
                            <div className="rojo-texto">
                              {formatoTiempo(diferenciaRojaCalicapan)}
                            </div>

                            <div className="rojo-rojo">
                              {penultimaUnidadRojaCalicapan.numeroUnidad}
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </td>
            )}
          </tr>

          {/*FILA SOSA ESCUELA  FILA SOSA ESCUELA  FILA SOSA ESCUELA  FILA SOSA ESCUELA  FILA SOSA ESCUELA  */}
          <tr>
            <td></td>
            <td className="celda-sosa">
              <button
                className="boton-cronometro"
                onClick={() => {
                  setRuta("sosa escuela");
                  setColor("#ea00ff");
                  setFormVisible(true);
                }}
              >
                {formatoTiempo(tiempoTranscurridoSosaEscuela)}
              </button>
              <br></br> <span className="texto-chico">Sosa</span>
            </td>
            {ultimaUnidadSosaEscuela && (
              <td className="celda-sosa">
                <CopyToClipboard text={formattedTextSosaEscuela}>
        <button
          className={`${
            ultimaUnidadSosaEscuela.tipo === "blanco" ? "white-bg" : "red-bg"
          }`}
        >
          {ultimaUnidadSosaEscuela.numeroUnidad}
        </button>
      </CopyToClipboard>
                {penultimaUnidadSosaEscuela && (
                  <>
                    <button className="button-se-lleva-sosa">
                      {formatoTiempo(diferenciaSosaEscuela)}
                    </button>
                    <button
                      className={`${
                        penultimaUnidadSosaEscuela.tipo === "blanco"
                          ? "white-bg"
                          : "red-bg"
                      }`}
                      onClick={handleObtenerUnidadesSosa}
                    >
                      {penultimaUnidadSosaEscuela.numeroUnidad}
                    </button>
                    <br></br>
                    {ultimaUnidadRojaSosaEscuela && (
                      <>
                        <div className="rojo-texto">
                          {formatoTiempo(tiempoTranscurridoRojaSosaEscuela)}
                        </div>
                        <div className="rojo-rojo">
                          {ultimaUnidadRojaSosaEscuela.numeroUnidad}
                        </div>
                        {penultimaUnidadRojaSosaEscuela && (
                          <>
                            <div className="rojo-texto">
                              {formatoTiempo(diferenciaRojaSosaEscuela)}
                            </div>

                            <div className="rojo-rojo">
                              {penultimaUnidadRojaSosaEscuela.numeroUnidad}
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </td>
            )}
          </tr>

          {/*FILA SAN ISIDRO  FILA SAN ISIDRO  FILA SAN ISIDRO  FILA SAN ISIDRO  FILA SAN ISIDRO    */}
          <tr>
            <td></td>
            <td className="celda-sanisidro">
              <button
                className="boton-cronometro"
                onClick={() => {
                  setRuta("san isidro");
                  setColor("#9c9c9c");
                  setFormVisible(true);
                }}
              >
                {formatoTiempo(tiempoTranscurridoSanIsidro)}
              </button>
              <br></br> <span className="texto-chico">San Isidro</span>
            </td>
            {ultimaUnidadSanIsidro && (
              <td className="celda-sanisidro">
                <CopyToClipboard text={formattedTextSanIsidro}>
        <button
          className={`${
            ultimaUnidadSanIsidro.tipo === "blanco" ? "white-bg" : "red-bg"
          }`}
        >
          {ultimaUnidadSanIsidro.numeroUnidad}
        </button>
      </CopyToClipboard>
                {penultimaUnidadSanIsidro && (
                  <>
                    <button className="button-se-lleva-sanisidro">
                      {formatoTiempo(diferenciaSanIsidro)}
                    </button>
                    <button
                      className={`${
                        penultimaUnidadSanIsidro.tipo === "blanco"
                          ? "white-bg"
                          : "red-bg"
                      }`}
                      onClick={handleObtenerUnidadesSanisidro}
                    >
                      {penultimaUnidadSanIsidro.numeroUnidad}
                    </button>
                    <br></br>
                    {ultimaUnidadRojaSanIsidro && (
                      <>
                        <div className="rojo-texto">
                          {formatoTiempo(tiempoTranscurridoRojaSanIsidro)}
                        </div>
                        <div className="rojo-rojo">
                          {ultimaUnidadRojaSanIsidro.numeroUnidad}
                        </div>
                        {penultimaUnidadRojaSanIsidro && (
                          <>
                            <div className="rojo-texto">
                              {formatoTiempo(diferenciaRojaSanIsidro)}
                            </div>

                            <div className="rojo-rojo">
                              {penultimaUnidadRojaSanIsidro.numeroUnidad}
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </td>
            )}
          </tr>

          {/*FILA TACOPAN  FILA TACOPAN  FILA TACOPAN  FILA TACOPAN  FILA TACOPAN  FILA TACOPAN  */}
          <tr>
            <td></td>
            <td className="celda-tacopan">
              <button
                className="boton-cronometro"
                onClick={() => {
                  setRuta("tacopan");
                  setColor("#fffb00");
                  setFormVisible(true);
                }}
              >
                {formatoTiempo(tiempoTranscurridoTacopan)}
              </button>
              <br></br> <span className="texto-chico">Tacopan</span>
            </td>
            {ultimaUnidadTacopan && (
              <td className="celda-tacopan">
                <CopyToClipboard text={formattedTextTacopan}>
        <button
          className={`${
            ultimaUnidadTacopan.tipo === "blanco" ? "white-bg" : "red-bg"
          }`}
        >
          {ultimaUnidadTacopan.numeroUnidad}
        </button>
      </CopyToClipboard>
                {penultimaUnidadTacopan && (
                  <>
                    <button className="button-se-lleva-tacopan">
                      {formatoTiempo(diferenciaTacopan)}
                    </button>
                    <button
                      className={`${
                        penultimaUnidadTacopan.tipo === "blanco"
                          ? "white-bg"
                          : "red-bg"
                      }`}
                      onClick={handleObtenerUnidadesTacopan}
                    >
                      {penultimaUnidadTacopan.numeroUnidad}
                    </button>
                    <br></br>
                  </>
                )}
              </td>
            )}
          </tr>

          {/*FILA TEQUIMILA  FILA TEQUIMILA  FILA TEQUIMILA  FILA TEQUIMILA  FILA TEQUIMILA  */}
          <tr>
            <td></td>
            <td className="celda-tequimila">
              <button
                className="boton-cronometro"
                onClick={() => {
                  setRuta("tequimila");
                  setColor("#a6ff00");
                  setFormVisible(true);
                }}
              >
                {formatoTiempo(tiempoTranscurridoTequimila)}
              </button>
              <br></br> <span className="texto-chico">Tequimila</span>
            </td>
            {ultimaUnidadTequimila && (
              <td className="celda-tequimila">
                {" "}
                <button
                  className={`${
                    ultimaUnidadTequimila.tipo === "blanco"
                      ? "white-bg"
                      : "red-bg"
                  }`}
                >
                  {ultimaUnidadTequimila.numeroUnidad}
                </button>{" "}
                {penultimaUnidadTequimila && (
                  <>
                    <button className="button-se-lleva-tequimila">
                      {formatoTiempo(diferenciaTequimila)}
                    </button>
                    <button
                      className={`${
                        penultimaUnidadTequimila.tipo === "blanco"
                          ? "white-bg"
                          : "red-bg"
                      }`}
                      onClick={handleObtenerUnidadesTequimila}
                    >
                      {penultimaUnidadTequimila.numeroUnidad}
                    </button>
                    <br></br>
                  </>
                )}
              </td>
            )}
          </tr>

          {/*FILA QUINTA  FILA QUINTA  FILA QUINTA  FILA QUINTA  FILA QUINTA  FILA QUINTA  */}
          <tr>
            <td></td>
            <td className="celda-quinta">
              <button
                className="boton-cronometro"
                onClick={() => {
                  setRuta("quinta");
                  setColor("#6ca700");
                  setFormVisible(true);
                }}
              >
                {formatoTiempo(tiempoTranscurridoQuinta)}
              </button>
              <br></br> <span className="texto-chico">Seccion 5ta</span>
            </td>
            {ultimaUnidadQuinta && (
              <td className="celda-quinta">
                {" "}
                <button
                  className={`${
                    ultimaUnidadQuinta.tipo === "blanco" ? "white-bg" : "red-bg"
                  }`}
                >
                  {ultimaUnidadQuinta.numeroUnidad}
                </button>{" "}
                {penultimaUnidadQuinta && (
                  <>
                    <button className="button-se-lleva-quinta">
                      {formatoTiempo(diferenciaQuinta)}
                    </button>
                    <button
                      className={`${
                        penultimaUnidadQuinta.tipo === "blanco"
                          ? "white-bg"
                          : "red-bg"
                      }`}
                      onClick={handleObtenerUnidadesQuinta}
                    >
                      {penultimaUnidadQuinta.numeroUnidad}
                    </button>
                    <br></br>
                  </>
                )}
              </td>
            )}
          </tr>

          {/*FILA CALANORTE  FILA CALANORTE  FILA CALANORTE  FILA CALANORTE  FILA CALANORTE    */}
          <tr>
            <td></td>
            <td className="celda-calanorte">
              <button
                className="boton-cronometro"
                onClick={() => {
                  setRuta("calanorte");
                  setColor("#006100");
                  setFormVisible(true);
                }}
              >
                {formatoTiempo(tiempoTranscurridoCalanorte)}
              </button>
              <br></br> <span className="texto-chico">Calanorte</span>
            </td>
            {ultimaUnidadCalanorte && (
              <td className="celda-calanorte">
                {" "}
                <button
                  className={`${
                    ultimaUnidadCalanorte.tipo === "blanco"
                      ? "white-bg"
                      : "red-bg"
                  }`}
                >
                  {ultimaUnidadCalanorte.numeroUnidad}
                </button>{" "}
                {penultimaUnidadCalanorte && (
                  <>
                    <button className="button-se-lleva-calanorte">
                      {formatoTiempo(diferenciaCalanorte)}
                    </button>
                    <button
                      className={`${
                        penultimaUnidadCalanorte.tipo === "blanco"
                          ? "white-bg"
                          : "red-bg"
                      }`}
                      onClick={handleObtenerUnidadesCalanorte}
                    >
                      {penultimaUnidadCalanorte.numeroUnidad}
                    </button>
                    <br></br>
                  </>
                )}
              </td>
            )}
          </tr>

          {/*FILA PAJACO  FILA PAJACO  FILA PAJACO  FILA PAJACO  FILA PAJACO  FILA PAJACO  */}
          <tr>
            <td></td>
            <td className="celda-pajaco">
              <button
                className="boton-cronometro"
                onClick={() => {
                  setRuta("pajaco");
                  setColor("#ff0000");
                  setFormVisible(true);
                }}
              >
                {formatoTiempo(tiempoTranscurridoPajaco)}
              </button>
              <br></br> <span className="texto-chico">Pajaco</span>
            </td>
            {ultimaUnidadPajaco && (
              <td className="celda-pajaco">
                {" "}
                <button
                  className={`${
                    ultimaUnidadPajaco.tipo === "blanco" ? "white-bg" : "red-bg"
                  }`}
                >
                  {ultimaUnidadPajaco.numeroUnidad}
                </button>{" "}
                {penultimaUnidadPajaco && (
                  <>
                    <button className="button-se-lleva-pajaco">
                      {formatoTiempo(diferenciaPajaco)}
                    </button>
                    <button
                      className={`${
                        penultimaUnidadPajaco.tipo === "blanco"
                          ? "white-bg"
                          : "red-bg"
                      }`}
                      onClick={handleObtenerUnidadesPajaco}
                    >
                      {penultimaUnidadPajaco.numeroUnidad}
                    </button>
                    <br></br>
                  </>
                )}
              </td>
            )}
          </tr>

          {/*FILA ANALCO  FILA ANALCO  FILA ANALCO  FILA ANALCO  FILA ANALCO  FILA ANALCO  */}
          <tr>
            <td></td>
            <td className="celda-analco">
              <button
                className="boton-cronometro"
                onClick={() => {
                  setRuta("analco");
                  setColor("#0051ff");
                  setFormVisible(true);
                }}
              >
                {formatoTiempo(tiempoTranscurridoAnalco)}
              </button>
              <br></br> <span className="texto-chico">Analco</span>
            </td>
            {ultimaUnidadAnalco && (
              <td className="celda-analco">
                {" "}
                <button
                  className={`${
                    ultimaUnidadAnalco.tipo === "blanco" ? "white-bg" : "red-bg"
                  }`}
                >
                  {ultimaUnidadAnalco.numeroUnidad}
                </button>{" "}
                {penultimaUnidadAnalco && (
                  <>
                    <button className="button-se-lleva-analco">
                      {formatoTiempo(diferenciaAnalco)}
                    </button>
                    <button
                      className={`${
                        penultimaUnidadAnalco.tipo === "blanco"
                          ? "white-bg"
                          : "red-bg"
                      }`}
                      onClick={handleObtenerUnidadesAnalco}
                    >
                      {penultimaUnidadAnalco.numeroUnidad}
                    </button>
                    <br></br>
                  </>
                )}
              </td>
            )}
          </tr>

          {/*FILA YOPI  FILA YOPI  FILA YOPI  FILA YOPI  FILA YOPI  FILA YOPI  FILA YOPI  */}
          <tr>
            <td></td>
            <td className="celda-yopi">
              <button
                className="boton-cronometro"
                onClick={() => {
                  setRuta("yopi");
                  setColor("#9350ff");
                  setFormVisible(true);
                }}
              >
                {formatoTiempo(tiempoTranscurridoYopi)}
              </button>
              <br></br> <span className="texto-chico">Yopi / Yopi E.</span>
            </td>
            {ultimaUnidadYopi && (
              <td className="celda-yopi">
                {" "}
                <button
                  className={`${
                    ultimaUnidadYopi.tipo === "blanco" ? "white-bg" : "red-bg"
                  }`}
                >
                  {ultimaUnidadYopi.numeroUnidad}
                </button>{" "}
                {penultimaUnidadYopi && (
                  <>
                    <button className="button-se-lleva-yopi">
                      {formatoTiempo(diferenciaYopi)}
                    </button>
                    <button
                      className={`${
                        penultimaUnidadYopi.tipo === "blanco"
                          ? "white-bg"
                          : "red-bg"
                      }`}
                      onClick={handleObtenerUnidadesYopi}
                    >
                      {penultimaUnidadYopi.numeroUnidad}
                    </button>
                    <br></br>
                  </>
                )}
              </td>
            )}
          </tr>

          {/*FILA OTRA  FILA OTRA  FILA OTRA  FILA OTRA  FILA OTRA  FILA OTRA  FILA OTRA  */}
          <tr>
            <td></td>
            <td className="celda-otra">
              <button
                className="boton-cronometro"
                onClick={() => {
                  setRuta("otra");
                  setColor("#ffffff");
                  setFormVisible(true);
                }}
              >
                {formatoTiempo(tiempoTranscurridoOtra)}
              </button>
              <br></br> <span className="texto-chico">Otra</span>
            </td>
            {ultimaUnidadOtra && (
              <td className="celda-otra">
                {" "}
                <button
                  className={`${
                    ultimaUnidadOtra.tipo === "blanco" ? "white-bg" : "red-bg"
                  }`}
                >
                  {ultimaUnidadOtra.numeroUnidad}
                </button>{" "}
                {penultimaUnidadOtra && (
                  <>
                    <button className="button-se-lleva-otra">
                      {formatoTiempo(diferenciaOtra)}
                    </button>
                    <button
                      className={`${
                        penultimaUnidadOtra.tipo === "blanco"
                          ? "white-bg"
                          : "red-bg"
                      }`}
                      onClick={handleObtenerUnidadesOtra}
                    >
                      {penultimaUnidadOtra.numeroUnidad}
                    </button>
                    <br></br>
                  </>
                )}
              </td>
            )}
          </tr>
        </tbody>
      </table>
      <div>
        {mostrarListaTalzintan && (
          <div className="floating-list-talzintan">
            <button
              className="close-button"
              onClick={handleCloseListaTalzintan}
            >
              ❌ Cerrar Talzintan
            </button>
            <table className="lista-talzintan" ref={tablaTalzintanRef}>
              <thead>
                <tr>
                  <th colSpan={3}>Talzintan</th>
                </tr>
              </thead>
              <tbody>
                {numerosTalzintan
                  .slice()
                  .reverse()
                  .map((unidad, index) => (
                    <tr key={index}>
                      <td className="celda-lista">{index + 1}</td>
                      <td className="celda-lista">
                        <button
                          className={`unidad-button ${
                            unidad.tipo === "rojo" ? "rojo" : ""
                          }`}
                        >
                          {unidad.numeroUnidad}
                        </button>
                      </td>
                      <td className="celda-lista">
                        {formatHoraRegistro(unidad.horaRegistro)}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <button
              className="close-button"
              onClick={handleDownloadImageTalzintan}
            >
              📸 Capturar
            </button>
          </div>
        )}
      </div>
      {/* LISTA LOMA  LISTA LOMA  LISTA LOMA  LISTA LOMA  LISTA LOMA  LISTA LOMA  */}
      <div>
        {mostrarListaLoma && (
          <div className="floating-list-loma">
            <button
              className="close-button-loma"
              onClick={handleCloseListaLoma}
            >
              ❌ Cerrar Loma
            </button>
            <table className="lista-loma" ref={tablaLomaRef}>
              <thead>
                <tr>
                  <th colSpan={4}>Loma - Talzintan</th>
                </tr>
              </thead>
              <tbody>
                {[...numerosTalzintan, ...numerosLoma]
                  .sort(
                    (a, b) =>
                      new Date(b.horaRegistro) - new Date(a.horaRegistro)
                  )
                  .slice(0, 10)
                  .reverse()
                  .map((unidad, index) => (
                    <tr key={index}>
                      <td className="celda-loma">{index + 1}</td>
                      <td className="celda-loma">
                        {unidad.ruta === "talzintan" ? "Talzintan" : "Loma"}
                      </td>
                      <td className="celda-loma">
                        <button
                          className={`unidad-button ${
                            unidad.tipo === "rojo" ? "rojo" : ""
                          }`}
                        >
                          {unidad.numeroUnidad}
                        </button>
                      </td>
                      <td className="celda-loma">
                        {formatHoraRegistro(unidad.horaRegistro)}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <button
              className="close-button-loma"
              onClick={handleDownloadImageLoma}
            >
              📸 Capturar
            </button>
          </div>
        )}
      </div>

      <div>
        {mostrarListaTezotepec && (
          <div className="floating-list-tezotepec">
            <button
              className="close-button-tezotepec"
              onClick={handleCloseListaTezotepec}
            >
              ❌ Cerrar Tezotepec
            </button>
            <table className="lista-tezotepec" ref={tablaTezotepecRef}>
              <thead>
                <tr>
                  <th colSpan={3}>Tezotepec</th>
                </tr>
              </thead>
              <tbody>
                {numerosTezotepec
                  .slice()
                  .reverse()
                  .map((unidad, index) => (
                    <tr key={index}>
                      <td className="celda-tezotepec">{index + 1}</td>
                      <td className="celda-tezotepec">
                        <button
                          className={`unidad-button ${
                            unidad.tipo === "rojo" ? "rojo" : ""
                          }`}
                        >
                          {unidad.numeroUnidad}
                        </button>
                      </td>
                      <td className="celda-tezotepec">
                        {formatHoraRegistro(unidad.horaRegistro)}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <button
              className="close-button"
              onClick={handleDownloadImageTezotepec}
            >
              📸 Capturar
            </button>
          </div>
        )}
      </div>

      <div>
        {mostrarListaCalicapan && (
          <div className="floating-list-calicapan">
            <button
              className="close-button-calicapan"
              onClick={handleCloseListaCalicapan}
            >
              ❌ Cerrar Calicapan
            </button>
            <table className="lista-calicapan" ref={tablaCalicapanRef}>
              <thead>
                <tr>
                  <th colSpan={3}>Calicapan</th>
                </tr>
              </thead>
              <tbody>
                {numerosCalicapan
                  .slice()
                  .reverse()
                  .map((unidad, index) => (
                    <tr key={index}>
                      <td className="celda-calicapan">{index + 1}</td>
                      <td className="celda-calicapan">
                        <button
                          className={`unidad-button ${
                            unidad.tipo === "rojo" ? "rojo" : ""
                          }`}
                        >
                          {unidad.numeroUnidad}
                        </button>
                      </td>
                      <td className="celda-calicapan">
                        {formatHoraRegistro(unidad.horaRegistro)}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <button
              className="close-button"
              onClick={handleDownloadImageCalicapan}
            >
              📸 Capturar
            </button>
          </div>
        )}
      </div>

      <div>
        {mostrarListaSosa && (
          <div className="floating-list-sosa">
            <button
              className="close-button-sosa"
              onClick={handleCloseListaSosa}
            >
              ❌ Cerrar Sosa Escuela
            </button>
            <table className="lista-sosa" ref={tablaSosaRef}>
              <thead>
                <tr>
                  <th colSpan={3}>Sosa Escuela</th>
                </tr>
              </thead>
              <tbody>
                {numerosSosa
                  .slice()
                  .reverse()
                  .map((unidad, index) => (
                    <tr key={index}>
                      <td className="celda-sosa">{index + 1}</td>
                      <td className="celda-sosa">
                        <button
                          className={`unidad-button ${
                            unidad.tipo === "rojo" ? "rojo" : ""
                          }`}
                        >
                          {unidad.numeroUnidad}
                        </button>
                      </td>
                      <td className="celda-sosa">
                        {formatHoraRegistro(unidad.horaRegistro)}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <button className="close-button" onClick={handleDownloadImageSosa}>
              📸 Capturar
            </button>
          </div>
        )}
      </div>

      <div>
        {mostrarListaSanisidro && (
          <div className="floating-list-sanisidro">
            <button
              className="close-button-sanisidro"
              onClick={handleCloseListaSanisidro}
            >
              ❌ Cerrar San Isidro
            </button>
            <table className="lista-sanisidro" ref={tablaSanisidroRef}>
              <thead>
                <tr>
                  <th colSpan={3}>San Isidro</th>
                </tr>
              </thead>
              <tbody>
                {numerosSanisidro
                  .slice()
                  .reverse()
                  .map((unidad, index) => (
                    <tr key={index}>
                      <td className="celda-sanisidro">{index + 1}</td>
                      <td className="celda-sanisidro">
                        <button
                          className={`unidad-button ${
                            unidad.tipo === "rojo" ? "rojo" : ""
                          }`}
                        >
                          {unidad.numeroUnidad}
                        </button>
                      </td>
                      <td className="celda-sanisidro">
                        {formatHoraRegistro(unidad.horaRegistro)}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <button
              className="close-button"
              onClick={handleDownloadImageSanisidro}
            >
              📸 Capturar
            </button>
          </div>
        )}
      </div>

      <div>
        {mostrarListaTacopan && (
          <div className="floating-list-tacopan">
            <button
              className="close-button-tacopan"
              onClick={handleCloseListaTacopan}
            >
              ❌ Cerrar Tacopan
            </button>
            <table className="lista-tacopan" ref={tablaTacopanRef}>
              <thead>
                <tr>
                  <th colSpan={3}>Tacopan</th>
                </tr>
              </thead>
              <tbody>
                {numerosTacopan
                  .slice()
                  .reverse()
                  .map((unidad, index) => (
                    <tr key={index}>
                      <td className="celda-tacopan">{index + 1}</td>
                      <td className="celda-tacopan">
                        <button
                          className={`unidad-button ${
                            unidad.tipo === "rojo" ? "rojo" : ""
                          }`}
                        >
                          {unidad.numeroUnidad}
                        </button>
                      </td>
                      <td className="celda-tacopan">
                        {formatHoraRegistro(unidad.horaRegistro)}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <button
              className="close-button"
              onClick={handleDownloadImageTacopan}
            >
              📸 Capturar
            </button>
          </div>
        )}
      </div>

      <div>
        {mostrarListaTequimila && (
          <div className="floating-list-tequimila">
            <button
              className="close-button-tequimila"
              onClick={handleCloseListaTequimila}
            >
              ❌ Cerrar Tequimila
            </button>
            <table className="lista-tequimila" ref={tablaTequimilaRef}>
              <thead>
                <tr>
                  <th colSpan={4}>Tequimila</th>
                </tr>
                <tr>
                  <th colSpan={2}></th>
                  <th className="encabezado-tequimila">tequimila</th>
                  <th className="celda-calicapan">calicapan</th>
                </tr>
              </thead>
              <tbody>
                {numerosTequimila
                  .slice()
                  .reverse()
                  .map((unidad, index) => {
                    const minutos = new Date(unidad.horaRegistro).getMinutes();
                    let backgroundColor = "";

                    if (minutos >= 6 && minutos <= 14) {
                      backgroundColor = "#FF0000"; // Rojo en hexadecimal
                    } else if (minutos >= 16 && minutos <= 24) {
                      backgroundColor = "#0051FF"; // Azul en hexadecimal
                    }

                    return (
                      <tr key={index}>
                        <td className="celda-tequimila">{index + 1}</td>
                        <td className="celda-tequimila">
                          <button
                            className={`unidad-button ${
                              unidad.tipo === "rojo" ? "rojo" : ""
                            }`}
                          >
                            {unidad.numeroUnidad}
                          </button>
                        </td>
                        <td className="celda-tequimila">
                          {formatHoraRegistro(unidad.horaRegistro)}
                        </td>
                        <td
                          className="celda-calicapan"
                          style={{ backgroundColor }}
                        >
                          {formatHoraRegistro(
                            add46Minutes(unidad.horaRegistro)
                          )}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <button
              className="close-button-tequimila"
              onClick={handleDownloadImageTequimila}
            >
              📸 Capturar
            </button>
          </div>
        )}
      </div>

      <div>
        {mostrarListaQuinta && (
          <div className="floating-list-quinta">
            <button
              className="close-button-quinta"
              onClick={handleCloseListaQuinta}
            >
              ❌ Cerrar Quinta
            </button>
            <table className="lista-quinta" ref={tablaQuintaRef}>
              <thead>
                <tr>
                  <th colSpan={4}>Quinta</th>
                </tr>
                <tr>
                  <th colSpan={2}></th>
                  <th className="encabezado-quinta">quinta</th>
                  <th className="celda-tequimila">tequimila</th>
                </tr>
              </thead>
              <tbody>
                {numerosQuinta
                  .slice()
                  .reverse()
                  .map((unidad, index) => {
                    return (
                      <tr key={index}>
                        <td className="celda-quinta">{index + 1}</td>
                        <td className="celda-quinta">
                          <button
                            className={`unidad-button ${
                              unidad.tipo === "rojo" ? "rojo" : ""
                            }`}
                          >
                            {unidad.numeroUnidad}
                          </button>
                        </td>
                        <td className="celda-quinta">
                          {formatHoraRegistro(unidad.horaRegistro)}
                        </td>
                        <td className="celda-tequimila">
                          {formatHoraRegistro(
                            add46Minutes(unidad.horaRegistro)
                          )}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <button
              className="close-button-quinta"
              onClick={handleDownloadImageQuinta}
            >
              📸 Capturar
            </button>
          </div>
        )}
      </div>

      <div>
        {mostrarListaCalanorte && (
          <div className="floating-list-calanorte">
            <button
              className="close-button-calanorte"
              onClick={handleCloseListaCalanorte}
            >
              ❌ Cerrar Calanorte
            </button>
            <table className="lista-calanorte" ref={tablaCalanorteRef}>
              <thead>
                <tr>
                  <th colSpan={3}>Calanorte</th>
                </tr>
              </thead>
              <tbody>
                {numerosCalanorte
                  .slice()
                  .reverse()
                  .map((unidad, index) => (
                    <tr key={index}>
                      <td className="celda-calanorte">{index + 1}</td>
                      <td className="celda-calanorte">
                        <button
                          className={`unidad-button ${
                            unidad.tipo === "rojo" ? "rojo" : ""
                          }`}
                        >
                          {unidad.numeroUnidad}
                        </button>
                      </td>
                      <td className="celda-calanorte">
                        {formatHoraRegistro(unidad.horaRegistro)}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <button
              className="close-button"
              onClick={handleDownloadImageCalanorte}
            >
              📸 Capturar
            </button>
          </div>
        )}
      </div>

      <div>
        {mostrarListaPajaco && (
          <div className="floating-list-pajaco">
            <button
              className="close-button-pajaco"
              onClick={handleCloseListaPajaco}
            >
              ❌ Cerrar Pajaco
            </button>
            <table className="lista-pajaco" ref={tablaPajacoRef}>
              <thead>
                <tr>
                  <th colSpan={4}>Pajaco</th>
                </tr>
                <tr>
                  <th colSpan={2}></th>
                  <th className="encabezado-pajaco">pajaco</th>
                  <th className="celda-calicapan">calicapan</th>
                </tr>
              </thead>
              <tbody>
                {numerosPajaco
                  .slice()
                  .reverse()
                  .map((unidad, index) => {
                    return (
                      <tr key={index}>
                        <td className="celda-pajaco">{index + 1}</td>
                        <td className="celda-pajaco">
                          <button
                            className={`unidad-button ${
                              unidad.tipo === "rojo" ? "rojo" : ""
                            }`}
                          >
                            {unidad.numeroUnidad}
                          </button>
                        </td>
                        <td className="celda-pajaco">
                          {formatHoraRegistro(unidad.horaRegistro)}
                        </td>
                        <td className="celda-calicapan">
                          {formatHoraRegistro(
                            add70Minutes(unidad.horaRegistro)
                          )}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <button
              className="close-button-pajaco"
              onClick={handleDownloadImagePajaco}
            >
              📸 Capturar
            </button>
          </div>
        )}
      </div>

      <div>
        {mostrarListaAnalco && (
          <div className="floating-list-analco">
            <button
              className="close-button-analco"
              onClick={handleCloseListaAnalco}
            >
              ❌ Cerrar Analco
            </button>
            <table className="lista-analco" ref={tablaAnalcoRef}>
              <thead>
                <tr>
                  <th colSpan={4}>Analco</th>
                </tr>
                <tr>
                  <th colSpan={2}></th>
                  <th className="encabezado-analco">analco</th>
                  <th className="celda-calicapan">calicapan</th>
                </tr>
              </thead>
              <tbody>
                {numerosAnalco
                  .slice()
                  .reverse()
                  .map((unidad, index) => {
                    return (
                      <tr key={index}>
                        <td className="celda-analco">{index + 1}</td>
                        <td className="celda-analco">
                          <button
                            className={`unidad-button ${
                              unidad.tipo === "rojo" ? "rojo" : ""
                            }`}
                          >
                            {unidad.numeroUnidad}
                          </button>
                        </td>
                        <td className="celda-analco">
                          {formatHoraRegistro(unidad.horaRegistro)}
                        </td>
                        <td className="celda-calicapan">
                          {formatHoraRegistro(
                            add50Minutes(unidad.horaRegistro)
                          )}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <button
              className="close-button-analco"
              onClick={handleDownloadImageAnalco}
            >
              📸 Capturar
            </button>
          </div>
        )}
      </div>

      <div>
        {mostrarListaYopi && (
          <div className="floating-list-yopi">
            <button
              className="close-button-yopi"
              onClick={handleCloseListaYopi}
            >
              ❌ Cerrar Yopi
            </button>
            <table className="lista-yopi" ref={tablaYopiRef}>
              <thead>
                <tr>
                  <th colSpan={3}>Yopi</th>
                </tr>
              </thead>
              <tbody>
                {numerosYopi
                  .slice()
                  .reverse()
                  .map((unidad, index) => (
                    <tr key={index}>
                      <td className="celda-yopi">{index + 1}</td>
                      <td className="celda-yopi">
                        <button
                          className={`unidad-button ${
                            unidad.tipo === "rojo" ? "rojo" : ""
                          }`}
                        >
                          {unidad.numeroUnidad}
                        </button>
                      </td>
                      <td className="celda-yopi">
                        {formatHoraRegistro(unidad.horaRegistro)}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <button className="close-button" onClick={handleDownloadImageYopi}>
              📸 Capturar
            </button>
          </div>
        )}
      </div>

      <div>
        {mostrarListaOtra && (
          <div className="floating-list-otra">
            <button
              className="close-button-otra"
              onClick={handleCloseListaOtra}
            >
              ❌ Cerrar Otra
            </button>
            <table className="lista-otra" ref={tablaOtraRef}>
              <thead>
                <tr>
                  <th colSpan={3}>Otra</th>
                </tr>
              </thead>
              <tbody>
                {numerosOtra
                  .slice()
                  .reverse()
                  .map((unidad, index) => (
                    <tr key={index}>
                      <td className="celda-otra">{index + 1}</td>
                      <td className="celda-otra">
                        <button
                          className={`unidad-button ${
                            unidad.tipo === "rojo" ? "rojo" : ""
                          }`}
                        >
                          {unidad.numeroUnidad}
                        </button>
                      </td>
                      <td className="celda-otra">
                        {formatHoraRegistro(unidad.horaRegistro)}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <button className="close-button" onClick={handleDownloadImageOtra}>
              📸 Capturar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UnidadesComponent;
