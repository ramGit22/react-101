import React, { useState } from 'react'
import { useFormik } from 'formik'

function BasicForm() {
  const [submittedData, setSubmittedData] = useState(null)

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    onSubmit: (values) => {
      setSubmittedData(values)
    },
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <div>
          <h2>Submitted Data:</h2>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
        </div>
      )}
    </div>
  )
}

export default BasicForm
