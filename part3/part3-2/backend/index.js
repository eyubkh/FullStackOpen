require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

const PORT = 3001

let DATA_CONTACT = [
    {
        id: 0,
        name: "ayoub",
        phone: 612402147
    }
]


app.get('/api/contacts/',(req,res) => {
    res.json(DATA_CONTACT)
})

app.get('/api/contacts/:id', (req,res) => {
    const { id } = req.params
    const contact = DATA_CONTACT.find( item => item.id === Number(id))
    contact.length === 0 ? res.status(404).end('Contact not found') : res.json(contact)
})

app.delete('/api/contacts/:id', (req,res) => {
    const { id } = req.params
    DATA_CONTACT = DATA_CONTACT.filter( item => item.id !== Number(id))
    res.status(204).end("Contact deleted")
})

app.post('/api/contacts', (req,res) => {
    const contact = req.body
    const id = DATA_CONTACT.length > 0 ? Math.max(...DATA_CONTACT.map(index => index.id)) : 0
    contact.id = id + 1
    DATA_CONTACT = DATA_CONTACT.concat(contact)
    res.json(contact)
})

app.listen(PORT, () => {
    console.log(`Listen at port ${PORT}`)
})