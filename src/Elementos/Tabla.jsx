import React from "react";
import "../styles/Tabla.css"



function Tabla() {
    return(
        <div className="cont-tab">
        <table className="cont-tabla">
            <thead>
                <tr>
                    <th>Orden</th>
                    <th>Nombre Producto</th>
                    <th>Color</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                <tr className="azul">
                    <th>1</th>
                    
                    <th><td>Asus Zenbook 14"</td></th>
                    
                    <th><td>Silver</td></th>
                    
                    
                        <th><td>-------</td></th>
                    
                    <th><td>4000</td></th>
                    <th><td>
                        <input className="input-tab" type="bottom" value="Ver más"/>
                        <input className="input-tab" type="bottom" value="Opciones" />
                    </td>
                    </th>

                </tr>
                <tr>
                    <th>2</th>
                    <th>
                    <td>Asus Zenbook 14"</td>
                    </th>
                    <th><td>Silver</td>
                    </th>
                    <th>
                        <td>-------</td>
                    </th>
                    <th><td>4000</td></th>
                    <th><td>
                        <input className="input-tab" type="bottom" value="Ver más"/>
                        <input className="input-tab" type="bottom" value="Opciones" />
                    </td>
                    </th>

                </tr><tr>
                    <th>3</th>
                    <th>
                    <td>Asus Zenbook 14"</td>
                    </th>
                    <th><td>Silver</td>
                    </th>
                    <th>
                        <td>-------</td>
                    </th>
                    <th><td>4000</td></th>
                    <th><td>
                        <input className="input-tab" type="bottom" value="Ver más"/>
                        <input className="input-tab" type="bottom" value="Opciones" />
                    </td>
                    </th>

                </tr>
            </tbody>
            
        </table>
        </div>

    )
}

export default Tabla;