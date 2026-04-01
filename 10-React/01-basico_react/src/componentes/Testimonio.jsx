import React from "react"; // No es necesario importar React en las versiones más recientes, pero se incluye por compatibilidad
import '../stylesheets/Testimonio.css';

// Deficinendo componente funcional
// Recibiendo props como argumento
function Testimonio({nombre, pais, cargo, imagen, testimonio}) {
  return(
    <div className="container-testimonio">

      <img 
      className="img-testimonio" 
      src={require(`../img/${imagen}`)} 
      alt="Foto de persona" />

      <div className="container-text">
        <h2 className="nombre-pais">{nombre} en {pais}</h2>
        <p className="cargo">{cargo}</p>
        <p className="testimonio">{testimonio}</p>
      </div>

    </div>
  );
}

export default Testimonio;