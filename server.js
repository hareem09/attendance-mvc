const express=require('express')
const app= express()
const mongoose=require('mongoose')
const attendanceSchema=require('./model/attendanceSchema')
const attendanceRouter= require('./route/attendance')

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/attendanceRecord')
const port=3000

app.use('/attendance',attendanceRouter)

app.listen(port,(req,res)=>{
    console.log(`server is running at port${port}`)
})