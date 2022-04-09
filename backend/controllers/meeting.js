const meeting=require("../models/meetingLink")
const validator=require("validator")
exports.addMeet=async(req,res)=>{
    try{
        const {session,meetUrl}=req.body
        if(!meetUrl)
        return res.status(400).send("Please Enter  MeetingLink")
        if(!await validator.isURL(meetUrl))
        return res.status(400).send("Please Enter valid MeetingLink")
        const theNewMeeting=new meeting({sessionId:session,meetingUrl:meetUrl})
        const theMeet=await theNewMeeting.save()
        if(!theMeet)
        return res.status(404).send("something went wrong!")
        return res.send("Meeting URL Added!")

    }
    catch(err){
        console.log(err)
        return res.status(404).send("something went wrong!")
    }
}

exports.getMeetBySesId=async(req,res)=>{
    try{
        const {sesId}=req.params
        const theMeet=await meeting.findOne({sessionId:sesId})
        if(!theMeet)
        return res.status(400).send("Not Found!")
        return res.send(theMeet)

    }
    catch(err){
        console.log(err)
        return res.status(400).send("Not Found!")
    }
}
exports.updateMeetByMeetId=async(req,res)=>{
    try{
        const {meetId}=req.params
        const {meetingUrl}=req.body
        if(!await validator.isURL(meetingUrl))
        return res.status(400).send("Invalid Meeting Link!")
        const updatedMeet=await meeting.findByIdAndUpdate(meetId,{meetingUrl})
        console.log(updatedMeet)
        if(!updatedMeet)
        return res.status(400).send("Something went wrong!")
        return res.status(200).send("Meeting Url Updated!")
    }
    catch(err){
        console.log(err)
        return res.status(400).send("Something went wrong!")
    }
}