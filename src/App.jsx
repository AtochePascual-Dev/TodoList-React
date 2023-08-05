import { useState } from "react"
import Formulario from "./components/Formulario"
import Haeder from "./components/Haeder"
import ListadoTareas from "./components/ListadoTareas";

function App() {
  const [tareas, setTareas] = useState([]);
  const [tareasCompletas, setTareasCompletas] = useState([]);
  const [tareaEditar, setTareaEditar] = useState({});

  return (
    <div className="w-11/12 max-w-lg mt-10 mx-auto px5 py-10 shadow-lg rounded-md bg-white overflow-hidden">
      <Haeder />

      <Formulario
        tareas={tareas}
        setTareas={setTareas}
        tareaEditar={tareaEditar}
      />

      <h2 className="my-5 text-center font-extrabold text-3xl text-gray-500">
        {tareas.length > 0 ? "Tus tareas" : "Aún no hay tareas"}
      </h2>

      <ListadoTareas
        tareas={tareas}
        setTareas={setTareas}
        setTareaEditar={setTareaEditar}
        tareasCompletas={tareasCompletas}
        setTareasCompletas={setTareasCompletas}
      />
    </div>
  )
}

export default App
