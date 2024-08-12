import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import en from '../languages/en.json'
import es from '../languages/es.json'

const Content = () => {
  const { language } = useContext(LanguageContext)
  const translations = language === 'en' ? en : es

  return (
    <div>
      <h1>{translations.greeting}</h1>
      <p>{translations.description}</p>
    </div>
  )
}

export default Content
