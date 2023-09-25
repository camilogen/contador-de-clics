
import './App.css'; 
import Boton from './componentes/Boton';
import freecodeCampLogo from './imagenes/FreeCodeCamp_logo.svg.png';
import Contador from './componentes/Contador';

function App() {

  const handleClick = () => {
    console.log("Clic");
  }

  const reiniciarContador = () => {
    console.log('Reiniciar')
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
        <Contador numClicks='5' />
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
