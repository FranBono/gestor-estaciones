import React from "react";
import "../styles/Formulario.css"
function Formulario() {
    return(
        <div className="cont-form">
            
            <form className="form" action="">
            <h3>Campos</h3>
                <label className="form-label" htmlFor="">
                    Departamento
                </label>
                <select className="select-form">
                    <option className="select-form-0" value="" disabled selected>--Seleccionar opcion--</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                </select>   

                <label className="form-label" htmlFor="">
                    Estacion
                </label>
                <input className="form-input" type= "text" />

                <label className="form-label" htmlFor="">
                    CUSI
                </label>
                <input className="form-input" type="text" />

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
