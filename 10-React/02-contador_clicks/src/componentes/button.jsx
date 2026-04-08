// Este componente es un botón que se utiliza para incrementar el contador de clicks o reiniciarlo.
function Button({ texto , BotonClick , manejarClick }) {
  return (
    <button 
    className={BotonClick ? 'boton-click' : 'boton-reiniciar' }
    onClick = {manejarClick}>
        {texto}
    </button>    
  )
}

export default Button;