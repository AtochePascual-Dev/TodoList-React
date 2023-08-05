import Tarea from "./Tarea"

const ListadoTareas = ({ tareas, setTareas, setTareaEditar }) => {
  return (
    <div>
      {tareas.map((tarea) =>
        <Tarea
          key={tarea.id}
          tarea={tarea}
          tareas={tareas}
          setTareas={setTareas}
          setTareaEditar={setTareaEditar}
        />
      )}
    </div>
  )
}

export default ListadoTareas