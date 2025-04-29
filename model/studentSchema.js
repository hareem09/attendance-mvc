const mongodb=require('mongoose')

let studentSchema=new mongodb.Schema({
    Student:String,
    Roll:String,
    class:String,
    courseId:{
            type: mongodb.Schema.Types.ObjectId,
            ref:'course',
             required: true
    
        }
})
module.exports = mongodb.model('student',studentSchema);