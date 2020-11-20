const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'mx',
  password: 'password',
  port: 5432,
})

const getSystems = (request, response) => {
    pool.query('SELECT * FROM aircraft ORDER BY aircraft_id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getSystemsById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM aircraft WHERE aircraft_id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getSystemTickets = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM aircraft_tickets WHERE aircraft_id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getSystemSchedule = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM aircraft_flights WHERE aircraft_id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const addSystem = (request, response) => {
    const { work_center_id, aircraft_model, tail_number, flight_hours, last_fly_date, operational_status } = request.body
    console.log(request.body)
    pool.query('INSERT INTO Aircraft (Work_Center_ID, Aircraft_Model, Tail_Number, Flight_Hours, Last_Fly_Date, Operational_Status) VALUES ($1, $2, $3, $4, $5, $6)', [work_center_id, aircraft_model, tail_number, flight_hours, last_fly_date, operational_status], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`System Added!`)
    })
  }

  const removeSystem = (request, response) => { 
    const id = parseInt(request.params.id)
    pool.query('DELETE FROM aircraft WHERE aircraft_id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`System Deleted!`)
    })
  }

  module.exports = {
    getSystems,
    getSystemsById,
    getSystemTickets,
    getSystemSchedule,
    addSystem,
    removeSystem
  }