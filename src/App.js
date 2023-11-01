import './App.css';
import Formulario from './Elementos/Formulario';
import Header from "./Elementos/header"
import Filtro2 from "./Elementos/Filtro2"
import Tabla from "./Elementos/Tabla"
import Modal from "./Elementos/Modal"






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

      <Modal>
      
      <h1>Agregar Usuarios</h1>
      <form>
        <label>Usuario</label>
        <input type='text' placeholder='Ingresar Usuario' />
      </form>
      
      </Modal>
    
    </div>
  );
}

export default App;
