import { create } from 'zustand'

export const localStorageKeys = {
  selectedServices: 'services',
  stepActive: 'step',
  date: 'date',
  time: 'time',
  user: 'user',
  remember: 'remember'
}

function getStorageArray (key, defaultValue) {
  const storedValue = window.localStorage.getItem(key)
  return storedValue ? JSON.parse(storedValue) : defaultValue
}
const getStorageNumber = (key, defaultValue) => {
  const storedValue = window.localStorage.getItem(key)
  return storedValue ? parseInt(storedValue, 10) : defaultValue
}
const getStorageString = (key, defaultValue) => {
  const storedValue = window.localStorage.getItem(key)
  return storedValue || defaultValue
}

export const useStepActive = create((set) => ({
  stepActive: getStorageNumber(localStorageKeys.stepActive, 1),

  setStepActive: (optionSelected) => set((state) => {
    window.localStorage.setItem(localStorageKeys.stepActive, optionSelected)
    return { stepActive: optionSelected }
  })
}))

export const useDateSelected = create((set) => ({
  dateSelected: getStorageArray(localStorageKeys.date, []),

  setDateSelected: (optionSelected) => set((state) => {
    window.localStorage.setItem(localStorageKeys.date, JSON.stringify(optionSelected))
    return { dateSelected: optionSelected }
  })
}))

export const useHourSelected = create((set) => ({
  hourSelected: getStorageString(localStorageKeys.time, ''),

  setHourSelected: (optionSelected) => set((state) => {
    window.localStorage.setItem(localStorageKeys.time, optionSelected)
    return { hourSelected: optionSelected }
  })
}))

export const useDataUser = create((set) => ({
  dataUser: getStorageArray(localStorageKeys.user, []),
  rememberDataUser: getStorageString(localStorageKeys.remember, false),

  setDataUser: (newDataUser) => set((state) => {
    window.localStorage.setItem(localStorageKeys.user, JSON.stringify(newDataUser))
    return { dataUser: newDataUser }
  }),
  setRememberDataUser: (optionSelected) => set((state) => {
    window.localStorage.setItem(localStorageKeys.remember, JSON.stringify(optionSelected))
    return { rememberDataUser: optionSelected }
  })
}))

export const useSelectedServices = create((set) => ({
  selectedServices: getStorageArray(localStorageKeys.selectedServices, []),

  setSelectedServices: (selectedService) => set((state) => {
    const updateSelectedServices = state.selectedServices.includes(selectedService)
      ? state.selectedServices.filter(service => service !== selectedService)
      : [...state.selectedServices, selectedService]

    window.localStorage.setItem(localStorageKeys.selectedServices, JSON.stringify(updateSelectedServices))

    return { selectedServices: updateSelectedServices }
  })
}))
