import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetail = () => {
  const { userId } = useParams()
  const users = [
    { id: 1, name: 'User One', details: 'Details about User One' },
    { id: 2, name: 'User Two', details: 'Details about User Two' },
    { id: 3, name: 'User Three', details: 'Details about User Three' },
  ]

  const user = users.find((user) => user.id === parseInt(userId))

  if (!user) {
    return <div>User not found</div>
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.details}</p>
    </div>
  )
}

export default UserDetail
