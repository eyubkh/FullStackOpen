const resetRouter = require('express').Router() 
const Blog = require('../models/blog')
const User = require('../models/user')

resetRouter.get('/', async (request, response) => {
  await Blog.deleteMany({})
  await User.deleteMany({})
  response.status(200).send({ message: 'data base clean'})
})

module.exports = resetRouter