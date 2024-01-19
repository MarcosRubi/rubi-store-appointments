/* eslint-disable no-undef */
const showAlert = (message) => {
  alert(message)
}

export const validateStepOne = (selectedServices, load = false) => {
  if (selectedServices.length <= 0) {
    if (load) return false
    showAlert('Seleccione al menos un servicio')
    return false
  }
  return true
}

export const validateStepTwo = (stepActive, dateSelected, hourSelected, load = false) => {
  if (dateSelected.length === 0) {
    if (load) return false
    showAlert('Seleccione una fecha')
    return false
  }
  if (hourSelected === null) {
    if (load) return false
    showAlert('Seleccione una hora')
    return false
  }
  return true
}

export const validateStepThree = (data, load = false) => {
  const user = data[0]
  const isNullOrEmpty = (value) => value.trim().length === 0

  const validateEmail = (email) => {
    const regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return regexCorreo.test(email)
  }

  if (isNullOrEmpty(user.name)) {
    if (load) return false
    showAlert('El nombre es obligatorio')
    return false
  }

  const isPhoneNullOrEmpty = isNullOrEmpty(user.phone)
  const isEmailNullOrEmpty = isNullOrEmpty(user.email)

  if (isPhoneNullOrEmpty && isEmailNullOrEmpty) {
    if (load) return false
    showAlert('Ingrese un número de teléfono o un correo para poder contactarlo')
    return false
  }

  if (user.email.trim().length > 0 && !validateEmail(user.email)) {
    if (load) return false
    showAlert('El correo no es válido')
    return false
  }

  if (!isPhoneNullOrEmpty && user.phone.trim().length < 8) {
    if (load) return false
    showAlert('El número de teléfono no es válido')
    return false
  }

  return true
}
