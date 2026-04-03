import logo from './logo.svg';
import './stylesheets/App.css';
import Botones from './componentes/Botones';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/ClearBoton';
import BotonCambiarSigno from './componentes/CambiarBoton';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('0');

  const agregarInput = valor => {
    setInput(input + valor);
  };

  const calcularResultado = () => {
    if(input) {
      setInput(evaluate(input));
    }else{
      alert('Por favor ingrese valores para realizar los cálculos');
    }
  };

  const manejarCambiarSigno = () => {
    setInput(previo => String(parseFloat(previo) * -1))
  };

  return (
    <div className="App">
        <div className='contenedor-calculadora'> 
            <Pantalla input={input}/>

            <div className='fila'>
              <BotonClear manejarClear={() => setInput('')}>AC</BotonClear>
              <BotonCambiarSigno manejarCambiarSigno={manejarCambiarSigno}>+/-</BotonCambiarSigno>
              <Botones manejarClick ={agregarInput}>%</Botones>
              <Botones manejarClick ={agregarInput}>/</Botones>
            </div>
            <div className='fila'>
                <Botones manejarClick ={agregarInput}>7</Botones>
                <Botones manejarClick ={agregarInput}>8</Botones>
                <Botones manejarClick ={agregarInput}>9</Botones>
                <Botones manejarClick ={agregarInput}>*</Botones>
            </div>
            <div className='fila'>
                <Botones manejarClick ={agregarInput}>4</Botones>
                <Botones manejarClick ={agregarInput}>5</Botones>
                <Botones manejarClick ={agregarInput}>6</Botones>
                <Botones manejarClick ={agregarInput}>-</Botones>
            </div>
            <div className='fila'>
                <Botones manejarClick ={agregarInput}>1</Botones>
                <Botones manejarClick ={agregarInput}>2</Botones>
                <Botones manejarClick ={agregarInput}>3</Botones>
                <Botones manejarClick ={agregarInput}>+</Botones>
            </div>
              <div className='fila'>
                <Botones manejarClick ={agregarInput}>0</Botones>
                <Botones manejarClick ={agregarInput}>.</Botones>
                <Botones manejarClick ={calcularResultado}>=</Botones>
              </div>
        </div>
    </div>
  
  );
}

export default App;
