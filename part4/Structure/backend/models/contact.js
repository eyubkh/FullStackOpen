const mongoose = require('mongoose')

const newContact = mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  phone: Number
})

module.exports = mongoose.model('Contact', newContact)
