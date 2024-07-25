// eslint-disable-next-line no-unused-vars
import React from 'react';
import './BotonUnidad.css';

// eslint-disable-next-line react/prop-types
const BotonUnidad = ({ unidad, onClick, disabled, invisible }) => (
  <button onClick={onClick} disabled={disabled} className={`boton-unidad ${ invisible ? 'invisible' : ''}`}>
    {unidad}
  </button>
);

export default BotonUnidad;