import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Home from './components/Home'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = () => {
    setIsAuthenticated(true)
  }

  const logout = () => {
    setIsAuthenticated(false)
  }

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
        {isAuthenticated && <button onClick={logout}>Logout</button>}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login login={login} isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              element={<Dashboard />}
            />
          }
        />
      </Routes>
    </Router>
  )
}

export default App
