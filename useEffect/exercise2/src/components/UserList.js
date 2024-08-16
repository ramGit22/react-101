import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UserList = () => {
  const [fetchedUsers, setFetchedUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        console.log('response', response)
        setFetchedUsers(response.data)
        setLoading(false)
      })
      .catch(() => {
        setError('Failed to fetch users')
        setLoading(false)
      })
  }, [])

  return (
    <div>
      {loading ? <p>Loading...</p> : null}
      {error ? <div>{error} </div> : null}
      {fetchedUsers.map((user) => (
        <ul key={user.id}>{user.username}</ul>
      ))}
    </div>
  )
}

export default UserList
