const validator=require("validator")
const auth=require("../models/userSchema")
exports.teacherMiddleware=async(req,res,next)=>{
    try{
        const {emailOrMobile}=req.body
        if(!validator.isEmail(emailOrMobile)&&!validator.isMobilePhone(emailOrMobile,"en-IN"))
        return res.status(400).send("invalid email or mobile!")
        if(validator.isEmail(emailOrMobile)){
            const theUser=await auth.findOne({email:emailOrMobile})
            // console.log(theUser)
            if(!theUser)
            return res.status(400).send("Email is Not Registered")
            if(theUser.role!="teacher")
            return res.status(400).send("Email is Not Registered")
            next()
        }
        if(validator.isMobilePhone(emailOrMobile,"en-IN")){
            const theUser=await auth.findOne({mobile:emailOrMobile})
            if(!theUser)
            return res.status(400).send("Mobile is Not Registered")
            if(theUser.role!="teacher")
            return res.status(400).send("Mobile is Not Registered")
            next()
        }

    }
    catch(err){
        console.log(err)
        return res.status(400).send("something went wrong")
    }
}
exports.studentMiddleware=async(req,res,next)=>{
    try{
        const {emailOrMobile}=req.body
        if(!validator.isEmail(emailOrMobile)&&!validator.isMobilePhone(emailOrMobile,"en-IN"))
        return res.status(400).send("invalid email or mobile!")
        if(validator.isEmail(emailOrMobile)){
            const theUser=await auth.findOne({email:emailOrMobile})
            // console.log(theUser)
            if(!theUser)
            return res.status(400).send("Email is Not Registered")
            if(theUser.role!="student")
            return res.status(400).send("Email is Not Registered")
            next()
        }
        if(validator.isMobilePhone(emailOrMobile,"en-IN")){
            const theUser=await auth.findOne({mobile:emailOrMobile})
            if(!theUser)
            return res.status(400).send("Mobile is Not Registered")
            if(theUser.role!="student")
            return res.status(400).send("Mobile is Not Registered")
            next()
        }

    }
    catch(err){
        return res.status(400).send("something went wrong")
    }
}



// You need to complete one transaction of ₹100.00 or more before Sending Bulk SMS.