import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import UserDetail from './components/UserDetail'

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/users/:userId" element={<UserDetail />} />
      </Routes>
    </Router>
  )
}

export default App
