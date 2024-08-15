import React, { useEffect } from 'react'

const CountdownTimer = ({ initialTime, setInitialTime }) => {
  useEffect(() => {
    if (initialTime <= 0) return

    const timer = setTimeout(() => {
      setInitialTime(initialTime - 1)
    }, 1000)
    return () => clearTimeout(timer)
  }, [initialTime, setInitialTime])

  return <div>{initialTime <= 0 ? <h1>'Time is up!'</h1> : initialTime}</div>
}

export default CountdownTimer
