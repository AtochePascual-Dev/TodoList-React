import { useEffect, useState } from "react"
import Formulario from "./components/Formulario"
import Haeder from "./components/Haeder"
import ListadoTareas from "./components/ListadoTareas";
import Select from "./components/Select";

function App() {
  const [tareas, setTareas] = useState(JSON.parse(localStorage.getItem('tareas')) || []);
  const [tareasCompletas, setTareasCompletas] = useState(JSON.parse(localStorage.getItem('tareasCompletas')) || []);
  const [tareaEditar, setTareaEditar] = useState({});
  const [listarCompletados, setlistarCompletados] = useState(false);

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
    localStorage.setItem('tareasCompletas', JSON.stringify(tareasCompletas));
  }, [tareas, tareasCompletas])

  return (
    <div className="w-11/12 max-w-lg mt-10 mx-auto px-3 py-10 flex flex-col items-center gap-6 shadow-lg rounded-md bg-white overflow-hidden">
      <Haeder />

      <Formulario
        tareas={tareas}
        setTareas={setTareas}
        tareaEditar={tareaEditar}
        setTareaEditar={setTareaEditar}
      />


      <Select
        setlistarCompletados={setlistarCompletados}
      />

      <h2 className="text-center font-extrabold text-3xl text-gray-500">
        {
          listarCompletados
            ?
            tareasCompletas.length > 0 ? "Completadas" : "Aún no has completado tareas"
            :
            tareas.length > 0 ? "Tus tareas" : "Aún no hay tareas"
        }
      </h2>



      <ListadoTareas
        tareas={tareas}
        setTareas={setTareas}
        setTareaEditar={setTareaEditar}
        tareasCompletas={tareasCompletas}
        setTareasCompletas={setTareasCompletas}
        listarCompletados={listarCompletados}
      />
    </div>
  )
}

export default App
