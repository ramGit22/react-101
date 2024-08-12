import { useState, createContext } from 'react'

export const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [language, setlanguage] = useState('en')

  const switchLanguage = (lang) => {
    setlanguage(lang)
  }
  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
