import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import Alert from './components/Alert'
import Button from './components/Button'

const taskValues = {
  name: '',
  lastname: '',
  email: '',
  age: '',
  phone: ''
}

const taskSchema = Yup.object({
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

const formInputs = [
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

export default function AddForm () {
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const handleClick = (data) => {
    fetch('http://localhost:3000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 400) {
          setError(res.message)
        } else {
          setSuccess('Successfully registered user!')
        }
      })
  }

  return (
    <div className='form-container'>
      <Formik
        initialValues={taskValues}
        validationSchema={taskSchema}
        onSubmit={(values, { resetForm }) => {
          handleClick(values)
          resetForm()
        }}
      >
        <Form className='form'>
          {formInputs.map((input) => (
            <div className='form-group' key={input.name}>
              <Field
                className='input'
                name={input.name}
                type={input.type}
                placeholder={input.placeholder}
                onFocus={() => {
                  setError(null)
                  setSuccess(null)
                }}
              />
              <ErrorMessage name={input.name} component='span' />
            </div>
          ))}
          <Button className='btn btn-add' type='submit'>
            Add Task
          </Button>
        </Form>
      </Formik>
      {error && <Alert type='error'>{error}</Alert>}
      {success && <Alert type='success'>{success}</Alert>}
    </div>
  )
}
