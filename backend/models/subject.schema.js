const mongoose=require("mongoose")
const subjectSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true,
        unique:true,
        uppercase:true
    },
    course:{
        type:mongoose.Types.ObjectId,
        ref:"Course"
    },
    Semester:{
        type:String,
        required:true
    },
    topics:[]
})
module.exports= mongoose.model("subject",subjectSchema)





