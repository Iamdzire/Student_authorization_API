import studentModel from '../model/studentModel.js'

export const createStudent = async(req, res) => {
    try {
        const {Name, Reg_No, Password} = req.body
        const student = await studentModel.create({
            Name, Reg_No, Password
        })
        return res.status(201).json({
            message: "Student created successfully",
            data: student
        })
    }catch(error){
        return res.status(500).json({
            message: error.message
        })
    }
}



export const getSingleStudent = async(req, res) => {
    try {
        const {id} = req.params
        const getSingle = await studentModel.findById(id)
        if(!getSingle){
            return res.status(404).json({
                message: "Student not found"
            })
        }
        return res.status(200).json({
            message:"Student found",
            data: getSingle
        })
    }catch(error){
        return res.status(500).json({
            message: error.message
        })
    }
}


export const updateStudent = async(req, res) => {
    try {
        const {id} = req.params
        const {Name} = req.body
        const update = await studentModel.findByIdAndUpdate(id,
            {Name}, {returnDocument: 'After'}
        )
        return res.status(200).json({
            message: "Student name updated",
            data: update
        })
    }catch(error){
        return res.status(500).json({
            message: error.message
        })
    }
}


export const deleteStudent = async(req, res) => {
    try {
        const {id} = req.params
        const eraseStudent = await studentModel.findByIdAndDelete(id)
        return res.status(200).json({
            message: "Student deleted successfully"
        })
    }catch(error){
        return res.status(500).json({
            message: error.message
        })
    }
}




