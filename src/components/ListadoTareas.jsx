import Tarea from "./Tarea"

const ListadoTareas = ({ tareas, setTareas, setTareaEditar, tareasCompletas, setTareasCompletas, listarCompletados }) => {
  return (
    <div
      className="w-full px-2"
    >
      {
        listarCompletados
          ?
          tareasCompletas.map((tarea) =>
            <Tarea
              key={tarea.id}
              tarea={tarea}
              tareas={tareas}
              setTareas={setTareas}
              tareasCompletas={tareasCompletas}
              setTareasCompletas={setTareasCompletas}
              listarCompletados={listarCompletados}
            />
          )
          :
          tareas.map((tarea) =>
            <Tarea
              key={tarea.id}
              tarea={tarea}
              tareas={tareas}
              setTareas={setTareas}
              setTareaEditar={setTareaEditar}
              tareasCompletas={tareasCompletas}
              setTareasCompletas={setTareasCompletas}
            />
          )
      }
    </div>
  )
}

export default ListadoTareas