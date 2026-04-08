import './stylesheets/App.css';
import Navbar from './componentes/Navbar';
import Banner from './componentes/Banner';
import Card from './componentes/Card';
import {A,B,C,D} from './js/cards'

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Banner />
      
      <div className='container-card'>
        <Card {...A} />

        <Card {...B}/>

        <Card {...C} />

        <Card {...D} />
      </div>

    </div>
  );
}

export default App;
