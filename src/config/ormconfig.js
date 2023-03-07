const config = require('./database')

module.exports = {
  development: {
    ...config,
    logging: true
  },
  production: {
    ...config,
    logging: false
  }
}
