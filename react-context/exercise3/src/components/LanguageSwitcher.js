import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

const LanguageSwitcher = () => {
  const { language, switchLanguage } = useContext(LanguageContext)

  return (
    <div>
      <select value={language} onChange={(e) => switchLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
      </select>
    </div>
  )
}

export default LanguageSwitcher
