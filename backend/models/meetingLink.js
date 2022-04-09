const mongoose=require("mongoose")
const meetingSChema=new mongoose.Schema({
    sessionId:{
        type:mongoose.Types.ObjectId,
        ref:"session",
        required:true
    },
    meetingUrl:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        expires:"24hr",
        default:Date.now
    }
})
module.exports=new mongoose.model("meeting",meetingSChema)