import { useState, useEffect } from 'react'
import { BsFillMoonStarsFill } from "react-icons/bs"
import { LuSunMedium } from 'react-icons/lu'

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
        className="h-6 w-6 flex items-center justify-center rounded-sm hover:text-gray-800" 
        aria-label="switch theme mode"
    >
        { 
            dark ? <BsFillMoonStarsFill /> : <LuSunMedium />
        }
    </button>
  )
}

export default ThemeMode