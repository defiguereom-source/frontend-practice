import React, {useState} from "react";
import "../stylesheets/TareaForm.css";
import { v4 as uuidv4 } from 'uuid';

function TareaForm(props) {

    const [input, setInput] = useState('');

    const manejarCambio = e =>{
        setInput(e.target.value);
    }

    const manejarEnvio = e =>{
        e.preventDefault();
        console.log("Enviando...");

        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }

        props.onSubmit(tareaNueva);
    }

    return(
        <form className="tarea-form" onSubmit={manejarEnvio}>
            <input 
                className="tarea-input"
                type="text"
                placeholder="Ingrese una Tarea"
                name="texto" 
                onChange={manejarCambio} />

                <button className="tarea-boton" type="submit">
                    Agregar 
                </button>
        </form>
    );
}

export default TareaForm;