const express = require('express');
const cors = require('cors');
const UserController = require('./controllers/user.controller');
const { userSchema } = require('./db/schemas/user.schema');

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server on port ' + PORT);
});

app.use(cors())
app.use(express.json());

// ROUTES
app.get('/', UserController.find);

app.post(
  '/',
  async (req, res, next) => {
    try {
      const data = req.body;
      await userSchema.validate(data, { abortEarly: false });
      next();
    } catch (error) {
      next(error);
    }
  },
  UserController.create
);

app.use((error, req, res, next) => {
  console.log(error);
  res.json(error);
});
