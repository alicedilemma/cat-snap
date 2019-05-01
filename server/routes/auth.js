const express = require('express')
const { applyAuthRoutes } = require('authenticare/server')

const {
  userExists,
  getUserByName,
  createUser } = require('../db/users')

const router = express.Router()

applyAuthRoutes(router, {
  userExists,
  getUserByName,
  createUser
})

// POST to http://localhost:3000/api/v1/auth/register
// POST to http://localhost:3000/api/v1/auth/signin

module.exports = router
