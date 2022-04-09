const mongoose = require("mongoose");
const User = require("./userSchema");

const noticeSchema = new mongoose.Schema({
      course:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Course",
        required:true
      },
      user:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"USER",
        required:true
      },
      notice:{
          type:String,
          required:true
      },
    },{timestamps:true})

    module.exports= mongoose.model("notice",noticeSchema);