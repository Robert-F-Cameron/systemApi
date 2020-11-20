const fs = require("fs")
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3004

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})



app.get('/systems', db.getEmails)
app.get('/system/:id', db.getEmailsById)
app.get('/system/:id/tickets', db.getEmailsById)
app.get('/system/:id/schedule', db.getEmailsById)
app.post('/system', db.createEmail)
app.delete('/system', db.createEmail)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))