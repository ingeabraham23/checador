// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
//import Dexie from 'dexie';
import "./Tiempos.css"; // Asegúrate de tener el archivo CSS para los estilos
import db from "../db";

const UnidadesComponent = () => {
  const [ruta, setRuta] = useState("");
  const [tipo, setTipo] = useState("");
  const [numeroUnidad, setNumeroUnidad] = useState("");
  const [isFormVisible, setFormVisible] = useState(false);
  const inputRef = useRef(null);

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
  const [ultimaUnidadYopiEscuela, setUltimaUnidadYopiEscuela] = useState(null);
  const [penultimaUnidadYopiEscuela, setPenultimaUnidadYopiEscuela] = useState(null);
  const [ultimaUnidadTequimila, setUltimaUnidadTequimila] = useState(null);
  const [penultimaUnidadTequimila, setPenultimaUnidadTequimila] = useState(null);
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
  const [tiempoTranscurridoYopiEscuela, setTiempoTranscurridoYopiEscuela] = useState(0);
  const [tiempoTranscurridoTequimila, setTiempoTranscurridoTequimila] = useState(0);
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
  const [diferenciaYopiEscuela, setDiferenciaYopiEscuela] = useState(0);
  const [diferenciaTequimila, setDiferenciaTequimila] = useState(0);
  const [diferenciaOtra, setDiferenciaOtra] = useState(0);

  // Estados para diferencias de tiempo entre último y penúltimo registro ROJOS ROJOS ROJOS
  const [diferenciaRojaTalzintan, setDiferenciaRojaTalzintan] = useState(0);
  const [diferenciaRojaTezotepec, setDiferenciaRojaTezotepec] = useState(0);
  const [diferenciaRojaCalicapan, setDiferenciaRojaCalicapan] = useState(0);
  const [diferenciaRojaSosaEscuela, setDiferenciaRojaSosaEscuela] = useState(0);
  const [diferenciaRojaSanIsidro, setDiferenciaRojaSanIsidro] = useState(0);

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
      const unidadesYopiEscuela = await obtenerUnidades("yopi escuela");
      const unidadesTequimila = await obtenerUnidades("tequimila");
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
        unidadesYopiEscuela,
        setUltimaUnidadYopiEscuela,
        setPenultimaUnidadYopiEscuela,
        setTiempoTranscurridoYopiEscuela,
        setDiferenciaYopiEscuela
      );
      actualizarEstadoUnidades(
        unidadesTequimila,
        setUltimaUnidadTequimila,
        setPenultimaUnidadTequimila,
        setTiempoTranscurridoTequimila,
        setDiferenciaTequimila
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
    };

    const intervalo = setInterval(actualizarCronometros, 1000);
    return () => clearInterval(intervalo);
  }, []);

  const obtenerUnidades = async (ruta, tipo) => {
    if (tipo) {
      return await db.unidades.where({ ruta, tipo }).toArray();
    } else {
      return await db.unidades.where("ruta").equals(ruta).toArray();
    }
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
      const horaRegistro = new Date().toISOString();
      await db.unidades.add({ ruta, tipo, numeroUnidad, horaRegistro });
      setRuta("");
      setTipo("");
      setNumeroUnidad("");
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
    setFormVisible(false); // Ocultar el formulario al cancelar
  };

  useEffect(() => {
    if (isFormVisible) {
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

  return (
    <div>
      {/*FORMULARIO FORMULARIO FORMULARIO FORMULARIO FORMULARIO FORMULARIO FORMULARIO FORMULARIO*/}
      {isFormVisible && (
        <div>
          <div className="form-container">
            <form
              className="add-form"
              onSubmit={(e) => {
                e.preventDefault();
                agregarUnidad();
              }}
            >
              <div className="ruta-display">{ruta}</div>
              <div className="form-buttons">
                <label>
                  <input
                    className="styled-input"
                    type="number"
                    ref={inputRef}
                    value={numeroUnidad}
                    onChange={(e) => setNumeroUnidad(e.target.value)}
                  />
                </label>
              </div>

              <div className="form-buttons">
                <button
                  className="save-button-rojo"
                  type="button"
                  onClick={() => handleAgregarTipo("rojo")}
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
                >
                  R-3
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
                  setFormVisible(true);
                }}
              >
                {formatoTiempo(tiempoTranscurridoTalzintan)}
              </button>
              <br></br> <span className="texto-chico-negro">Talzintan</span>
            </td>
            {ultimaUnidadTalzintan && (
              <td className="celda-talzintan">
                {" "}
                <button
                  className={`${
                    ultimaUnidadTalzintan.tipo === "blanco"
                      ? "white-bg"
                      : "red-bg"
                  }`}
                >
                  {ultimaUnidadTalzintan.numeroUnidad}
                </button>{" "}
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
                  setFormVisible(true);
                }}
              >
                {formatoTiempo(tiempoTranscurridoTezotepec)}
              </button>
              <br></br> <span className="texto-chico">Tezotepec</span>
            </td>
            {ultimaUnidadTezotepec && (
              <td className="celda-tezotepec">
                {" "}
                <button
                  className={`${
                    ultimaUnidadTezotepec.tipo === "blanco"
                      ? "white-bg"
                      : "red-bg"
                  }`}
                >
                  {ultimaUnidadTezotepec.numeroUnidad}
                </button>{" "}
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
                  setFormVisible(true);
                }}
              >
                {formatoTiempo(tiempoTranscurridoCalicapan)}
              </button>
              <br></br> <span className="texto-chico">Calicapan</span>
            </td>
            {ultimaUnidadCalicapan && (
              <td className="celda-calicapan">
                {" "}
                <button
                  className={`${
                    ultimaUnidadCalicapan.tipo === "blanco"
                      ? "white-bg"
                      : "red-bg"
                  }`}
                >
                  {ultimaUnidadCalicapan.numeroUnidad}
                </button>{" "}
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
                  setFormVisible(true);
                }}
              >
                {formatoTiempo(tiempoTranscurridoSosaEscuela)}
              </button>
              <br></br> <span className="texto-chico">Sosa</span>
            </td>
            {ultimaUnidadSosaEscuela && (
              <td className="celda-sosa">
                {" "}
                <button
                  className={`${
                    ultimaUnidadSosaEscuela.tipo === "blanco"
                      ? "white-bg"
                      : "red-bg"
                  }`}
                >
                  {ultimaUnidadSosaEscuela.numeroUnidad}
                </button>{" "}
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
                  setFormVisible(true);
                }}
              >
                {formatoTiempo(tiempoTranscurridoSanIsidro)}
              </button>
              <br></br> <span className="texto-chico">San Isidro</span>
            </td>
            {ultimaUnidadSanIsidro && (
              <td className="celda-sanisidro">
                {" "}
                <button
                  className={`${
                    ultimaUnidadSanIsidro.tipo === "blanco"
                      ? "white-bg"
                      : "red-bg"
                  }`}
                >
                  {ultimaUnidadSanIsidro.numeroUnidad}
                </button>{" "}
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
                  setFormVisible(true);
                }}
              >
                {formatoTiempo(tiempoTranscurridoTacopan)}
              </button>
              <br></br> <span className="texto-chico">Tacopan</span>
            </td>
            {ultimaUnidadTacopan && (
              <td className="celda-tacopan">
                {" "}
                <button
                  className={`${
                    ultimaUnidadTacopan.tipo === "blanco"
                      ? "white-bg"
                      : "red-bg"
                  }`}
                >
                  {ultimaUnidadTacopan.numeroUnidad}
                </button>{" "}
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
                    >
                      {penultimaUnidadTacopan.numeroUnidad}
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
                    ultimaUnidadTacopan.tipo === "blanco"
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
                  setFormVisible(true);
                }}
              >
                {formatoTiempo(tiempoTranscurridoYopi)}
              </button>
              <br></br> <span className="texto-chico">Yopi</span>
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
                    >
                      {penultimaUnidadYopi.numeroUnidad}
                    </button>
                    <br></br>
                  </>
                )}
              </td>
            )}
          </tr>

          {/*FILA YOPI ESCUELA  FILA YOPI ESCUELA  FILA YOPI ESCUELA  FILA YOPI ESCUELA  */}
          <tr>
            <td></td>
            <td className="celda-yopiescuela">
              <button
                className="boton-cronometro"
                onClick={() => {
                  setRuta("yopi escuela");
                  setFormVisible(true);
                }}
              >
                {formatoTiempo(tiempoTranscurridoYopiEscuela)}
              </button>
              <br></br> <span className="texto-chico">Yopi Escuela</span>
            </td>
            {ultimaUnidadYopiEscuela && (
              <td className="celda-yopiescuela">
                {" "}
                <button
                  className={`${
                    ultimaUnidadYopiEscuela.tipo === "blanco" ? "white-bg" : "red-bg"
                  }`}
                >
                  {ultimaUnidadYopiEscuela.numeroUnidad}
                </button>{" "}
                {penultimaUnidadYopiEscuela && (
                  <>
                    <button className="button-se-lleva-yopiescuela">
                      {formatoTiempo(diferenciaYopiEscuela)}
                    </button>
                    <button
                      className={`${
                        penultimaUnidadYopiEscuela.tipo === "blanco"
                          ? "white-bg"
                          : "red-bg"
                      }`}
                    >
                      {penultimaUnidadYopiEscuela.numeroUnidad}
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
                    ultimaUnidadTequimila.tipo === "blanco" ? "white-bg" : "red-bg"
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
                    >
                      {penultimaUnidadTequimila.numeroUnidad}
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
    </div>
  );
};

export default UnidadesComponent;
