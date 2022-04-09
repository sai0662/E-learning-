const auth = require("../models/userSchema");
const course = require("../models/course.schema");
const subject=require("../models/subject.schema")
const jwt = require("jsonwebtoken");
require("dotenv").config();
exports.loadUser = async (_id) => {
  try {
    const theUser = await auth.findById(_id).select("-password");
    if (theUser.role == "admin") {
      let dataToSend = {};
      dataToSend.user = theUser;
      dataToSend.token = await jwt.sign(
        { id: theUser._id },
        process.env.SECRETKEY
      );
      dataToSend.courses = [];
      const totalCourse = await course.find({});
      for (let i = 0; i < totalCourse.length; i++) {
        let toAdd = {};
        toAdd._id = totalCourse[i]._id;
        toAdd.course = totalCourse[i].cName;
        toAdd.totalYear = totalCourse[i].Years;
        toAdd.totalSem = totalCourse[i].Semesters;
        toAdd.totalStudent = await auth.count({
          role: "student",
          course: totalCourse[i]._id,
        });
        toAdd.totalTeacher = await auth.count({
          role: "teacher",
          course: totalCourse[i]._id,
        });
        dataToSend.courses.push(toAdd);
      }
      dataToSend.subjects=await subject.find({})
      console.log(dataToSend)
      return dataToSend;
    }
    if (theUser.role == "teacher") {
      let dataToSend = {};
      dataToSend.user = theUser;
      dataToSend.token = await jwt.sign(
        { id: theUser._id },
        process.env.SECRETKEY
      );
      const theCourse=await course.findById(theUser.course)
      console.log(theCourse)
      dataToSend.courses=[{_id:theCourse._id,course:theCourse.cName,totalYear:theCourse.Years,totalSem:theCourse.Semesters}]
      dataToSend.students=await auth.find({role:"student",course:theUser.course}).select("-password")
      dataToSend.subjects=await subject.find({course:theUser.course})
      return dataToSend
    }
    if (theUser.role == "student") {
      let dataToSend = {};
      dataToSend.user = theUser;
      dataToSend.token = await jwt.sign(
        { id: theUser._id },
        process.env.SECRETKEY
      );
      dataToSend.courses=await course.findById(theUser.course)
      dataToSend.teachers=await auth.find({role:"teacher",course:theUser.course}).select("-password")
      console.log(dataToSend)
      return dataToSend
    }
  } catch (err) {
    console.log(err);
  }
};
