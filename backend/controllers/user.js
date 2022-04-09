const User = require("../models/userSchema");
const Course = require("../models/course.schema");
const bcrypt = require("bcrypt");

// get all teachers
exports.getAllTeachers = async (req, res) => {
  try {
    const dataToSend = [];
    const theTeachers = await User.find({ role: "teacher" });
    for (let i = 0; i < theTeachers.length; i++) {
      const { _id, fullname, email, mobile, role, course } = theTeachers[i];
      const theCourse = await Course.findById(course);
      const students = await User.count({
        role: "student",
        course: theCourse._id,
      });
      const courseDeatils = {
        _id: theCourse._id,
        cName: theCourse.cName,
        years: theCourse.Years.length,
        semesters: theCourse.Semesters.length,
      };
      let dataToAdd = {
        _id,
        fullname,
        email,
        mobile,
        role,
        course: courseDeatils,
        students,
      };
      dataToSend.push(dataToAdd);
    }

    if (theTeachers) {
      res.status(200).send(dataToSend);
    }
  } catch (err) {
    res.status(400).send("something went wrong!");
    console.log(err);
  }
};

// get all student
exports.getAllStudents = async (req, res) => {
  try {
    const dataToSend = [];
    if (req.role == "admin") {
      const theStudents = await User.find({ role: "student" });
      for (let i = 0; i < theStudents.length; i++) {
        const { _id, fullname, email, mobile, role, course } = theStudents[i];
        const theCourse = await Course.findById(course);
        const teachers = await User.count({
          role: "teacher",
          course: theCourse._id,
        });
        const courseDeatils = {
          _id: theCourse._id,
          cName: theCourse.cName,
          years: theCourse.Years.length,
          semesters: theCourse.Semesters.length,
        };
        let dataToAdd = {
          _id,
          fullname,
          email,
          mobile,
          role,
          course: courseDeatils,
          teachers,
        };
        dataToSend.push(dataToAdd);
      }

      if (theStudents) {
        console.log(dataToSend)
       return res.status(200).send(dataToSend);
      }
    }
    else if(req.role == "teacher")
    {
        const {_id}=req
        // const theUser=await User.findById(_id)
        const user=await User.findById(_id)
        const theStudents = await User.find({ role: "student" ,course:user.course});
      for (let i = 0; i < theStudents.length; i++) {
        const { _id, fullname, email, mobile, role, course } = theStudents[i];
        const theCourse = await Course.findById(course);
        const teachers = await User.count({
          role: "teacher",
          course: theCourse._id,
        });
        const courseDeatils = {
          _id: theCourse._id,
          cName: theCourse.cName,
          years: theCourse.Years.length,
          semesters: theCourse.Semesters.length,
        };
        let dataToAdd = {
          _id,
          fullname,
          email,
          mobile,
          role,
          course: courseDeatils,
          teachers,
        };
        dataToSend.push(dataToAdd);
      }

      if (theStudents) {
        console.log(dataToSend)
       return res.status(200).send(dataToSend);
      }
    }
    
  } catch (err) {
    res.status(400).send("something went wrong!");
    console.log(err);
  }
};

//update user
exports.updateuser = async (req, res) => {
  try {
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 12);
    }
    const updateduser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateduser);
  } catch (err) {
    res.status(400).json(err);
  }
};

//delete a user
exports.deleteuser = async (req, res) => {
  try {
    const deleteduser = await User.findByIdAndDelete(req.params.id);
    res.status(400).json("user has been deleted");
  } catch (err) {
    res.status(400).json(err);
  }
};

//get a user by id(done by teacher)
exports.getuser = async (req, res) => {
  try {
    const getuser = await User.findById(req.params.id);
    res.status(200).json({ user: getuser });
  } catch (err) {
    res.status(401).json(err);
  }
};

//get all user
exports.getusers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users: users });
  } catch (err) {
    res.status(401).json(err);
  }
};
