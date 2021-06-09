// ------------------------ CONSTANTS ------------------------
const env = require('dotenv').config() // This uses the .env file I've defined.
const express = require('express')
const app = express()
const cors = require('cors')// TODO: Figure out what I'll need CORS for.
const morgan = require('morgan')// TODO: Figure out how to configure my logs
const session = require('express-session')// TODO: Figure out what I'll need to do with the sessions.

// ------------------------ GLOBAL MIDDLEWARE ------------------------

// This is Express's default request parser. It replaces the need for the bodyParser module
app.use(express.json())
app.use(express.urlencoded(
  { extended: true }
))

// ------------------------ ROUTES ------------------------

// ------------------------ ERROR HANDLER

app.get('/', (req, res) => {
  res.send('This is a testt')
})

app.listen(process.env.EXPRESS_PORT, 'localhost')
