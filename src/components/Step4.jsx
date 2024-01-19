/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */

import { useDataUser, useSelectedServices, useDateSelected, useHourSelected } from '../store/useServices'
import services from '../data/services.json'

function Step4 ({ stepActive }) {
  const { selectedServices } = useSelectedServices(state => state)
  const { dateSelected } = useDateSelected(state => state)
  const { hourSelected } = useHourSelected(state => state)
  const { dataUser } = useDataUser(state => state)

  const getSelectedServices = (services, selectedServices) => {
    return services.filter(service => selectedServices.includes(service.id))
  }

  const servicesToShow = getSelectedServices(services, selectedServices)

  const formatDate = (date) => {
    const dateArr = date[0].split('-')

    const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']

    return `${dateArr[2]} de ${months[parseInt(dateArr[1]) - 1]} del ${dateArr[0]}`
  }

  formatDate(dateSelected)

  const capitalizeString = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
    <>
      <div className={`steps__item ${stepActive === 4 ? 'active' : ''} `} id='step-4'>
        <h2 className='text-center'>Confirme la cita</h2>
        <div className='info flex flex-column'>
          <div className='info__appointment '>
            <h2>Cita</h2>
            {servicesToShow.length > 1
              ? <p>Servicios</p>
              : <p>Servicio</p>}
            <ul>
              {servicesToShow.map((service) => (
                <li key={service.id}>
                  <span className='font-bold'>{capitalizeString(service.name)} </span>
                </li>
              ))}
              <p />
            </ul>

            <p>Fecha: <strong>{formatDate(dateSelected)}</strong></p>
            <p>Hora: <strong>{hourSelected}</strong></p>
          </div>
          <div className='info__client'>
            <h2>Cliente</h2>
            <p className='capitalize'>Cliente: <strong>{dataUser[0].name}</strong> </p>
            {dataUser[0].phone.trim().length > 0
              ? <p>Teléfono: <strong> {dataUser[0].phone}</strong> </p>
              : <p>Correo: <strong> {dataUser[0].email}</strong> </p>}
            {dataUser[0].note.trim().length > 0 &&
              <p>Notas: <strong> {dataUser[0].note}</strong> </p>}
          </div>
        </div>
      </div>
    </>

  )
}

export default Step4
