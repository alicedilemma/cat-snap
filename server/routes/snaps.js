const express = require('express')
const formidableMiddleware = require('express-formidable')

const router = express.Router()
router.use(formidableMiddleware())

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
  // Formidable form sends data in req.fields and req.files
  const { name, story, friendliness, lat, lng, image } = req.fields
  const snap = {
    name,
    story,
    friendliness,
    lat,
    lng,
    image
  }
  db.addSnap(snap)
    .then(() => { res.send('ok') })
    .catch(err => console.log(err))
})

module.exports = router
