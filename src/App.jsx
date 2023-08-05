import { useState } from "react"
import Formulario from "./components/Formulario"
import Haeder from "./components/Haeder"
import ListadoTareas from "./components/ListadoTareas";

function App() {
  const [tareas, setTareas] = useState([]);

  return (
    <div className="w-11/12 max-w-lg mt-10 mx-auto px5 py-10 shadow-lg rounded-md bg-white">
      <Haeder />

      <Formulario
        tareas={tareas}
        setTareas={setTareas}
      />

      <h2 className="my-5 text-center font-extrabold text-3xl text-gray-500">
        {tareas.length > 0 ? "Tus tareas" : "Aún no hay tareas"}
      </h2>

      <ListadoTareas
        tareas={tareas}
      />
    </div>
  )
}

export default App
