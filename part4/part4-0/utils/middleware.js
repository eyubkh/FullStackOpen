const logger = require('./logger')

const loggerRequest = (request, response, next) => {
  logger.info('method:', request.method)
  next()
}

const errorHandler = (error, request, response, next) => {
  logger.error(error, 'Error :/')
  response.status(200).end()
}

const unknowEndpoint = (request, response) => {
  logger.error('Unknow Endpoint :/')
  response.status(200).send('ha')
}

module.exports = {
  loggerRequest,
  unknowEndpoint,
  errorHandler
}
