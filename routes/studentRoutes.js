const express = require('express')

const {createStudent, getSingleStudent, updateStudent, deleteStudent} = require('../controller/studentController.js')


const studentRoute = express.Router()

studentRoute.post('/create', createStudent)
studentRoute.get('/get-single/:id', getSingleStudent)
studentRoute.patch('/update/:id', updateStudent)
studentRoute.delete('/delete/:id', deleteStudent)

module.exports = studentRoute