// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import db from "../db";
import "./Reporte.css";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { DownloadTableExcel } from "react-export-table-to-excel";
import "jspdf-autotable";

import {
  faCamera,
  faCircleArrowDown,
  faFileExcel,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TablaReporte() {
  const [showContent, setShowContent] = useState(false);
  const [reportes, setReportes] = useState([]);
  const [filtroNumeroUnidad, setFiltroNumeroUnidad] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("");
  const [filtroRuta, setFiltroRuta] = useState("");
  const [filterHoraSalida, setFilterHoraSalida] = useState("");

  const tableRef = useRef(null);

  const formatTime = (dateString) => {
    if (!dateString) return ""; // Verificar si el valor de entrada es null o undefined
    const date = new Date(dateString);
    
    // Formatear la hora local en HH:mm:ss
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    return date.toLocaleTimeString([], options);
  };

  const handleFiltroNumeroUnidad = (e) => {
    setFiltroNumeroUnidad(e.target.value);
  };

  const handleFiltroRuta = (e) => {
    setFiltroRuta(e.target.value);
  };

  const handleFiltroTipo = (e) => {
    setFiltroTipo(e.target.value);
  };

  // Función para filtrar los datos por número de unidad y ruta
  const filtrarDatos = (reportes) => {
    return reportes.filter((reporte) => {

      const formattedHoraRegistro = formatTime(reporte.horaRegistro);
    console.log(`Hora Registro Formateada: ${formattedHoraRegistro}`); // Verifica el formato
    
      const numeroUnidadMatch =
        filtroNumeroUnidad === "" ||
        reporte.numeroUnidad.toString() === filtroNumeroUnidad;
      const tipoMatch =
        filtroTipo === "" ||
        reporte.tipo.toLowerCase().includes(filtroTipo.toLowerCase());
      const rutaMatch =
        filtroRuta === "" ||
        reporte.ruta.toLowerCase().includes(filtroRuta.toLowerCase());
      const horaSalidaMatch =
        filterHoraSalida === "" ||
        formatTime(reporte.horaRegistro)
          .toLowerCase()
          .startsWith(filterHoraSalida.toLowerCase());

      return numeroUnidadMatch && tipoMatch && rutaMatch && horaSalidaMatch;
    });
  };

  const handleShowContent = async () => {
    if (!showContent) {
      try {
        const reportesData = await db.unidades.toArray();
        setReportes(reportesData);
      } catch (error) {
        console.error("Error al obtener los datos del reporte:", error);
      }
    }
    setShowContent(!showContent);
  };

  const reportesFiltrados = filtrarDatos(reportes);

  const handleDownloadPDF = () => {
    const input = tableRef.current;

    const pdf = new jsPDF("p", "mm", "a4");
    pdf.setProperties({ title: "Reporte" });

    const totalPagesExp = "{total_pages_count_string}";
    const fontSize = 12; // Tamaño de fuente deseado para toda la tabla
    const headerTextColor = "#FFFFFF"; // Color de texto para el encabezado (por ejemplo, blanco)
    const headerFillColor = "#3498DB"; // Color de fondo para el encabezado (por ejemplo, azul)
    const bodyTextColor = "#000000"; // Color de texto para el cuerpo (por ejemplo, negro)
    const bodyFillColor = "#FFFFFF"; // Color de fondo para el cuerpo (por ejemplo, blanco)

    const borderLineWidth = 0.3; // Grosor de línea deseado
    const borderColor = "#000000"; // Color de borde deseado (por ejemplo, negro)

    // Generar la tabla
    pdf.autoTable({
      html: input,
      margin: { top: 20 },
      theme: "grid",
      headStyles: {
        fontSize: 14,
        textColor: headerTextColor,
        fillColor: headerFillColor,
      },
      styles: {
        fontSize: fontSize,
        textColor: bodyTextColor,
        fillColor: bodyFillColor,
        lineWidth: borderLineWidth,
        lineColor: borderColor,
      },
      //La siguiente funcion agrega color a la fila, de acuerdo al contenido de la columna 7, ya que en el indice del array de columnas la columna 7 es la [6]
      didParseCell: function (data) {
        if (data.row.section === "body") {
          const color = data.row.raw[6].content;
          console.log(data.row.raw[6].content);

          data.cell.styles.fillColor = color;
        }
      },
      // eslint-disable-next-line no-unused-vars
      didDrawPage: (data) => pdf.putTotalPages(totalPagesExp),
    });
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
    const formattedDate = `Reporte de Checador ${dayOfWeek} ${dayOfMonth} de ${month} de ${year} a las ${hours}.${minutesWithLeadingZero} ${amOrPm}`;

    // Guardar el PDF con el nombre de archivo formateado
    const filename = `${formattedDate}.pdf`;
    pdf.save(filename);
  };

  const handleDownloadImage = () => {
    const input = tableRef.current;

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
    const formattedDate = `Reporte de Checador ${dayOfWeek} ${dayOfMonth} de ${month} de ${year} a las ${hours}.${minutesWithLeadingZero} ${amOrPm}`;

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

  const handleGoToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <div>
      <button onClick={handleShowContent}>
        {showContent ? "Ocultar" : "Mostrar"} Reporte
      </button>
      {showContent && (
        <div>
          <div className="filtros">
            <input
              type="text"
              className="filtro-numero"
              placeholder="Número"
              value={filtroNumeroUnidad}
              onChange={handleFiltroNumeroUnidad}
              inputMode="numeric" /* Teclado numérico */
            />
            <input
              type="text"
              className="filtro-numero"
              placeholder="Tipo"
              value={filtroTipo}
              onChange={handleFiltroTipo}
              inputMode="text" /* Teclado numérico */
            />
            <input
              type="text"
              className="filtro-ruta"
              placeholder="Ruta"
              value={filtroRuta}
              onChange={handleFiltroRuta}
              inputMode="text" /* Teclado qwerty */
            />
            <input
              type="text"
              value={filterHoraSalida}
              onChange={(e) => setFilterHoraSalida(e.target.value)}
              placeholder="Hora"
              inputMode="numeric"
            />
          </div>
          <table ref={tableRef} className="tabla-reporte">
            <thead>
              <tr>
                <th></th>
                <th>#</th>
                <th>Tipo</th>
                <th>Hora</th>
                <th>Ruta</th>
                <th>id</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {reportesFiltrados.reverse().map((reporte, index) => (
                <tr key={reporte.id} style={{ backgroundColor: reporte.color }}>
                  <td style={{ backgroundColor: "#00ECFF" }}>{index + 1}</td>
                  <td>{reporte.numeroUnidad}</td>
                  <td>{reporte.tipo}</td>
                  <td>{formatTime(reporte.horaRegistro)}</td>
                  <td>{reporte.ruta}</td>
                  <td>{reporte.id}</td>
                  <td
                    style={{
                      fontSize: 1, // Tamaño de fuente muy pequeño
                      color: "white", // Texto en color blanco
                    }}
                  >
                    {reporte.color}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="botones-flotantes">
            <DownloadTableExcel
              filename="users table"
              sheet="users"
              currentTableRef={tableRef.current}
            >
              <button className="boton-excel">
                <FontAwesomeIcon icon={faFileExcel} />
              </button>
            </DownloadTableExcel>
            <button className="boton-pdf" onClick={handleDownloadPDF}>
              <FontAwesomeIcon icon={faFilePdf} />
            </button>
            <button className="boton-imagen" onClick={handleDownloadImage}>
              <FontAwesomeIcon icon={faCamera} />
            </button>

            <button className="boton-ir-abajo" onClick={handleGoToBottom}>
              <FontAwesomeIcon icon={faCircleArrowDown} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TablaReporte;
