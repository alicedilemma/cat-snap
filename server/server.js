const path = require('path')
const express = require('express')

const authRouter = require('./routes/auth')
const snapsRouter = require('./routes/snaps')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/', authRouter)
server.use('/api/v1/snaps', snapsRouter)

module.exports = server
