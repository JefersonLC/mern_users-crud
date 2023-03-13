import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useLoaderData } from 'react-router-dom'
import { useState } from 'react'
import Alert from './components/Alert'
import { formInputs, taskSchema } from './utils/form'

export default function User () {
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const user = useLoaderData()

  const modifyTask = (id, data) => {
    fetch('http://localhost:3000/' + id, {
      method: 'PATCH',
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
          setSuccess('Changes made successfully!')
        }
      })
  }

  return (
    <div className='form-container'>
      <Formik
        validationSchema={taskSchema}
        initialValues={{
          name: user.name,
          lastname: user.lastname,
          email: user.email,
          age: user.age,
          phone: user.phone.replace('+51', '').trim()
        }}
        onSubmit={(values) => {
          modifyTask(user.id, values)
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
            Save changes
          </button>
        </Form>
      </Formik>
      {error && <Alert type='error'>{error}</Alert>}
      {success && <Alert type='success'>{success}</Alert>}
    </div>
  )
}
