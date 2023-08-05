import Tarea from "./Tarea"

const ListadoTareas = ({ tareas }) => {
  return (
    <div>
      {tareas.map((tarea) =>
        <Tarea
          key={tarea.id}
          tarea={tarea}
        />
      )}
    </div>
  )
}

export default ListadoTareas