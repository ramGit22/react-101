import React, { useEffect, useState } from 'react'

const TitleUpdater = () => {
  const [title, setTitle] = useState('')

  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <div>
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
        }}
      />
      <p>Current Title: {title}</p>
    </div>
  )
}

export default TitleUpdater
