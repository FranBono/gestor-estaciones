import './App.css';
import Formulario from './Elementos/Formulario';
import Header from "./Elementos/header"
import Filtro2 from "./Elementos/Filtro2"
import Tabla from "./Elementos/Tabla"
function App() {
  return (
    <div className="App">
        <Header />
      <div className=''>
      <Formulario />
      </div> 
      <div className='cont-tabla-filtro2'>
        <Filtro2 />
        <Tabla/>
      </div>
    
    </div>
  );
}

export default App;
