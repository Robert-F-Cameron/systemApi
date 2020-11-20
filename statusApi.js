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
 


app.get('/systems', db.getSystems)
app.get('/system/:id', db.getSystemsById)
app.get('/system/:id/tickets', db.getSystemTickets)
app.get('/system/:id/schedule', db.getSystemSchedule)
app.post('/system', db.addSystem)
app.delete('/system/:id', db.removeSystem)


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))