require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

const PORT = 3001

const url = process.env.DB_MONGO

mongoose.connect(url , {useNewUrlParser: true})

const newContact = mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    phone: Number
})

const Contact = mongoose.model("Contact", newContact)

app.get('/api/contacts/',(req,res) => {
    Contact.find({})
        .then(result => {
            res.json(result)
        })
})

app.get('/api/contacts/:id', (req,res) => {
    const { id } = req.params
    Contact.findById(id)
        .then(result => {
                console.log('id finded')
                res.json(result).end()

        })
        .catch( err => {
            console.log('Error')
            res.status(404).end()
        })
})

app.delete('/api/contacts/:id', (req,res) => {
    const { id } = req.params
   Contact.deleteOne({ "_id": id})
        .then(result => {
            if(result.deletedCount === 0) next()
            console.log('Deleted contact :)')
            res.status(200).end("Contact deleted")
        })
        .catch( err => {
            console.log('oh error to delet :/')
            res.status(404).end()
        })
    
})

app.post('/api/contacts', (req,res) => {
    const contact = req.body
    const createContact = new Contact(contact)
    createContact.save()
        .then(result => {
            console.log("contact added")
            res.json(result)
        })
        .catch(err => {
            console.log('oh error to post', { err })
            res.status(406).end()
        })
})

app.put('/api/contacts/:id', (req,res) => {
    const { _id, phone } = req.body
    Contact.updateOne({ "_id": _id},{ "phone": phone})
        .then(result => {
            console.log('Contact update :)')
            res.status(200).end()
        })
        .catch( err => {
            console.log("oh error to update :/")
            res.status(404).end()
        })
})

app.listen(PORT, () => {
    console.log(`Listen at port ${PORT}`)
})