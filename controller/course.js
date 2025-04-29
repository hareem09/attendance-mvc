const courseSchema= require('../model/courseSchema');

const createCourse= async (req,res)=>{
    try {
        const course= await courseSchema.create(req.body);
        await course.save();
        res.status(200).json({
            message: 'Successfully added',
            course: course
        });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to add course',
            error: error.message
        });
    }
}

const  getAllCourse= async (req,res)=>{
try{
    const course= await courseSchema.find();
    res.status(200).json({
        message: 'Successfully retrieved',
        course: course
    })
}
catch(error) {
         res.status(500).json({   
             message: 'Failed to fetch course',
             error: error.message
         });           
}
}
module.exports ={
    getAllCourse,
    createCourse
}