const attendanceSchema=require('../model/attendanceSchema')
const createAttendence=(req,res)=>{
    const attendance= new attendanceSchema(req.body)
    attendance.save()
    res.status(200).json({
        message:'Successfully added',
        attendance:attendance
    })
}

const getAllAttendence=async(req,res)=>{
    const attendance= await attendanceSchema.find()
    res.status(200).json({
        message:'Successfully displayed',
        attendance:attendance
    })
}
const getAttendenceById=async(req,res)=>{
    const attendance=await  attendanceSchema.findById(req.params.id)
    res.status(200).json({
        message:'Successfully added',
        attendance:attendance
    })
}

const updateAttendenceById=async (req,res)=>{
    const attendance= await attendanceSchema.findByIdAndUpdate(req.params.id,req.body)
    res.status(200).json({
        message:'Successfully updated',
        attendance:attendance
    })
}
module.exports={
    createAttendence,
    getAllAttendence,
    getAttendenceById,
    updateAttendenceById
}