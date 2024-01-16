import { useStepActive } from '../store/useServices'

function StepsButtons () {
  const { stepActive } = useStepActive((state) => state)

  return (
    <div className='steps__buttons flex items-center'>
      <button className={`${stepActive === 1 ? 'active' : ''}`}>1</button>
      <button className={`${stepActive === 2 ? 'active' : ''}`}>2</button>
      <button
        className={`${stepActive === 3 ? 'active' : ''} ${stepActive < 2 ? 'not-allowed' : ''}`}
      >
        3
      </button>

      <button
        className={`${stepActive === 4 ? 'active' : ''} ${stepActive < 3 ? 'not-allowed' : ''}`}
      >
        4
      </button>

    </div>
  )
}

export default StepsButtons
