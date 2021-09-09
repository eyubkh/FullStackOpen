const config = require('./utils/config')
const http = require('http')
const app = require('./app')
const logger = require('./utils/logger')

const server = http.createServer(app)

server.listen(config.PORT, () => {
  logger.info('server up in port', config.PORT)
})
