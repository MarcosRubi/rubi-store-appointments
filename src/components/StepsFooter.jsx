/* eslint-disable no-undef */
/* eslint-disable react/jsx-closing-tag-location */
import { useDataUser, useDateSelected, useHourSelected, useSelectedServices, useStepActive } from '../store/useServices'
import { validateStepOne, validateStepThree, validateStepTwo } from '../validations/steps'

const IconArrow = () => {
  return <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><polyline points='9 18 15 12 9 6' /></svg>
}

const IconPlus = () => {
  return <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><line x1='12' y1='5' x2='12' y2='19' /><line x1='5' y1='12' x2='19' y2='12' /></svg>
}
function StepsFooter () {
  const { stepActive, setStepActive } = useStepActive((state) => state)
  const { selectedServices } = useSelectedServices(state => state)
  const { dateSelected } = useDateSelected(state => state)
  const { hourSelected } = useHourSelected(state => state)
  const { dataUser } = useDataUser(state => state)

  const handleOnClickNext = () => {
    if ((stepActive + 1) > 4 || (stepActive + 1) < 1) {
      return
    }

    if (stepActive === 1) {
      if (validateStepOne(selectedServices)) {
        setStepActive(stepActive + 1)
      }
    }

    if (stepActive === 2) {
      if (validateStepTwo(stepActive, dateSelected, hourSelected)) {
        setStepActive(stepActive + 1)
      }
    }
    if (stepActive === 3) {
      if (validateStepThree(dataUser)) {
        setStepActive(4)
      }
    }
  }

  const handleOnClickGoBack = (option) => {
    if ((stepActive + option) < 1) {
      return
    }

    setStepActive(stepActive + option)
  }

  return (
    <footer className={`steps__footer flex items-center ${stepActive === 1 ? 'justify-end' : 'justify-between'}`}>
      {
                stepActive > 1 &&
                  <button className='btn btn-secondary flex items-center prev' onClick={() => { handleOnClickGoBack(-1) }}>
                    <IconArrow />
                    <span>Atrás</span>
                  </button>
            }

      {
                stepActive === 4
                  ? <button className='btn btn-primary flex items-center prev' onClick={() => { handleOnClickNext(-1) }}>
                    <span>Agendar cita</span>
                    <IconPlus />
                  </button>
                  : <button className='btn btn-primary flex items-center next' onClick={() => { handleOnClickNext(+1) }}>
                    <span>Siguiente</span>
                    <IconArrow />
                  </button>
            }

    </footer>
  )
}

export default StepsFooter
