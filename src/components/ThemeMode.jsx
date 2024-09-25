import { useState, useEffect } from 'react'
import { LuSunMedium } from 'react-icons/lu'
import { IoMoonOutline } from "react-icons/io5"

const ThemeMode = () => {
  const [dark, setDark] = useState(false)

  const hook = () => {
    const preference = localStorage.getItem('darkMode') === 'true'
    setDark(preference)
    if (preference) document.body.classList.add('dark')
  }
  useEffect(hook, [])

  const handleMode = () => {
    setDark(!dark)
    document.body.classList.toggle('dark')
    localStorage.setItem('darkMode', !dark)
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