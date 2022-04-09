const express = require("express");
const { createnotice, getnotice, updatenotice, delnot } = require("../controllers/notice");
const { AdminAndTeacherMiddleware,isTeacherOrStudent } = require("../middleware");
const router = express.Router();


router.post("/createnotice",AdminAndTeacherMiddleware,createnotice);

router.get("/getnotices",isTeacherOrStudent,getnotice);

router.put("/updatenotice/:id",AdminAndTeacherMiddleware,updatenotice)

router.delete("/deletenotice/:id",AdminAndTeacherMiddleware,delnot)

module.exports=router