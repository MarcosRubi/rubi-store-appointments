import { useSelectedServices } from '../store/useServices'
import services from '../data/services.json'

function InfoServices () {
  const { selectedServices } = useSelectedServices(state => state)

  const getSelectedServices = (services, selectedServices) => {
    return services.filter(service => selectedServices.includes(service.id))
  }

  const servicesToShow = getSelectedServices(services, selectedServices)

  return selectedServices.length > 0 && (
    <div className='info-services'>
      <h2 className='text-center'>Detalles de los servicios seleccionados</h2>
      <ul>
        {servicesToShow.map((service) => (
          <li key={service.id}>
            <p>{service.name}</p>
            <p>
              [Duración <span className='font-bold'>{service.duration} </span>
              minutos] [Precio{' '}
              <span className='font-bold'>${service.price.toFixed(2)}</span> ]
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default InfoServices
