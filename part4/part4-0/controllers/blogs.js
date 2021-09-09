const BlogsRouter = require('express').Router()
const Blog = require('../models/blog')

BlogsRouter.get('/', (request, response, next) => {
  Blog.find({})
    .then(result => {
      response.status(200).json(result)
    })
    .catch(error => next(error))
})

BlogsRouter.post('/', (request, response, next) => {
  const { body } = request
  Blog.updateOne(body)
    .then(result => response.status(200).json(result))
    .catch(error => next(error))
})

module.exports = BlogsRouter
