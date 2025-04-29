const express= require('express')
const router=express.Router()
const{
    createCourse,
    getAllCourse
}=require('../controller/course')

router.post('/create',createCourse)

router.get('/get',getAllCourse)

module.exports=router