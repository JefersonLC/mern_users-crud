const config = require('./environment')

module.exports = {
  dialect: 'mysql',
  host: config.host,
  username: config.username,
  password: config.password,
  port: Number(config.port),
  database: config.database
}
