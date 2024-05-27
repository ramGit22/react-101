import React, { useState } from 'react'

const Terve = () => {
  const [color, setColor] = useState('red')

  const handleChange = (e) => {
    setColor(e.target.value)
  }
  return (
    <>
      <select value={color} onChange={handleChange}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>

      <div
        style={{ backgroundColor: color, height: '50px', width: '50px' }}
      ></div>
    </>
  )
}

export default Terve
