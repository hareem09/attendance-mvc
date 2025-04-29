const express= require('express')
const router=express.Router()

const {
     addStudent,
     getAllStudent,
     getStudentById,
     updateStudentById
    }=require('../controller/student')

router.post('/create/student',addStudent)

router.get('/get/:id',getStudentById)

router.get('/get',getAllStudent)

router.put('/update/:id',updateStudentById)
 
module.exports=router