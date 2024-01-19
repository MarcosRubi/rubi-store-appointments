import { useEffect, useState } from 'react'
import { useDataUser } from '../store/useServices'

function Step3 ({ stepActive }) {
  const IconUser = () => {
    return (
      <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 1024 1024' height='1em' width='1em' aria-hidden='true'>
        <path d='M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z' />
      </svg>
    )
  }
  const IconPhone = () => {
    return (
      <svg width='1em' height='1em' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' /></svg>
    )
  }
  const IconEmail = () => {
    return (
      <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 1024 1024' height='1em' width='1em' aria-hidden='true'>
        <path d='M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z' />
      </svg>
    )
  }
  const IconComment = () => {
    return (
      <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 24 24' height='1em' width='1em' aria-hidden='true'>
        <path d='M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.767L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-7.277L9 18.233V16H4V4h16v12z' />
      </svg>
    )
  }

  const [name, setname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [note, setNote] = useState('')
  const { setDataUser, rememberDataUser, setRememberDataUser } = useDataUser((state) => state)

  useEffect(() => {
    const storedData = window.localStorage.getItem('user')

    if (storedData) {
      const parsedData = JSON.parse(storedData)
      setname(parsedData[0].name || '')
      setEmail(parsedData[0].email || '')
      setPhone(parsedData[0].phone || '')
      setNote(parsedData[0].note || '')
    }
  }, [])

  useEffect(() => {
    setDataUser([
      {
        name,
        email,
        phone,
        note
      }
    ])
  }, [name, email, phone, note, setDataUser])

  return (
    <>
      <div className={`steps__item ${stepActive === 3 ? 'active' : ''} `} id='step-3'>
        <h2 className='text-center'>Ingrese su información</h2>
        <form action='#' method='post' aria-label='Formulario de información del cliente' className='m-auto'>
          <div className='input-group'>
            <input type='text' name='txtName' id='txtName' required='required' aria-required='true' onChange={(e) => setname(e.target.value)} value={name} />
            <label htmlFor='txtName' className='placeholder flex'>Nombre <sup>*</sup></label>
            <label htmlFor='txtName' className='placeholder-icon'>
              <IconUser />
            </label>
          </div>
          <div className='input-group'>
            <input type='text' name='txtPhone' id='txtPhone' required='required' aria-required='true' onChange={(e) => setPhone(e.target.value)} value={phone} />
            <label htmlFor='txtPhone' className='placeholder'>Teléfono</label>
            <label htmlFor='txtPhone' className='placeholder-icon'>
              <IconPhone />
            </label>
          </div>
          <div className='input-group'>
            <input type='email' name='txtEmail' id='txtEmail' required='required' aria-required='true' onChange={(e) => setEmail(e.target.value)} value={email} />
            <label htmlFor='txtEmail' className='placeholder'>Email</label>
            <label htmlFor='txtEmail' className='placeholder-icon'>
              <IconEmail />
            </label>
          </div>
          <div className='input-group'>
            <textarea name='txtMessage' id='txtMessage' cols='30' rows='5' required='required' aria-required='true' onChange={(e) => setNote(e.target.value)} value={note} /> <label htmlFor='txtMessage' className='placeholder'>Notas</label>
            <label htmlFor='txtMessage' className='placeholder-icon'>
              <IconComment />
            </label>
          </div>
          <div className='input-group remember'>
            <label htmlFor='remember'>
              <input type='checkbox' name='remember' id='remember' onChange={(e) => setRememberDataUser(e.target.checked)} checked={rememberDataUser} />
              <span> Recordar mis datos personales</span>
            </label>
          </div>
        </form>
      </div>
    </>

  )
}

export default Step3
