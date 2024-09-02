import React, { useState } from 'react';
import './TarjetaPresentacion.css';

// Función del componente TarjetaPresentacion
function TarjetaPresentacion(props) {
    // Creamos estados para almacenar la información personal
    const [nombre, setNombre] = useState(props.nombre);
    const [apellido, setApellido] = useState(props.apellido);
    const [profesion, setProfesion] = useState(props.profesion);
    const [imagen, setImagen] = useState(props.imagen);

    // Renderizamos el componente
    return (
        <div className="tarjeta-presentacion">
        <img src={imagen} alt="Imagen de perfil" />
        <h2>
          {nombre} {apellido}
        </h2>
        <p>Profesión: {profesion}</p>
      </div>
    );
}

export default TarjetaPresentacion;