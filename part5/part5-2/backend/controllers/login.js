const loginRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const config = require('../utils/config')
const User = require('../models/user')

loginRouter.post('/', async (request, response) => {
  const { username, password } = request.body

  const user = await User.findOne({ username: username })
  const passwordCorrect = user === null ? false : await bcrypt.compare(password, user.passwordHash)

  if (!(user && passwordCorrect)) {
    return response.status(401).send({ error: 'invalid username or password' })
  }

  const userForTeken = {
    username,
    id: user._id
  }

  const token = jwt.sign(userForTeken, config.SECRET)

  response.status(200).send({ token, username, name: user.name })
})

module.exports = loginRouter
