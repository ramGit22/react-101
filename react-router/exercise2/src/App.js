import UserProfile from './components/UserProfile'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/user/*" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
