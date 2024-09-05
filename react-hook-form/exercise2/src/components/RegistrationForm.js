import React from 'react'
import { useForm } from 'react-hook-form'

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const validateUsername = async (username) => {
    const response = await fetch(
      `http://localhost:5000/users?username=${username}`
    )
    const data = await response.json()
    return data.length === 0 || 'Username is already taken'
  }

  const onSubmit = async (data) => {
    console.log('Form submitted', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Username</label>
        <input
          {...register('username', {
            required: 'Username is required',
            validate: validateUsername,
          })}
        />
        {errors.username && <p>{errors.username.message}</p>}
      </div>

      <div>
        <label>Email</label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <button type="submit">Register</button>
    </form>
  )
}

export default RegistrationForm
