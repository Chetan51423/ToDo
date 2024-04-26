const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()
const PORT = process.env.port || 5000

const app = express()

// routes

const todoRoute = require('./routes/TodoRoute')

mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log('connected to mongodb......'))
.catch((err)=> console.log(" Error--> "+err))


// middlewares

app.use(express.json());
app.use(cors())

app.use('/',todoRoute)


app.listen(PORT, ()=> console.log(`Listening on: ${PORT} ........`))