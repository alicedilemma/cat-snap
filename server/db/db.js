const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getSnaps,
  addSnap
}

function getSnaps (db = connection) {
  return db('snap').select()
}

function addSnap (newSnap, db = connection) {
  return db('snap')
    .insert(newSnap)
}
