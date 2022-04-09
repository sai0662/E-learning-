const mongoose = require("mongoose");

const feedbackSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    feedback:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("feedback",feedbackSchema);