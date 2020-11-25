const fs = require("fs")
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const cors = require('cors');
const port = 8082

app.use(cors())
app.options('*', cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Put in an endpoint silly!' })
})
 


app.get('/systems', db.getSystems)
app.get('/workcenters', db.getWorkcenters)
app.get('/system/:id', db.getSystemsById)
app.get('/system/:id/tickets', db.getSystemTickets)
app.get('/system/:id/schedule', db.getSystemSchedule)
app.post('/system', db.addSystem)
app.delete('/system/:id', db.removeSystem)


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))