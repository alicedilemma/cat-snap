const connection = require('./connection')

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
