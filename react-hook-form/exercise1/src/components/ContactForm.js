import React from 'react'
import { useForm } from 'react-hook-form'

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log('submitted', data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name:</label>
          <input {...register('name', { required: 'Name is required' })} />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div>
          <label>Email:</label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: 'Enter a valid email address',
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          <label>Message:</label>
          <input {...register('message')} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ContactForm
