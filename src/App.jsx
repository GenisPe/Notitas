import { useState } from 'react'

function App() {
  const [notas, setNotas] = useState([]); // Estado para almacenar las notas
  const [nota, setNota] = useState(''); // Estado para almacenar la nota actual
  const [busqueda, setBusqueda] = useState(''); // Estado para almacenar la búsqueda

  const manejorCambioNota = (event) => {
    setNota(event.target.value); // Actualiza el estado de la nota con el valor del input
  }
  const enterNota = (event) => {
    if (event.key === 'Enter' && nota.trim() !== '') {
      setNotas([...notas, nota]); // Agrega la nueva nota al estado de notas
      setNota(''); // Limpia el input de la nota
    }
  }
  const eliminarNota = (index) => {
    const nuevasNotas = notas.filter((_, i) => i !== index); // Filtra las notas para eliminar la nota en el índice dado
    setNotas(nuevasNotas); // Actualiza el estado de notas
  }
  return (
    <div>
      <div className='contenedorPrincipal'>
        <h1>Notitas</h1>
        <input id='InpText' type='text' placeholder='Escribe una nota y presiona Enter'
          value={nota} onChange={manejorCambioNota} onKeyDown={enterNota} />
          <ul className='listaNotas'>
            {notas.length === 0 ? (
              <li className='sinNotas'>No hay notas</li>
            ) : (
              notas.map((nota, index) => (
                <li key={index} className='nota' onMouseEnter={() => setBusqueda(index)} onMouseLeave={() => setBusqueda(null)}>
                  {nota}
                  {busqueda === index && (
                    <button className='eliminarNota' onClick={() => eliminarNota(index)}>X</button>
                  )}
                </li>
              ))
            )}            

          </ul>
          <div className='contadorNotas'>
            {notas.length === 0 ? 'no hay tareas' : notas.length === 1 ? '1 tarea pendiente' : `${notas.length} tareas pendientes`}
          </div>

      </div>

    </div>
  )
}

export default App
