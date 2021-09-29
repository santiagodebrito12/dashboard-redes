import React from 'react';
import DatosDiarios from './components/DatosDiarios/DatosDiarios';
import DatosGenerales from './components/DatosGenerales/DatosGenerales';
import Header from './components/Header/Header';
import ThemeState from './ThemeContext/ThemeState';


function App() {
  return (
    <ThemeState>
      <div className="container mt-2">
        <Header/>
      </div>
      <div className="container mt-4">
        <DatosGenerales/>
      </div>
      <div className="container mt-5">
        <DatosDiarios/>
      </div>

    </ThemeState>
  );
}

export default App;
