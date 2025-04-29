const studentModel=require('../model/studentSchema');

const addStudent = async (req, res) => {
    try {
        const student = await studentModel.create(req.body);
        await student.save();
        res.status(200).json({
            message: 'Successfully added',
            student: student
        });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to add attendance',
            error: error.message
        });
    }
};

const getAllStudent = async (req, res) => {
    try{
        const students = await studentModel.find().populate('courseId','coursename teacherName');
        res.status(200).json(students);
    }
    catch(err){
        res.status(400).json({message:err.message});
    }
};

const getStudentById = async (req, res) => {
    try {
        const student = await studentModel.findById(req.params.id);
        if (!attendance) {
            return res.status(404).json({ message: 'Attendance not found' });
        }
        res.status(200).json({
            message: 'Successfully retrieved'
        });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to fetch attendance',
            error: error.message
        });
    }
};

const updateStudentById = async (req, res) => {
    try {
        const student = await studentModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true}
        );
        res.status(200).json({
            message: 'Successfully updated',
            student: student
        });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to update attendance',
            error: error.message
        });
    }
};

module.exports = {
     addStudent,
     getAllStudent,
     getStudentById,
     updateStudentById
    };
