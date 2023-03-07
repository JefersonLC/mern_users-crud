const { EmptyResultError } = require('sequelize');
const sequelize = require('../db');

const { User } = sequelize.models;

async function findByPk(id) {
  const user = await User.findByPk(id);
  if (!user) throw new EmptyResultError('User Not Found');
  return user;
}

async function find(req, res, next) {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
}

async function findOne(req, res, next) {
  try {
    const { id } = req.params;
    const user = await findByPk(id);
    res.json(user);
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

async function update(req, res, next) {
  try {
    const { id } = req.params;
    const data = req.body;
    const user = await findByPk(id);
    const modifiedUser = await user.update(data);
    res.json(modifiedUser);
  } catch (error) {
    next(error);
  }
}

async function remove(req, res, next) {
  try {
    const { id } = req.params;
    const user = await findByPk(id);
    const deletedUser = await user.destroy();
    res.json(deletedUser);
  } catch (error) {
    next(error);
  }
}

module.exports = { find, findOne, create, update, remove };
