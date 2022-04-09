const route=require("express").Router()
const {createCourse,getCourse}=require("../controllers/course")
route.post("/create/course",createCourse)
route.get("/get/course",getCourse)
module.exports=route