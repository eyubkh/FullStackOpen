const config = require('./utils/config')
const express = require('express')
const app = express()
const logger = require('./utils/logger')
const blogsRouter = require('./controllers/blogs')
const mongoose = require('mongoose')
const middleware = require('./utils/middleware')

mongoose.connect(config.MONGODB_URL)
  .then(() => {
    logger.info('MongoDB Conected')
  })
  .catch(() => {
    logger.error('MongoDB Connection error')
  })

app.use(middleware.loggerRequest)

app.use('/api/blogs', blogsRouter)

app.use(middleware.unknowEndpoint)
app.use(middleware.errorHandler)

module.exports = app
