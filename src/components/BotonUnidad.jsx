// eslint-disable-next-line no-unused-vars
import React from 'react';
import './BotonUnidad.css';

// eslint-disable-next-line react/prop-types
const BotonUnidad = ({ unidad, onClick, disabled }) => (
  <button onClick={onClick} disabled={disabled} className='boton-unidad'>
    {unidad}
  </button>
);

export default BotonUnidad;