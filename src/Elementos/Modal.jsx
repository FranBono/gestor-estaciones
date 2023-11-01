import React from "react";
import "../styles/Modal.css"

const Modal = ({open, CloseModal}) => {
    if (!open) return null
    return(
        <div className="overlay">
        <div className="cont-modal">
            <form action="" className="form-modal">
                <div>
                    <h3>CUSI</h3>
                    <p>x</p>
                </div>
                <div>
                    <label htmlFor="">Hostname
                        <input type="text" />
                    </label>

                    <label htmlFor="">
                        MAC
                        <input type="text" name="" id="" />
                    </label>

                    <label htmlFor="">
                        Disco
                        <input type="text" />
                    </label>

                    <label htmlFor="">
                        Micro
                        <input type="text" />
                    </label>

                    <label htmlFor="">
                        Mother
                        <input type="text" />
                    </label>

                    <label htmlFor="">
                        RAM
                        <input type="text" name="" id="" />
                    </label>

                    <label htmlFor="">
                        S.O.
                        <input type="text" name="" id="" />
                    </label>

                </div>

                <div>
                    <label htmlFor="">
                    <input type="checkbox" name="" id="" />
                    </label>
                    
                    <label htmlFor="">
                        <input type="checkbox" name="" id="" />
                    </label>

                    <label htmlFor="">
                        <input type="checkbox" name="" id="" />
                    </label>
                </div>

                <div>
                    <input type="button" value="Guardar" />
                    <input type="button" value="Cancelar" />
                </div>
            </form> 

        </div>
        </div>
    )
}

export default Modal;