const logger = require('./logger')

const requestLogger = (request, respones, next) => {
  logger.info(request.method, request.path)
  next()
}

const errorHandler = (error, request, response, next) => {
  logger.error(error.name)
  if (error.name === 'MongoServerError') {
    response.status(400).send({ error: 'Error to Connect to MongoDB' })
  } else if (error.name === 'ValidationError') {
    response.status(400).send({ error: 'Mongo Validation error' })
  } else if (error.name === 'JsonWebTokenError') {
    response.status(401).send({ error: 'token invalid or missing' })
  } else {
    next(error)
  }
}

const unknowEndpoin = (request, response) => {
  response.status(404).send({ error: 'unknow Endpoint' })
}

module.exports = {
  requestLogger,
  errorHandler,
  unknowEndpoin
}
