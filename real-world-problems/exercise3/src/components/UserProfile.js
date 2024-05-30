import React, { useState } from 'react'

const UserProfile = () => {
  const initialUser = {
    name: 'Terve',
    email: 'terve@gmail.com',
    bio: 'terve terve',
  }
  const [user, setUser] = useState(initialUser)
  const [isEditing, setIsEditing] = useState(false)
  const [inputValues, setInputValues] = useState(initialUser)

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputValues({
      ...inputValues,
      [name]: value,
    })
  }

  const handleSave = () => {
    setUser(inputValues)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setInputValues(user) // Revert changes
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <div>
        <input name="name" value={inputValues.name} onChange={handleChange} />
        <input name="email" value={inputValues.email} onChange={handleChange} />
        <input name="bio" value={inputValues.bio} onChange={handleChange} />
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    )
  }

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Bio: {user.bio}</p>
      <button onClick={handleEdit}>Edit</button>
    </div>
  )
}

export default UserProfile
