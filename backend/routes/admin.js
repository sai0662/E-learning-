const { getuser, userupdate, userdelete, getusers } = require("../controllers/admin");
const {verifyadmin} = require("../middleware/index");

const router = require("express").Router();

//update a user
router.put("/admin/update/:id",verifyadmin,userupdate);

//delete a user
router.delete("/admin/delete/:id",verifyadmin,userdelete);

//get a user
router.get("/admin/get/:id",verifyadmin,getuser);

//get all users
router.get("/admin/getusers",verifyadmin,getusers)

module.exports=router