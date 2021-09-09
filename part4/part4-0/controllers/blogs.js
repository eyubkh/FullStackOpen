const BlogsRouter = require('express').Router()
const Blog = require('../models/blog')

BlogsRouter.get('/', (request, response, next) => {
  Blog.find({})
    .then(result => {
      console.log('muy bien get')
      response.json(result)
    })
    .catch(error => next(error))
})

BlogsRouter.post('/', (request, response, next) => {
  const body = request.body
  const newBlog = new Blog(body)
  newBlog.save()
    .then(result => {
      response.json(result)
    })
    .catch(error => {
      console.log(error)
    })
})

BlogsRouter.delete('/:id', (request, response, next) => {
  const { id } = request.params
  Blog.deleteOne({ _id: id })
    .then(result => response.status(200).send('deleted'))
    .catch(error => next(error))
})

module.exports = BlogsRouter
