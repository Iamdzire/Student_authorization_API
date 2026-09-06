import express from 'express'

import {createStudent, getSingleStudent, updateStudent, deleteStudent} from '../controller/studentController.js'


const studentRoute = express.Router()

studentRoute.post('/create', createStudent)
studentRoute.get('/get-single/:id', getSingleStudent)
studentRoute.patch('/update/:id', updateStudent)
studentRoute.delete('/delete/:id', deleteStudent)

export default studentRoute