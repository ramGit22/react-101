import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
      <Link to="/users/1">User 1</Link>
      <Link to="/users/2">User 2</Link>
      <Link to="/users/3">User 3</Link>
    </nav>
  )
}

export default Navigation
