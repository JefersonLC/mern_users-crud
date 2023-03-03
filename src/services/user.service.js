const sequelize = require('../db');

const { User } = sequelize.models;

class UserService {
  async find() {
    const users = await User.findAll();
    return users;
  }

  async create(data) {
    const newUser = await User.create(data);
    return newUser;
  }
}

module.exports = UserService;
