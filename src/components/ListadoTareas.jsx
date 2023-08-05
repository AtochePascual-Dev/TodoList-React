import Tarea from "./Tarea"

const ListadoTareas = ({ tareas, setTareas, setTareaEditar, tareasCompletas, setTareasCompletas }) => {
  return (
    <div>
      {tareas.map((tarea) =>
        <Tarea
          key={tarea.id}
          tarea={tarea}
          tareas={tareas}
          setTareas={setTareas}
          setTareaEditar={setTareaEditar}
          tareasCompletas={tareasCompletas}
          setTareasCompletas={setTareasCompletas}
        />
      )}
    </div>
  )
}

export default ListadoTareas