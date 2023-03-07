const { Sequelize } = require('sequelize')
const config = require('../config/database')
const User = require('./models/user.model')

const sequelize = new Sequelize({
  ...config,
  sync: false,
  logging: false
})

sequelize.define(...User)

module.exports = sequelize
