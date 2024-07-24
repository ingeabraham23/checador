/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./TablaResumen.css";
import html2canvas from "html2canvas";

// eslint-disable-next-line react/prop-types
const TablaResumen = ({ pagos }) => {
  // eslint-disable-next-line react/prop-types
  const total = pagos.reduce((sum, pago) => sum + pago.monto, 0);
  const tablaRef = useRef(null);

  // Función para formatear la fecha en formato de 12 horas con AM/PM en español
  const formatearHora = (fecha) => {
    const opciones = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return new Date(fecha).toLocaleTimeString("es-ES", opciones);
  };

  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const obtenerClaseTipo = (tipo) => {
    return tipo === "privado" ? "fila-privado" : "fila-grupal";
  };

  function capturarTabla(tabla) {

    html2canvas(tabla).then(function (canvas) {
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = `Comisiones.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  return (
    <div className="container-resumen">
      <table className="tabla-resumen" ref={tablaRef}>
        <thead>
          <tr>
            <th className="encabezado">#</th>
            <th className="encabezado">Unidad</th>
            <th className="encabezado">Monto</th>
            <th className="encabezado">Tipo</th>
            <th className="encabezado">Hora</th>
          </tr>
        </thead>
        <tbody>
          {pagos.map((pago, index) => (
            <tr key={pago.id} className={obtenerClaseTipo(pago.tipo)}>
              <td className="celda-resumen">{index + 1}</td>
              <td className="celda-resumen">{pago.unidad}</td>
              <td className="celda-resumen">
                {formatNumberWithCommas(pago.monto)}
              </td>
              <td className="celda-resumen">{pago.tipo}</td>
              <td className="celda-resumen">{formatearHora(pago.fecha)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5} className="pie-resumen">
              Total: $ {formatNumberWithCommas(total)}
            </td>
          </tr>
        </tfoot>
      </table>
      <button onClick={() => capturarTabla(tablaRef.current)} className="boton-capturar">📸 Capturar</button>
    </div>
  );
};

export default TablaResumen;
