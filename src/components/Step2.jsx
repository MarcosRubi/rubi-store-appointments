import VanillaCalendar from './VanillaCalendar'
import 'vanilla-calendar-pro/build/vanilla-calendar.min.css'
import AvailableHours from './AvailableHours'
import { useDateSelected } from '../store/useServices'

function Step2 ({ stepActive }) {
  const { dateSelected } = useDateSelected((state) => state)

  return (
    <>
      <div className={`steps__item ${stepActive === 2 ? 'active' : ''} `} id='step-2'>
        <h2 className='text-center'>Seleccione fecha y hora de cita</h2>
        <div className='content flex justify-around items-center'>
          <VanillaCalendar />
          {
                        dateSelected.length > 0 && <AvailableHours />
                    }
        </div>
      </div>
    </>

  )
}

export default Step2
