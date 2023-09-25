import React from "react";
import '../hojas-de-estilo/Boton.css'

function Boton({ texto, esBotonDeClick, handleClick }) {
  return (
    <button
      className={ esBotonDeClick ? 'boton-clic' : 'boton-reiniciar' }
      onClick={handleClick}>
      {texto}
    </button>
  )        
}

export default Boton;