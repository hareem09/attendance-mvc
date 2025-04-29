const express= require('express')
const router=express.Router()

const {
    createAttendence,
    getAllAttendence,
    getAttendenceById,
    updateAttendenceById

}=require('../controller/attendance')

router.post('/create',createAttendence)

router.get('/get/:id',getAttendenceById)

router.get('/get',getAllAttendence)

router.put('/update/:id',updateAttendenceById)

module.exports=router