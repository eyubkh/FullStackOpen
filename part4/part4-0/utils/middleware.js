const logger = require('./logger')

const loggerRequest = (request, response, next) => {
  logger.info('method:', request.method)
  next()
}

const errorHandler = (error, request, response, next) => {
  logger.error(error, 'Error :/')
  response.status(500).end()
}

const unknowEndpoint = (request, response) => {
  logger.error('Unknow Endpoint :/')
  response.status(404).end()
}

module.exports = {
  loggerRequest,
  unknowEndpoint,
  errorHandler
}
