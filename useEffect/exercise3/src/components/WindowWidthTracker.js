import React, { useState, useEffect } from 'react'

const WindowWidthTracker = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const updateWidth = () => {
      console.log('clicked')
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', updateWidth)

    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [])
  return <div>{windowWidth}</div>
}

export default WindowWidthTracker
