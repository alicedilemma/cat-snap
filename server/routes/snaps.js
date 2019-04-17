const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getSnaps()
    .then(snaps => {
      // console.log('database result', snaps)
      res.send(snaps)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  db.addSnap(req.body)
    .then(() => res.send('added!'))
})

module.exports = router
