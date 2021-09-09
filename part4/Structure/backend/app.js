const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const contactRouter = require('./controllers/contacts')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

logger.info('Conected to Server in port ', config.PORT)

mongoose.connect(config.MONGODB_URL, { useNewUrlParser: true })
  .then(res => {
    logger.info('Connected to MongoDB')
  })
  .catch(() => {
    logger.error('Error to Connect to MongoDB')
  })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/contacts', contactRouter)

app.use(middleware.unknowEndpoint)
app.use(middleware.errorHandler)

module.exports = app
