import React from 'react'
import { Navigate } from 'react-router-dom'

const Login = ({ login, isAuthenticated }) => {
  console.log('login', isAuthenticated)
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />
  }

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login
