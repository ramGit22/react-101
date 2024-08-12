import './App.css'
import LanguageSwitcher from './components/LanguageSwitcher'
import Content from './components/Content'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <LanguageSwitcher />
      <Content />
    </LanguageProvider>
  )
}

export default App
