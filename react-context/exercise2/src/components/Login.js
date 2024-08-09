import React, { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from './AuthProvider'

const Login = () => {
  const { login, logout, user, isAuthenticated } = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    login(username, password)
  }

  return (
    <div>
      {!isAuthenticated ? (
        <div>
          <form onSubmit={handleLogin}>
            username:
            <input type="text" onChange={(e) => setUsername(e.target.value)} />
            <input type="text" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">submit</button>
          </form>
        </div>
      ) : (
        <div>
          {user.username} logged in
          <button type="submit" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </div>
  )
}

export default Login
