const bolgsRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const config = require('../utils/config')
const Blog = require('../models/blog')
const User = require('../models/user')

bolgsRouter.get('/', async (request, respons) => {
  const result = await Blog.find({}).populate('userId', { username: 1 })
  respons.status(200).json(result)
})
bolgsRouter.get('/:id', async (request, respons) => {
  const { id } = request.params
  const result = await Blog.findOne({_id: id})
  respons.status(200).json(result)
})

const getTokenFrom = (request) => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return false
}

bolgsRouter.post('/', async (request, response, next) => {
  const { body } = request
  const { title, author, url } = body
  try {
    const token = getTokenFrom(request)
    const decodeToken = jwt.verify(token, config.SECRET)
    if (!token || !decodeToken) {
      return response.status(401).send({ error: 'token missing or invalid' })
    }
    const user = await User.findOne({ _id: decodeToken.id })
    const blog = {
      title,
      author,
      url,
      userId: user._id
    }
    const newBlog = new Blog(blog)
    const result = await newBlog.save()
    user.blogs = user.blogs.concat(newBlog._id)
    await user.save()
    response.status(200).json(result)
  } catch (error) {
    next(error)
  }
})

module.exports = bolgsRouter
