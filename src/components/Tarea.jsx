import IconoCheck from '../img/check.svg';
import IconoEdit from '../img/edit.svg';
import IconoDelete from '../img/delete.svg';

const Tarea = ({ tarea, setTareaEditar }) => {
  const { nombre } = tarea;

  return (
    <div className="w-11/12 mx-auto mb-5 flex justify-between items-center">

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
        />
      </div>


    </div>
  )
}

export default Tarea