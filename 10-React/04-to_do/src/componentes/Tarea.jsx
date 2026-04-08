import React from "react";
import '../stylesheets/Tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }){
    return(
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
            
            <div className="tarea-texto" 
                onClick={() => completarTarea(id)}>
                {texto}
            </div>

            <div className="icono-contenedor"
                onClick={() => eliminarTarea(id)}>
                <AiOutlineCloseCircle className="icono"/>
            </div>
        </div>
    );
}

export default Tarea;