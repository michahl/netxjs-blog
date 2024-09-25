import { useState, useEffect } from 'react'
import { LuSunMedium } from 'react-icons/lu'
import { IoMoonOutline } from "react-icons/io5"

const ThemeMode = () => {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const preference = localStorage.getItem('darkMode') === 'true'
    setDark(preference)

    if (preference) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const handleMode = () => {
    setDark(prevMode => {
      const newMode = !prevMode

      localStorage.setItem('darkMode', newMode)

      if(newMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      return newMode
    })
  }
  return (
    <button 
        onClick={handleMode}
        className="h-6 w-6 flex items-center justify-center rounded-sm hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" 
        aria-label="switch theme mode"
    >
        { 
            dark ? <IoMoonOutline /> : <LuSunMedium />
        }
    </button>
  )
}

export default ThemeMode