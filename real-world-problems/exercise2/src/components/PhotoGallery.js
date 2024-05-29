import React, { useState, useEffect } from 'react'

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  const photosPerPage = 10

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data)
        setLoading(false)
      })
  }, [])

  const indexOfLastPhoto = currentPage * photosPerPage
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto)

  const handleNext = () => {
    if (currentPage < Math.ceil(photos.length / photosPerPage)) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  if (loading) {
    return <p>Loading...</p>
  }

  console.log('photos', photos)
  return (
    <div>
      {currentPhotos.map((photo, index) => (
        <p key={index}>{photo.thumbnailUrl}</p>
      ))}
      <button
        onClick={handleNext}
        disabled={currentPage === Math.ceil(photos.length / photosPerPage)}
      >
        Next
      </button>
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </button>
    </div>
  )
}

export default PhotoGallery
