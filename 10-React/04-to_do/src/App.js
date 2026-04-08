import logo from './logo.svg';
import './stylesheets/App.css';
import ListaTareas from './componentes/ListaTareas';

function App() {
  return (
    <div className="App">
      <div className='titulo'>
        <h1>To-Do List</h1>
      </div>
      
      <div className='container-tareas'>
        <h2 className='tarea'>Mis Tareas</h2> 
        <ListaTareas />

      </div>



    </div>
  );
}

export default App;
