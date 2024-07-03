// // src/SignupForm.js
// import React from 'react'
// import { useFormik } from 'formik'
// import * as Yup from 'yup'
// import { useTranslation } from 'react-i18next'
// import i18n from './i18n'

// const SignupForm = () => {
//   const { t } = useTranslation()

//   const validationSchema = Yup.object({
//     username: Yup.string().required(t('required')),
//     email: Yup.string().email(t('invalidEmail')).required(t('required')),
//     password: Yup.string().min(6, t('minPassword')).required(t('required')),
//   })

//   const formik = useFormik({
//     initialValues: {
//       username: '',
//       email: '',
//       password: '',
//     },
//     validationSchema,
//     onSubmit: (values) => {
//       console.log('Form data', values)
//     },
//   })

//   const changeLanguage = (lng) => {
//     console.log('i18', i18n)
//     i18n.changeLanguage(lng)
//   }

//   return (
//     <div>
//       <button onClick={() => changeLanguage('en')}>English</button>
//       <button onClick={() => changeLanguage('es')}>Español</button>

//       <form onSubmit={formik.handleSubmit}>
//         <div>
//           <label>{t('username')}</label>
//           <input
//             type="text"
//             name="username"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.username}
//           />
//           {formik.touched.username && formik.errors.username ? (
//             <div>{formik.errors.username}</div>
//           ) : null}
//         </div>

//         <div>
//           <label>{t('email')}</label>
//           <input
//             type="email"
//             name="email"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.email}
//           />
//           {formik.touched.email && formik.errors.email ? (
//             <div>{formik.errors.email}</div>
//           ) : null}
//         </div>

//         <div>
//           <label>{t('password')}</label>
//           <input
//             type="password"
//             name="password"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.password}
//           />
//           {formik.touched.password && formik.errors.password ? (
//             <div>{formik.errors.password}</div>
//           ) : null}
//         </div>

//         <button type="submit">{t('signup')}</button>
//       </form>
//     </div>
//   )
// }

// export default SignupForm

import { useFormik } from 'formik'
import i18n from './i18n'
import { useTranslation } from 'react-i18next'
import * as Yup from 'yup'

const SignupForm = () => {
  const { t } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  const SignUpSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(70, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  })

  const formik = useFormik({
    initialValues: { username: '', email: '' },
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <div>
      <button onClick={() => changeLanguage('es')}>Español</button>
      <button onClick={() => changeLanguage('en')}>English</button>

      <form onSubmit={formik.handleSubmit}>
        <label>{t('username')}</label>
        <input
          type="text"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        {formik.touched.username && formik.errors.username ? (
          <div>{formik.errors.username}</div>
        ) : null}

        <label>{t('email')}</label>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <button type="text">{t('signUp')} </button>
      </form>
    </div>
  )
}

export default SignupForm
