const route=require("express").Router()
const {isTeacher}=require("../middleware/index")
const {addMeet,getMeetBySesId,updateMeetByMeetId}=require("../controllers/meeting")

route.post("/meet/add",isTeacher,addMeet)
route.get("/meet/get/:sesId",isTeacher,getMeetBySesId)
route.patch("/meet/update/:meetId",isTeacher,updateMeetByMeetId)


module.exports=route