import * as Yup from 'yup'

export const taskSchema = Yup.object({
  name: Yup.string()
    .max(30, 'Too Long')
    .typeError('Must be a string')
    .required('Name is required'),
  lastname: Yup.string()
    .max(30, 'Too Long')
    .typeError('Must be a string')
    .required('Lastname is required'),
  email: Yup.string()
    .email('Invalid email')
    .typeError('Must be a string')
    .required('Email is required'),
  age: Yup.number()
    .integer('Must be an integer')
    .typeError('Must be a number')
    .required('Age is required'),
  phone: Yup.string()
    .matches(/^9\d{8}$/, 'Invalid phone number')
    .typeError('Must be a string')
    .required('Phone is required')
})

export const formInputs = [
  {
    name: 'name',
    type: 'text',
    placeholder: 'Name'
  },
  {
    name: 'lastname',
    type: 'text',
    placeholder: 'Lastame'
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'Email'
  },
  {
    name: 'age',
    type: 'number',
    placeholder: 'Age'
  },
  {
    name: 'phone',
    type: 'text',
    placeholder: 'Phone'
  }
]
