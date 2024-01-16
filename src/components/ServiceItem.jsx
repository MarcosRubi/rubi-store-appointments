import { useSelectedServices } from '../store/useServices'

function ServiceItem ({ id, name }) {
  const { selectedServices, setSelectedServices } = useSelectedServices(state => state)
  return (
    <label className='flex items-center'>
      <span>{name} </span>
      <input
        type='checkbox' onChange={() => setSelectedServices(id)}
        checked={selectedServices.includes(id)}
      />
    </label>

  )
}

export default ServiceItem
