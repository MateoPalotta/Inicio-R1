import React from 'react';
import TarjetaPresentacion from './componentes/TarjetaPresentacion';

function App() {
  return (
    <div>
      <TarjetaPresentacion
        nombre="Mateo"
        apellido="Palotta"
        profesion="Estudiante"
        imagen="/profile-pic.jpg"
      />
    </div>
  );
}

export default App;
