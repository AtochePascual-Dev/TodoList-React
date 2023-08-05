import IconoCheck from '../img/check.svg';
import IconoEdit from '../img/edit.svg';
import IconoDelete from '../img/delete.svg';
import { useState } from 'react';

const Tarea = ({ tarea, tareas, setTareas, setTareaEditar, }) => {
  const [animar, setAnimar] = useState(false)

  const { nombre, id } = tarea;

  const handleClickEliminarTarea = () => {
    setAnimar(true);

    setTimeout(() => {
      const tareasActualizadas = tareas.filter((tareaState) => tareaState.id !== id);
      setTareas(tareasActualizadas);

    }, 300);
  };

  return (
    <div className={`w-11/12 mx-auto mb-5 flex justify-between items-center transition-all duration-500 ${animar ? "relative translate-x-72 " : ""} `}>

      <p className='text-xl text-gray-800 font-semibold'>{nombre}</p>

      <div className="flex gap-3">
        <img
          src={IconoCheck}
          alt="icono de completar"
          className='cursor-pointer'
        />
        <img
          src={IconoEdit}
          alt="icono de editar"
          className='cursor-pointer'
          onClick={() => setTareaEditar(tarea)}
        />
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