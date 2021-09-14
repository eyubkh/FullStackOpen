const BlogsRouter = require('express').Router()
const Blog = require('../models/blog')

BlogsRouter.get('/', async (request, response, next) => {
  const result = await Blog.find({})
  response.json(result)
})

BlogsRouter.get('/:id', async (request, response, next) => {
  const { params } = request
  try {
    const result = await Blog.find({ _id: params.id })
    response.status(200).json(result)
  } catch (error) {
    next(error)
  }
})

BlogsRouter.post('/', async (request, response, next) => {
  const body = request.body
  const newBlog = new Blog(body)
  try {
    const result = await newBlog.save()
    response.status(200).json(result)
  } catch (error) {
    next(error)
  }
})

BlogsRouter.delete('/:id', async (request, response, next) => {
  const { id } = request.params
  try {
    await Blog.deleteOne({ _id: id })
    response.status(204).send('deleted')
  } catch (error) {
    next(error)
  }
})

module.exports = BlogsRouter
