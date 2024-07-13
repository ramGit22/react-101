import React from 'react'
import ViewProfile from './ViewProfile'
import EditProfile from './EditProfile'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

const UserProfile = () => {
  return (
    <div>
      <Link to="view">View Profile</Link>
      <Link to="edit">Edit Profile</Link>
      <Routes>
        <Route path="view" element={<ViewProfile />} />
        <Route path="edit" element={<EditProfile />} />
      </Routes>
    </div>
  )
}

export default UserProfile
