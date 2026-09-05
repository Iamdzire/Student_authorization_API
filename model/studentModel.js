const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    Name: {type: String, required: true},
    Reg_No: {type: String, required: true, unique: true},
    Password: {type: String, required: true}
})

const studentModel = mongoose.model('Students', studentSchema)
module.exports = studentModel