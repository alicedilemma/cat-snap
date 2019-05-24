const express = require('express')
const formidable = require('formidable')

let fs = require('fs')

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
  const form = new formidable.IncomingForm()
  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error('Error', err)
      throw err
    }
    console.log(files.image.path)
    // const image = fs.readFileSync(files.file.File.path, { encoding: 'base64' })
    // console.log('binary?', image)
    // const { name, story, friendliness, lat, lng } = fields
    // const snap = {
    //   name,
    //   story,
    //   friendliness,
    //   lat,
    //   lng,
    //   image
    // }

    // db.addSnap(req.body)
    //   .then(() => res.send('added!'))
  })
})

module.exports = router
