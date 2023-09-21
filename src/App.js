
import './App.css';
import freecodeCampLogo from './imagenes/FreeCodeCamp_logo.svg.png'

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freecodeCampLogo}
          alt='Logo de freeCodeCamp'
        />
      </div>
    </div>
  );
}

export default App;
