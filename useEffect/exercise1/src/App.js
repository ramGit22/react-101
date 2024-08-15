import { useState } from 'react'
import './App.css'
import CountdownTimer from './components/CountdownTimer'

function App() {
  const [initialTime, setInitialTime] = useState('10')
  return (
    <div>
      <CountdownTimer
        initialTime={initialTime}
        setInitialTime={setInitialTime}
      />
    </div>
  )
}

export default App
