import { useDataUser, useDateSelected, useHourSelected, useSelectedServices, useStepActive } from '../store/useServices'
import { validateStepOne, validateStepThree, validateStepTwo } from '../validations/steps.js'

function StepsButtons () {
  const { setStepActive, stepActive } = useStepActive((state) => state)
  const { selectedServices } = useSelectedServices(state => state)
  const { dateSelected } = useDateSelected(state => state)
  const { hourSelected } = useHourSelected(state => state)
  const { dataUser } = useDataUser((state) => state)

  const HandleOnClickValidateStepOne = () => {
    if (validateStepOne(selectedServices)) {
      setStepActive(2)
    }
  }
  const HandleOnClickValidateStepTwo = () => {
    if (validateStepTwo(stepActive, dateSelected, hourSelected)) {
      setStepActive(3)
    }
  }
  const HandleOnClickValidateStepThree = () => {
    if (validateStepThree(dataUser)) {
      setStepActive(4)
    }
  }

  return (
    <div className='steps__buttons flex items-center'>
      <button className={`${stepActive === 1 ? 'active' : ''}`} onClick={() => { setStepActive(1) }}>1</button>
      <button className={`${stepActive === 2 ? 'active' : ''}`} onClick={() => { HandleOnClickValidateStepOne() }}>2</button>
      <button
        className={`
        ${stepActive === 3
          ? 'active'
          : ''
        } 
        ${(validateStepOne(selectedServices, true) && validateStepTwo(stepActive, dateSelected, hourSelected, true)) || (stepActive === 2)
          ? ''
          : 'not-allowed'
        }`}
        onClick={
          (validateStepOne(selectedServices, true) && validateStepTwo(stepActive, dateSelected, hourSelected, true)) || (stepActive === 2)
            ? () => { HandleOnClickValidateStepTwo() }
            : null
}
      >
        3
      </button>
      <button
        className={`
        ${stepActive === 4
          ? 'active'
          : ''
        } 
        ${
          (validateStepOne(selectedServices, true) && validateStepTwo(stepActive, dateSelected, hourSelected, true) && validateStepThree(dataUser, true)) || (stepActive === 3)
          ? ''
          : 'not-allowed'
        }`}
        onClick={
          (validateStepOne(selectedServices, true) && validateStepTwo(stepActive, dateSelected, hourSelected, true) && validateStepThree(dataUser, true)) || (stepActive === 3)
            ? () => { HandleOnClickValidateStepThree() }
            : null
}
      >
        4
      </button>
    </div>
  )
}

export default StepsButtons
