/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import ServiceItem from './ServiceItem.jsx'
import services from '../data/services.json'
import InfoServices from './InfoServices.jsx'

function Step1 ({ stepActive }) {
  return (
    <>
      <div className={`steps__item ${stepActive === 1 ? 'active' : ''} `} id='step-1'>
        <h2 className='text-center'>Seleccione el/los servicio(s)</h2>
        <div className='flex flex-column'>
          {
						services.map(service => {
						  return <ServiceItem key={service.id} name={service.name} id={service.id} />
						})
					}
        </div>
        <InfoServices />
      </div>
    </>

  )
}

export default Step1
