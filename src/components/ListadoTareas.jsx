import Tarea from "./Tarea"

const ListadoTareas = ({ tareas, setTareaEditar }) => {
  return (
    <div>
      {tareas.map((tarea) =>
        <Tarea
          key={tarea.id}
          tarea={tarea}
          setTareaEditar={setTareaEditar}
        />
      )}
    </div>
  )
}

export default ListadoTareas