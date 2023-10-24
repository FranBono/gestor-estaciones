import React from "react";
import "../styles/Filtro2.css"

function Filtro2() {
    return(
        <div classname="cont-filtro2">
            <form className="cont-form2" action="">
                <p className="texto">Filtro:</p>
                <input className="input-Cusi" type="text" placeholder="Cusi"/>
                <select className="select-filtro2" name="" id="">
                    <option value="" selected disabled>--Seleccione un Departamento--</option>
                    <option value="">option1</option>
                    <option value="">option2</option>
                    <option value="">option3</option>
                </select>
                <input className="btn-buscar" type="button" value="Buscar" />
            </form>
        </div>
    )
}
export default Filtro2;