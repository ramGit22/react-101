// // src/i18n.js
// import i18n from 'i18next'
// import { initReactI18next } from 'react-i18next'

// i18n.use(initReactI18next).init({
//   resources: {
//     en: {
//       translation: {
//         username: 'Username',
//         password: 'Password',
//         email: 'Email',
//         signup: 'Sign Up',
//         required: 'This field is required',
//         invalidEmail: 'Invalid email address',
//         minPassword: 'Password must be at least 6 characters',
//       },
//     },
//     es: {
//       translation: {
//         username: 'Nombre de usuario',
//         password: 'Contraseña',
//         email: 'Correo electrónico',
//         signup: 'Regístrate',
//         required: 'Este campo es obligatorio',
//         invalidEmail: 'Dirección de correo electrónico no válida',
//         minPassword: 'La contraseña debe tener al menos 6 caracteres',
//       },
//     },
//   },
//   lng: 'en', // default language
//   fallbackLng: 'en',
//   interpolation: {
//     escapeValue: false,
//   },
// })

// export default i18n
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        username: 'Username',
        email: 'Email',
        signUp: 'SignUp',
      },
    },
    es: {
      translation: {
        username: 'Nombre de usuario',
        email: 'terve',
        signUp: 'habre',
      },
    },
  },
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
