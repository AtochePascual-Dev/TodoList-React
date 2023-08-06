import { useEffect, useState } from "react"

const Select = ({ setlistarCompletados }) => {

  const fn = (event) => {
    const valor = Boolean(event.target.value);
    setlistarCompletados(valor);
  };

  return (
    <select
      className="w-full mx-auto p-1 text-center rounded-lg font-bold outline-none text-gray-600 bg-gray-100"
      onChange={fn}
    >
      <option value="">Todos</option>
      <option value="completados">Completados</option>
    </select>
  )
}

export default Select