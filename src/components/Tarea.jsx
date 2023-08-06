import IconoCheck from '../img/check.svg';
import IconoEdit from '../img/edit.svg';
import IconoDelete from '../img/delete.svg';
import { useState } from 'react';

const Tarea = ({ tarea, tareas, setTareas, setTareaEditar, tareasCompletas, setTareasCompletas, listarCompletados }) => {
  const [animar, setAnimar] = useState(false)

  const { nombre, id } = tarea;

  const handleClickEliminarTarea = () => {
    setAnimar(true);

    setTimeout(() => {
      if (listarCompletados) {
        const tareaCompletadaEliminada = tareasCompletas.find((tareaState) => tareaState.id === id);
        setTareas([...tareas, tareaCompletadaEliminada]);

        const tareasCompletasActualizadas = tareasCompletas.filter((tareaState) => tareaState.id !== id);
        setTareasCompletas(tareasCompletasActualizadas);
      } else {

        const tareasActualizadas = tareas.filter((tareaState) => tareaState.id !== id);
        setTareas(tareasActualizadas);
      }

    }, 300);
  };


  const handleClickCompletarTarea = () => {
    setAnimar(true);

    setTimeout(() => {
      const tareaCompletada = tareas.find((tareaState) => tareaState.id === id);
      setTareasCompletas([...tareasCompletas, tareaCompletada]);

      const tareasActualizadas = tareas.filter((tareaState) => tareaState.id !== id);
      setTareas(tareasActualizadas);

    }, 300);
  };

  return (
    <div
      className={` mx-auto mb-5 flex justify-between items-center transition-all duration-500 ${animar ? "relative translate-x-72 " : ""} `}
    >

      <p className='text-xl text-gray-800 font-semibold'>{nombre}</p>

      <div className="flex gap-3">

        {
          listarCompletados
            ?
            <>
            </>
            :
            <>
              <img
                src={IconoCheck}
                alt="icono de completar"
                className='cursor-pointer'
                onClick={handleClickCompletarTarea}
              />
              <img
                src={IconoEdit}
                alt="icono de editar"
                className='cursor-pointer'
                onClick={() => setTareaEditar(tarea)}
              />
            </>
        }

        <img
          src={IconoDelete}
          alt="icono de eliminar"
          className='cursor-pointer'
          onClick={handleClickEliminarTarea}
        />
      </div>


    </div>
  )
}

export default Tarea