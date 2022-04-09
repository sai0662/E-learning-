const { createfeedback, getfeedback, updatefb, delfeed,getAllFeedback } = require("../controllers/feedback")

const router=require("express").Router()

//create feedback
router.post("/createfb",createfeedback);

//getfeedback
router.get("/getfb/:feedid",getfeedback);

//getallfeedback
router.get("/getfb",getAllFeedback);

//updatefeedback
router.put("/updatefb/:id",updatefb);

//deletefeedback
router.delete("/deletefb/:id",delfeed);


module.exports=router