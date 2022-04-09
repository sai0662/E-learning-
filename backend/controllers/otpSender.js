const axios=require("axios")
require("dotenv").config()
exports.smsOtpSend=async(otp,mobile)=>{
    try{
        const isSend=await axios.post("https://www.fast2sms.com/dev/bulkV2",{
            "route" : "v3",
            "sender_id" : "Cghpet",
             "message":`${otp} is the otp to verify your mobile number with E-Learning. Please do not share this with anyone. This Otp is valid For 2 minutes {E-Learning Team}`,
             "language" : "english",
             "flash" : 1,
             "numbers": `${mobile}`
           },{headers:{authorization:process.env.SMSSENDAPIKEY}})
        //    console.log(isSend)
           return isSend.data

    }
    catch(err){
        console.log(err)
    }
}