/* eslint-disable no-undef */
/* eslint-disable react/jsx-closing-tag-location */
import { useDataUser, useDateSelected, useHourSelected, useSelectedServices, useStepActive, localStorageKeys } from '../store/useServices'
import { validateStepOne, validateStepThree, validateStepTwo } from '../validations/steps'

const IconArrow = () => {
  return <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><polyline points='9 18 15 12 9 6' /></svg>
}

const IconCheck = () => {
  return <svg width='1em' height='1em' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><polyline points='9 11 12 14 22 4' /><path d='M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11' /></svg>
}
function StepsFooter () {
  const { stepActive, setStepActive } = useStepActive((state) => state)
  const { selectedServices } = useSelectedServices(state => state)
  const { dateSelected } = useDateSelected(state => state)
  const { hourSelected } = useHourSelected(state => state)
  const { dataUser, rememberDataUser } = useDataUser(state => state)

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

  const handleOnClickConfirm = () => {
    Object.values(localStorageKeys).forEach(item => {
      if (!(rememberDataUser && (item === 'user' || item === 'remember'))) {
        localStorage.removeItem(item)
      }
    })
    alert('Cita confirmada')
    location.reload()
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
                  ? <button className='btn btn-primary flex items-center confirm' onClick={() => { handleOnClickConfirm() }}>
                    <span>Confirmar</span>
                    <IconCheck />
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
