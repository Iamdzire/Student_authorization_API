const mongoose = require('mongoose')
const express = require('express')
const studentRoute = require('./routes/studentRoutes.js')

const compass_string = "mongodb://localhost:27017/students_db"

const connection = () => mongoose.connect(compass_string)
const onSuccess = () => console.log("Connected successfully")
const onFailure = () => console.error("Failed to connect")

connection()
        .then(onSuccess, onFailure)



const app = express()

const port = 5555

app.use(express.json())

app.get('/test', (req, res) => {
    return res.status(200).json({
        message: "Server is active"
    })
})

app.use('/student', studentRoute)

app.listen(port, () => console.log("Server listening on port " + port))