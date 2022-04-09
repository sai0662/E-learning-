const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const bcrypt=require("bcrypt")
const Otp = new mongoose.Schema(
    {
        user:{
            type: ObjectId,
            ref: "User"
        },
        otp:{
            type:String,
            required:true
        },
        createdAt:{
            type:Date,
            expires:120,
            default:Date.now
        }
    }
)
Otp.pre("save",async function(next){
    this.otp=await bcrypt.hash(this.otp,12)
    next()

})

module.exports=new mongoose.model("Otp",Otp);