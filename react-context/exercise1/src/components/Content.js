import { ThemeContext } from './ThemeProvider'
import { useContext } from 'react'

const Content = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
    </div>
  )
}

export default Content
