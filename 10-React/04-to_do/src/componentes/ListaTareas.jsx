import React , {useState} from 'react';
import '../stylesheets/ListaTareas.css';
import TareaForm from './TareaForm';
import Tarea from './Tarea';

function ListaTareas() {
    const [tareas, setTareas] = useState([]);
    
    const agregarTarea = tarea => {
        if (tarea.texto.trim()) {
            const nuevaTarea = {
                ...tarea,
                texto: tarea.texto.trim(),
                completada: false
            };

            setTareas([nuevaTarea, ...tareas]);
        }
    };

    const eliminarTarea = id =>{
        const tareasActu = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActu);
    }
    
    const completarTarea = (id) => {
        const tareaActu = tareas.map(tarea => {
            if (tarea.id === id) {
                return { ...tarea, completada: !tarea.completada };
            }
            return tarea;
        });

        setTareas(tareaActu);
    };
    return(
        <>
            <TareaForm onSubmit={agregarTarea} />

            <div className='tareas-lista-contenedor'>
                {
                    tareas.map((tarea)=>
                    <Tarea 
                        key={tarea.id}
                        id={tarea.id}
                        texto={tarea.texto}
                        completada={tarea.completada}
                        completarTarea={completarTarea}
                        eliminarTarea={eliminarTarea}
                    />
                    )
                }
            </div>
        </>
    );
}

export default ListaTareas;