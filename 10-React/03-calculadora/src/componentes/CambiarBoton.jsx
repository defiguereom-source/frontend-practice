import React from 'react';
import '../stylesheets/Botones.css';

const BotonCambiarSigno = (props) => (
    <div 
        className="boton-contenedor operador"
        onClick={() => props.manejarCambiarSigno()}
    >
        {props.children}
    </div>
)

export default BotonCambiarSigno;