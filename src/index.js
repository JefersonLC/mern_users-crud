const express = require('express')
const cors = require('cors')
const UserController = require('./controllers/user.controller')
const { validator } = require('./middlewares/validator')
const { addUserSchema, updateUserSchema } = require('./db/schemas/user.schema')
const { EmptyResultError } = require('sequelize')
const { ValidationError } = require('yup')

const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('Server on port ' + PORT)
})

app.use(cors())
app.use(express.json())

// ROUTES

app
  .route('/')
  .get(UserController.find)
  .post(validator({ schema: addUserSchema }), UserController.create)

app
  .route('/:id')
  .get(UserController.findOne)
  .patch(validator({ schema: updateUserSchema }), UserController.update)
  .delete(UserController.remove)

// ERROR HANDLING
app.use((error, req, res, next) => {
  console.log(error)
  next(error)
})

app.use((error, req, res, next) => {
  if (error instanceof ValidationError) {
    return res.status(400).json({
      error: 'Bad Request',
      status: 400,
      message: error.message,
      info: error.errors,
      inner: error.inner.map((e) => ({
        path: e.path,
        errors: e.errors
      }))
    })
  }
  next(error)
})

app.use((error, req, res, next) => {
  if (error instanceof EmptyResultError) {
    return res.status(404).json({
      error: error.message,
      status: 404,
      message: "The user ID you entered doesn't exist"
    })
  }
  next(error)
})

app.use((error, req, res, next) => {
  res.json(error)
})
