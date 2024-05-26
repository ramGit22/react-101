import { useState } from 'react'

const ColorChangingButton = () => {
  const [isRed, setIsRed] = useState(true)

  const background = { backgroundColor: isRed ? 'red' : 'green' }

  const changeColor = () => {
    setIsRed(!isRed)
  }

  return (
    <button style={background} onClick={changeColor}>
      Toggle color
    </button>
  )
}

export default ColorChangingButton
