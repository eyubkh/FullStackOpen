const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
// const fs = require('fs')
// const path = require('path')

const app = express()

app.use(express.json())
app.use(cors({origin: '*', methods: "GET,HEAD,PUT,PATCH,POST,DELETE", preflightContinue: false}))
// let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
/// ,{ stream: accessLogStream} 

morgan.token('body', function (req,res){ return JSON.stringify(req.body)})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))


const PORT = 3001
const IP = "127.0.0.1"

let notes = [  {    id: 1,    number: "612402147",    name: "Ayoub"},  {    id: 2,    number: "07716418893",    name: "Albert"}]

app.get('/api/persons', (req,res) => {
    res.json(notes)
})

app.get('/', (req,res) => {
    res.send("Bienvenido")
})

app.get('/api/persons/:id', (req,res) => {
    const { params } = req
    let note = notes.find(item => item.id === Number(params.id))
    if(note) {
        res.json(note)
     } else {
        res.status(404).end('<p>Note not found</p>')
     }
})

app.get('/info' , (req,res) => {
    res.send(`
    <p>Phonebook has info for ${notes.length} ${notes.length <= 1 ? 'person' : 'people'}</p>
    <p>${Date()}</p>
    `)
})

app.delete('/api/persons/:id', (req,res) => {
    const { params } = req
    notes = notes.filter(item => item.id != Number(params.id))
    res.status(202).end()
})

app.post('/api/persons', (req,res) => {
    const note =  req.body
    let idGen = notes.length > 0 ? Math.max(...notes.map(item => item.id)) : 0
    note.id = idGen + 1
    let nameUnique = notes.filter(item => {
        let r = new RegExp(note.name, 'ig')
        return r.test(item.name) === true
    })
    if(!req.body.name || !req.body.number ){
        return res.status(400).end('required name and number')
    }
    res.json(note)
    return nameUnique.length === 0 ? notes = notes.concat(note) : res.status(400).end('Name unique required')
})

app.listen(PORT, IP, () => {
    console.log(`Server runing at ${IP}:${PORT} `)
})

