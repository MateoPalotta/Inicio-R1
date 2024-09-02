import React, { useState } from 'react';
import WelcomeMessage from './Bienvenida';

const Form = () => {
  const [name, setName] = useState(''); // Inicializamos el estado con un string vacío
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false); // Inicializamos el estado para mostrar el mensaje de bienvenida

  const handleSubmit = (event) => {
    event.preventDefault(); // Evitamos que el formulario se envíe por defecto
    setShowWelcomeMessage(true); // Mostramos el mensaje de bienvenida
  };

  const handleInputChange = (event) => {
    setName(event.target.value); // Actualizamos el estado con el valor del input
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={name} onChange={handleInputChange} />
      </label>
      <button type="submit">Enviar</button>
      {showWelcomeMessage && <WelcomeMessage name={name} />}
    </form>
  );
};

export default Form;