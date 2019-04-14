require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./db')
const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors())

// Load routes
app.use('/', require('./routes'))

app.listen(process.env.PORT || 8081)


