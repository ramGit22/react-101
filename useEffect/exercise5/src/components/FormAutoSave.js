import React, { useState, useEffect } from 'react'

const FormAutoSave = () => {
  const loadSavedData = () => {
    const savedFormData = localStorage.getItem('formData')
    return savedFormData
      ? JSON.parse(savedFormData)
      : { name: '', email: '', message: '' }
  }

  const [formData, setFormData] = useState(loadSavedData)

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData))
  }, [formData])

  const handleChange = (e) => {
    const { name, value } = e.target
    console.log(e.target)
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <div>
      <form>
        <div>
          <label>
            Name:{' '}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:{' '}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Message:{' '}
            <input
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
        </div>
      </form>
    </div>
  )
}

export default FormAutoSave
