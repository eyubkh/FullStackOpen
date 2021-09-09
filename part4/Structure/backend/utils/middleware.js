const logger = require('./logger')

const requestLogger = (request, response, next) => {
  logger.info('meothod:', request.method)
  next()
}

const errorHandler = (error, req, res, next) => {
  logger.error(error, 'from errorhandler')
  res.status(404).end()
}

const unknowEndpoint = (req, res) => {
  logger.error('uknow endpoint')
  res.status(404).end()
}

module.exports = {
  unknowEndpoint,
  errorHandler,
  requestLogger
}
