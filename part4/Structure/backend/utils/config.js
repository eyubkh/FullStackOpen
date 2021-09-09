require('dotenv').config()

const MONGODB_URL = process.env.DB_MONGO
const PORT = 3001

module.exports = {
  MONGODB_URL,
  PORT
}
