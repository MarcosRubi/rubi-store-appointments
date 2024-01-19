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
  if (data[0].name.trim().length === 0) {
    alert('El nombre es obligatorio')
    return false
  }
  if (data[0].phone.trim().length === 0 && data[0].email.length === 0) {
    alert('Ingrese un número de teléfono o un correo para poder contactarlo')
    return false
  }
  return true
}
