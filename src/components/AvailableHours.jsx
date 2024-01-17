import { useEffect } from 'react'
import { useHourSelected } from '../store/useServices'

function AvailableHours () {
  const { hourSelected, setHourSelected } = useHourSelected((state) => state)

  const resetButtons = () => {
    document.querySelectorAll('.available-hours .btn').forEach((button) => {
      button.classList.remove('btn-primary-selected')
      button.classList.add('btn-secondary')
    })
  }
  const handleOnClick = (e) => {
    // Elimina la clase 'btn-primary' y agrega 'btn-secondary' a todos los botones
    resetButtons()

    // Establece la hora seleccionada y actualiza la clase del botón clicado
    setHourSelected(e.target.textContent)
    setTimeout(() => {
      e.target.classList.remove('btn-secondary')
      e.target.classList.add('btn-primary-selected')
    }, 100)
  }

  useEffect(() => {
    resetButtons()
  }, [hourSelected === null])

  return (
    <div className='available-hours flex flex-column'>
      <button className='btn btn-primary-selected' onClick={(event) => handleOnClick(event)}>7:15 am - 9:00 am</button>
      <button className='btn btn-secondary' onClick={(event) => handleOnClick(event)}>7:15 am - 8:00 am</button>
      <button className='btn btn-secondary' onClick={(event) => handleOnClick(event)}>7:30 am - 9:00 am</button>
      <button className='btn btn-secondary' onClick={(event) => handleOnClick(event)}>7:45 am - 8:30 am</button>
      <button className='btn btn-secondary' onClick={(event) => handleOnClick(event)}>8:00 am - 8:15 am</button>
      <button className='btn btn-secondary' onClick={(event) => handleOnClick(event)}>8:15 am - 9:30 pm</button>
      <button className='btn btn-secondary' onClick={(event) => handleOnClick(event)}>9:30 am - 3:30 pm</button>
      <button className='btn btn-secondary' onClick={(event) => handleOnClick(event)}>10:45 am - 3:30 pm</button>
      <button className='btn btn-secondary' onClick={(event) => handleOnClick(event)}>11:00 am - 3:30 pm</button>
      <button className='btn btn-secondary' onClick={(event) => handleOnClick(event)}>12:00 pm - 3:30 pm</button>
      <button className='btn btn-secondary' onClick={(event) => handleOnClick(event)}>01:15 pm - 3:30 pm</button>
      <button className='btn btn-secondary' onClick={(event) => handleOnClick(event)}>02:30 pm - 3:30 pm</button>
      <button className='btn btn-secondary' onClick={(event) => handleOnClick(event)}>03:45 pm - 3:30 pm</button>
      <button className='btn btn-secondary' onClick={(event) => handleOnClick(event)}>04:00 pm - 3:30 pm</button>
      <button className='btn btn-secondary' onClick={(event) => handleOnClick(event)}>04:15 pm - 3:30 pm</button>
      <button className='btn btn-secondary' onClick={(event) => handleOnClick(event)}>05:30 pm - 3:30 pm</button>
      <button className='btn btn-secondary' onClick={(event) => handleOnClick(event)}>06:45 pm - 3:30 pm</button>
    </div>
  )
}

export default AvailableHours
