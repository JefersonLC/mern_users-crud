const Yup = require('yup')

const name = Yup
  .string()
  .max(30, 'Too Long')
  .typeError('Must be a string')

const lastname = Yup
  .string()
  .max(30, 'Too Long')
  .typeError('Must be a string')

const age = Yup
  .number()
  .integer('Must be an integer')
  .typeError('Must be a number')

const email = Yup
  .string()
  .email('Invalid email')
  .typeError('Must be a string')

const phone = Yup
  .string()
  .matches(/^9\d{8}/, 'Invalid phone number')
  .typeError('Must be a string')

// SCHEMAS
const addUserSchema = Yup.object({
  name: name.required('Name is required'),
  lastname: lastname.required('Lastname is required'),
  age: age.required('Age is required'),
  email: email.required('Email is required'),
  phone: phone.required('Phone is required')
})

const updateUserSchema = Yup.object({
  name,
  lastname,
  age,
  email,
  phone
})

module.exports = { addUserSchema, updateUserSchema }
