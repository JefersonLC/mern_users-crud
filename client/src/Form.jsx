import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useState } from 'react'
import Alert from './components/Alert'
import { formInputs, taskSchema } from './utils/form'

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
        initialValues={{
          name: '',
          lastname: '',
          email: '',
          age: '',
          phone: ''
        }}
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
          <button className='btn btn-add' type='submit'>
            Add Task
          </button>
        </Form>
      </Formik>
      {error && <Alert type='error'>{error}</Alert>}
      {success && <Alert type='success'>{success}</Alert>}
    </div>
  )
}
