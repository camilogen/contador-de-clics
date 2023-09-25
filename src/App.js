
import './App.css'; 
import Boton from './componentes/Boton';
import freecodeCampLogo from './imagenes/FreeCodeCamp_logo.svg.png';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const handleClick = () => {
    setNumClicks(numClicks + 1);
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freecodeCampLogo}
          alt='Logo de freeCodeCamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador numClicks={numClicks} />
        <Boton
          texto='Clic'
          esBotonDeClick={true}
          handleClick={handleClick} />
        <Boton 
          texto='Reiniciar'
          esBotonDeClick={false}
          handleClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
