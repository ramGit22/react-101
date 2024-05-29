import React, { useEffect, useState } from 'react'

const PostList = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data)
        setLoading(false)
      })
  }, [])

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(searchTerm.toLowerCase())
  })

  if (loading) {
    return <p>Loading...</p>
  }
  return (
    <div>
      <input value={searchTerm} onChange={handleChange} />
      {filteredPosts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  )
}

export default PostList
