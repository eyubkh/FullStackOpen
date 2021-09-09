const contactRouter = require('express').Router()
const Contact = require('../models/contact')

contactRouter.get('/', (request, response, next) => {
  Contact.find({})
    .then(result => {
      response.json(result)
    })
    .catch(error => next(error))
})

contactRouter.get('/:id', (request, response, next) => {
  const { id } = request.params
  Contact.findById(id)
    .then(result => {
      response.json(result).end()
    })
    .catch((error) => next(error))
})

contactRouter.delete('/:id', (request, response, next) => {
  const { id } = request.params
  Contact.deleteOne({ _id: id })
    .then(result => {
      response.status(200).end('Contact deleted')
    })
    .catch(error => next(error))
})

contactRouter.post('/', (request, response, next) => {
  const contact = request.body
  const createContact = new Contact(contact)
  createContact.save()
    .then(result => {
      response.json(result)
    })
    .catch(error => next(error))
})

contactRouter.put('/:id', (request, response, next) => {
  const { _id, phone } = request.body
  Contact.updateOne({ _id: _id }, { phone: phone })
    .then(result => {
      response.status(200).end()
    })
    .catch(error => next(error))
})

module.exports = contactRouter
