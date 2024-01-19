/* eslint-disable no-undef */
export const validateStepOne = (selectedServices) => {
  if (selectedServices.length <= 0) {
    alert('Seleccione al menos un servicio')
    return false
  }
  return true
}

export const validateStepTwo = (stepActive, dateSelected, hourSelected) => {
  if (stepActive > 1 && dateSelected.length === 0) {
    alert('Seleccione una fecha')
    return false
  }
  if (stepActive > 1 && hourSelected === null) {
    alert('Seleccione una hora')
    return false
  }
  return true
}
export const validateStepThree = (data) => {
  const user = data[0]

  if (user.name.trim().length === 0) {
    alert('El nombre es obligatorio')
    return false
  }
  if (user.phone.trim().length === 0 && user.email.trim().length === 0) {
    alert('Ingrese un número de teléfono o un correo para poder contactarlo')
    return false
  }
  if (user.email.trim().length > 0) {
    const regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if (!regexCorreo.test(user.email)) {
      alert('El correo no es válido')
      return false
    }
  }
  if (user.phone.trim().length > 0 && user.phone.trim().length < 8) {
    alert('El número de teléfono no es válido')
    return false
  }
  return true
}
