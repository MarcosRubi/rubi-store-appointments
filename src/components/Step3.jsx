function Step3 ({ stepActive }) {
  return (
    <>
      <div className={`steps__item ${stepActive === 3 ? 'active' : ''} `} id='step-3'>
        <h2 className='text-center'>Ingrese su información</h2>
      </div>
    </>

  )
}

export default Step3
