const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getSnaps
}

function getSnaps (db = connection) {
  return db('snap').select()
}
