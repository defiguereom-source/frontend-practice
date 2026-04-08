import logo from './img/logo.svg';
import './stylesheets/App.css';
import Testimonio from './componentes/Testimonio';
import { testimonios1, testimonios2, testimonios3 }from './js/testimonios';

function App() {
  return (
    <div className="App">
      <div className="container-principal">
        <h1>Estos son nuestros alumnos del curso</h1>
        
        <Testimonio {...testimonios1} /> 

        <Testimonio {...testimonios2} />

        <Testimonio {...testimonios3} />

      </div>  
    </div>
  );
}

export default App;
