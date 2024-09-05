import React from 'react'
import { useForm } from 'react-hook-form'

const ConditionalForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const watchCheckbox = watch('checkbox', false)
  console.log(watchCheckbox)

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>FullName:</label>
        <input
          type="text"
          {...register('fullname', { required: 'Full name is required' })}
        />
        {errors.fullname && <p>{errors.fullname.message}</p>}
        <input type="checkbox" {...register('checkbox')} />
        {watchCheckbox && (
          <div>
            <label>Email:</label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
        )}
        <input type="submit" />
      </form>
    </div>
  )
}

export default ConditionalForm
