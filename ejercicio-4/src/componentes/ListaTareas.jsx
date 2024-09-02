import { useReducer, useRef, useEffect } from "react";

// Componente: ListaTareas (Lista de tareas)
const ListaTareas = () => {
    const inputRef = useRef();

    // Definimos una función reductora para manejar tareas
    const taskReducer = (state, action) => {
    // Función auxiliar para actualizar tareas en almacenamiento local
    const updateTasks = (newTasks) => {
        localStorage.setItem('tasks', JSON.stringify(newTasks));
        return newTasks;
    };

    // Manejamos diferentes acciones (agregar, eliminar, toggle, cargar)
    switch (action.type) {
        case 'add_task':
            return updateTasks([...state, { title: action.title, completed: false }]);
        case 'remove_task':
            return updateTasks(state.filter((_, i) => i !== action.index));
        case 'toggle_task':
            return updateTasks(state.map((task, i) => i === action.index ? { ...task, completed: !task.completed } : task));
        case 'load_tasks':
            return action.tasks;
        default:
            return state;
        }
    };

    // Inicializamos la lista de tareas con un array vacío
    const [tasks, dispatch] = useReducer(taskReducer, []);

    // Cargamos tareas del almacenamiento local cuando el componente se monta
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        dispatch({ type: 'load_tasks', tasks: storedTasks });
    }, []);

    // Manejamos la sumisión del formulario (agregar nueva tarea)
    const handleSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current.value.trim()) {
        dispatch({ type: 'add_task', title: inputRef.current.value });
        inputRef.current.value = '';
        }
    };

  // Renderizamos el componente de la lista de tareas
    return (
    <div>
      <h1>Lista de tareas</h1>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" placeholder="Nueva tarea" />
        <button type="submit">Añadir</button>
      </form>
      <div className="tasks">
        {tasks.map((task, index) => (
          <div key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <p>{task.title}</p>
            <button onClick={() => dispatch({ type: 'toggle_task', index })}>
              {task.completed ? 'Incompleta' : 'Completada'}
            </button>
            <button onClick={() => dispatch({ type: 'remove_task', index })}>Borrar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaTareas;