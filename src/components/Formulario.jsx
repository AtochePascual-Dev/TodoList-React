import { useState, useEffect } from "react"

const Formulario = ({ tareas, setTareas }) => {
  const [tarea, setTarea] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Crear tarea
    const newTarea = {
      tarea,
      realizado: false
    };

    // Agregar tarea
    setTareas([...tareas, newTarea]);

    setTarea("");
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="w-full px-2 flex gap-3 relative items-center overflow-hidden">

      <input
        type="text"
        placeholder="Escribe tu tarea"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
        className={`w-full p-2 border rounded-xl outline-none text-gray-500 transition-all duration-1000 `}
      />

      <input
        type="submit"
        value="Añadir"
        className={`py-2 px-6 font-bold rounded-lg transition-all duration-300 cursor-pointer text-white bg-green-500 ${tarea ? " relative -right-0" : "absolute -right-48"}`} />

    </form>
  )
}

export default Formulario