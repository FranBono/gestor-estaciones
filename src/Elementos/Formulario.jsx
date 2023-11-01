import React, {useState} from "react";
import "../styles/Formulario.css"
import Modal from "./Modal";
function Formulario() {
    const [OpenModal, setOpenModal] = useState(false)

    return(
        <div className="cont-form">
            
            <form className="form" action="">
            <h3>Campos</h3>
                <label className="form-label" htmlFor="">
                    Departamento
                </label>
                <select className="select-form">
                    <option className="select-form-0" value="" disabled selected>--Seleccionar opción--</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                </select>   
                
               
                <label className="form-label" htmlFor="">
                    Estacion
                </label>
                    <div className="flex">
                <input   className="form-input input-border" type= "text" />
                    </div>
                
                
                <label className="form-label" htmlFor="">
                    CUSI
                </label>
                <div className="flex">
                <input className="form-input" type="text" />
                
                <button className="btn-agregar" 
                onClick={ () => setOpenModal(true)}>+</button>
                <Modal open={OpenModal} CloseModal={() => setOpenModal(false)} />
                
                </div>

                <input className="btn-input" type="submit" value="Usuario +" />
                <input className="btn-input" type="submit" value="Monitor +"/>
                                                
            </form>
            
            <div className="cont-btn">
                <button className="btn">Agregar</button>
                <button className="btn-cancelar btn">Cancelar</button>
            </div>
                
        </div>
    )
}

export default Formulario;
