const Course=require("../models/course.schema")
const user=require("../models/userSchema")
exports.createCourse = async (req, res) => {
  try {
    console.log("colled")
    let {courseName,noOfYear,noOfSem}=req.body
    if(!courseName||!noOfYear||!noOfSem)
    return res.status(404).send("all field is required!")
    courseName=courseName.toUpperCase()
    const Years=[]
    const Semesters=[]
    for(let i=1;i<=noOfYear;i++){
      Years.push(`YEAR${i}`)
    }
    for(let i=1;i<=noOfSem*noOfYear;i++){
      Semesters.push(`SEM${i}`)
    }
    const theCourses=new Course({cName:courseName,Years,Semesters})
    const createdCourse=await theCourses.save()
    if(createdCourse){
      return res.status(200).send("course created!")
    }
  } catch (err) {
    console.log(err)
    const split_Err = err.message.split(" ");
    if (split_Err[11] === "cName:")
      return res
        .status(404)
        .send(`the course (${split_Err[12]}) is already created!`);
  }
};

// get CourseData..........

exports.getCourse=async(req,res)=>{
  console.log("colled2")
  try{
    const dataToSend=[]
    const course=await Course.find({})
    for(let i=0;i<=course.length-1;i++){
      const dataToAdd={}
      const teacherCount=await user.count({role:"teacher",course:course[i]._id})
      const studentCount=await user.count({role:"student",course:course[i]._id})
      dataToAdd._id=course[i]._id
      dataToAdd.course=course[i].cName
      dataToAdd.totalYear=course[i].Years
      dataToAdd.totalSem=course[i].Semesters
      dataToAdd.totalTeacher=teacherCount
      dataToAdd.totalStudent=studentCount
      dataToSend.push(dataToAdd)
      }
    
    res.send(dataToSend)

  }
  catch(err){
    console.log(err)
  }
}