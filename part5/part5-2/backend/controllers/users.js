const usersRouter = require('express').Router()
const User = require('../models/user')
const bcryt = require('bcrypt')

usersRouter.get('/', async (request, response) => {
  const result = await User.findOne({}).populate('blogs')
  response.status(200).json(result)
})
usersRouter.get('/:username', async (request, response) => {
  const { params } = request
  const result = await User.findOne({ username: params.username}).populate('blogs', { author: 1, title: 1 })
  response.status(200).json(result)
})

usersRouter.post('/', async (request, response, next) => {
  const { body } = request
  const { username, name, password } = body
  if (password.length <= 3 || username.length <= 3) {
    response.status(400).send({ error: 'password or username less than 3 latters' })
  }
  try {
    const passwordHash = await bcryt.hash(password, 10)
    const newUser = new User({ username, name, passwordHash })
    const result = await newUser.save()
    response.status(200).json(result)
  } catch (error) {
    next(error)
  }
})

module.exports = usersRouter
