const UserService = require('../services/user.service');

const service = new UserService();

async function find(req, res, next) {
  try {
    const users = await service.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
}

async function create(req, res, next) {
  try {
    const data = req.body;
    const newUser = await service.create(data);
    res.json(newUser);
  } catch (error) {
    next(error);
  }
}

module.exports = { find, create };
