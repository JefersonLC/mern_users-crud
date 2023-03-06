const sequelize = require('../db');

const { User } = sequelize.models;

async function find(req, res, next) {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
}

async function create(req, res, next) {
  try {
    const data = req.body;
    const newUser = await User.create(data);
    res.json(newUser);
  } catch (error) {
    next(error);
  }
}

module.exports = { find, create };
