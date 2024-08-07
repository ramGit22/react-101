// src/App.js
import React from 'react'
import Content from './components/Content'
import { ThemeProvider } from './components/ThemeContext'
import './App.css'

const App = () => {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  )
}

export default App
