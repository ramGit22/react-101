import React, { useState } from 'react'
import validator from 'validator'

const RegistrationForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'name') {
      setName(value)
    } else if (name === 'email') {
      setEmail(value)
    } else if (name === 'password') {
      setPassword(value)
    }
  }

  const validateEmail = (email) => {
    return validator.isEmail(email)
  }

  const validatePassword = (password) => {
    return password.length >= 8
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    if (!validateEmail(email)) {
      newErrors.email = 'Email not valid'
    }
    if (!validatePassword(password)) {
      newErrors.password = 'Password must be at least 8 characters'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
    }
  }

  return (
    <div>
      {submitted ? (
        `${name} is logged in`
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input id="name" name="name" value={name} onChange={handleChange} />

          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}

          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  )
}

export default RegistrationForm
