const mongoose=require("mongoose")
const Course=mongoose.Schema({
    cName:{
        type:String,
        require:true,
        unique:true
    },
    Years:[{
        type:String,
        require:true
    }],
    Semesters:[{
        type:String,
        require:true
    }]
})
module.exports=mongoose.model("Course",Course)