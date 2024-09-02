import React, { useState } from 'react';
import './Contador.css';

function Contador() {
    // Creamos un estado count con un valor inicial de 0 y una función setCount para actualizarlo
    const [count, setCount] = useState(0);

    // Definimos un manejador de eventos para incrementar el contador
    const handleIncrement = () => {
      // Incrementamos el valor de count en 1
      setCount(count + 1);
    };

    // Definimos un manejador de eventos para decrementar el contador
    const handleDecrement = () => {
      // Decrementamos el valor de count en 1
      setCount(count - 1);
    };

    // Renderizamos el componente
    return (
      <div>
        <p>Contador: {count}</p>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    );
}

// Exportamos el componente Contador como el componente predeterminado del archivo
export default Contador;