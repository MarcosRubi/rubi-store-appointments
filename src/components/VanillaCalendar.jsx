import { useEffect, useRef, useState } from 'react'
import VC from 'vanilla-calendar-pro'
import 'vanilla-calendar-pro/build/vanilla-calendar.min.css'
import { useDateSelected, useHourSelected } from '../store/useServices'

function VanillaCalendar () {
  const { dateSelected, setDateSelected } = useDateSelected((state) => state)
  const { setHourSelected } = useHourSelected((state) => state)
  const today = new Date()
  const currentYear = today.getFullYear()
  const currentMonth = (today.getMonth() + 1).toString().padStart(2, '0')
  const ref = useRef(null)
  const [calendar, setCalendar] = useState(null)

  const options = {
    settings: {
      lang: 'es',
      range: {
        min: `${currentYear}-01-01`,
        max: `${currentYear}-12-31`,
        disablePast: true
      },
      selected: {
        year: currentYear,
        month: currentMonth - 1,
        dates: dateSelected
      },
      visibility: {
        themeDetect: 'html[data-theme]'
      },
      selection: {
        year: false
      }
    },
    actions: {
      clickDay (event, self) {
        setDateSelected(self.selectedDates)
        setHourSelected(null)
      }
    }
  }

  useEffect(() => {
    if (!ref.current) return
    setCalendar(new VC(ref.current, options))
  }, [])

  useEffect(() => {
    if (!calendar) return
    calendar.init()
  }, [calendar])

  return (
    <div ref={ref} />
  )
}

export default VanillaCalendar
