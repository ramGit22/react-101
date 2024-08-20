import React, { useState, useEffect } from 'react'
import './DarkModeToggle.css'

const DarkModeToggle = () => {
  const handleSavedTheme = () => {
    return localStorage.getItem('theme') || 'light'
  }
  const [theme, setTheme] = useState(handleSavedTheme)

  useEffect(() => {
    document.body.className = theme

    localStorage.setItem('theme', theme)
  }, [theme])

  const handleSwitch = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }
  return (
    <div>
      <button onClick={handleSwitch}>
        {' '}
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  )
}

export default DarkModeToggle
