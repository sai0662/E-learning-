import * as admin from '../constant/admin.Constant';
import axios from '../../axios'
import Cookies from "js-cookie"
import Swal from "sweetalert2"
export const loginAdminAction = (data) => async (dispatch) => {
        try {
            console.log(data)
            dispatch({ type: admin.ADMIN_USER_LOGIN_REQUESTED });
   
            
        const adminData=await axios.post("/auth/admin/signin",data)
        console.log(adminData)
        Cookies.set("e-learningadmintoken",adminData.data.token)

           dispatch({ 
               type: admin.ADMIN_USER_LOGIN_SUCCESS,
               user:adminData.data.user,
               courses:adminData.data.courses,
               subjects:adminData.data.subjects
            });
            dispatch(getAllTeachers())
            

        } 
        catch (err) {
            dispatch({ type: admin.ADMIN_USER_LOGIN_ERROR,
            err:err.response.data,
            });
        }
    }
    export const getCourse=(data)=>async(dispatch)=>{
        console.log("function colled")
        try{
            dispatch({type:admin.ADMIN_COURSE_REQUESTED})
            const theCourse=await axios.get("/get/course")
            if(theCourse){
                dispatch({type:admin.ADMIN_COURSE_SUCCESS,course:theCourse.data})
            }
            else{
                dispatch({type:admin.ADMIN_COURSE_ERROR,err:"Something went wrong"})
            }
   
        }
        catch(err){
            console.log(err)
            dispatch({type:admin.ADMIN_COURSE_ERROR,err:err.response.data})
        }
    }

 export const addCourse=(data)=>async(dispatch)=>{
     try{
         dispatch({type:admin.ADMIN_COURSE_REQUESTED})
         const thecourse=await axios.post("/create/course",data)
         if(thecourse){
            Swal.fire("Course Created!")
             dispatch(getCourse()
)
         }

     }
     catch(err){
        dispatch({type:admin.ADMIN_COURSE_ERROR,
            err:err.response.data,
            });
     }
 }

 export const addTeacher=(data)=>async(dispatch)=>{
     try{
         dispatch({type:admin.ADMIN_ADD_TEACHER_REQUESTED})
         const theTeacher=await axios.post("/auth/teacher/add",data)
         if(theTeacher){
             Swal.fire("Teacher Added")
             dispatch(getAllTeachers())

         }

     }
     catch(err){
        dispatch({type:admin.ADMIN_ADD_TEACHER_ERROR,err:err.response.data})
     }
 }

 export const getAllTeachers=()=>async(dispatch)=>{
     try{
         dispatch({type:admin.ADMIN_ADD_TEACHER_REQUESTED})
         const theTeachers=await axios.get("/get/all/teachers")
         if(theTeachers){
             dispatch({type:admin.ADMIN_ADD_TEACHER_SUCCESS,teacher:theTeachers.data})
         }


     }
     catch(err){
         dispatch({type:admin.ADMIN_ADD_TEACHER_ERROR,err:err.response.data})

     }
 }


 export const addStudent=(data)=>async(dispatch)=>{
    try{
        dispatch({type:admin.ADMIN_ADD_STUDENT_REQUESTED})
        const theTeacher=await axios.post("/auth/student/add",data)
        if(theTeacher){
            Swal.fire("Student Added")
            dispatch(getAllStudents())

        }

    }
    catch(err){
       dispatch({type:admin.ADMIN_ADD_STUDENT_ERROR,err:err.response.data})
    }
}

export const getAllStudents=()=>async(dispatch)=>{
    try{
        dispatch({type:admin.ADMIN_ADD_STUDENT_REQUESTED})
        const theStudents=await axios.get("/get/all/students",{headers:{authorization: Cookies.get("e-learningadmintoken")}})
        if(theStudents){
            dispatch({type:admin.ADMIN_ADD_STUDENT_SUCCESS,student:theStudents.data})
        }


    }
    catch(err){
        dispatch({type:admin.ADMIN_ADD_STUDENT_ERROR,err:err.response.data})

    }
}


export const addSubject=(data)=>async(dispatch)=>{
    try{
        dispatch({type:admin.ADMIN_ADD_SUBJECT_REQUESTED})
        const theSubject =  await axios.post('/subject/add',data,{headers:{authorization: Cookies.get("e-learningadmintoken")}})
        if(theSubject){
        dispatch({type:admin.ADMIN_ADD_SUBJECT_SUCCESS})
        Swal.fire("Subject Added")}


    }
    catch (err){
        console.log(err)
        dispatch({ type:admin.ADMIN_ADD_SUBJECT_ERROR,err:err.response.data})

    }
}

export const addTopic=(data)=> async(dispatch)=>{
    try{
        dispatch({ type:admin.ADMIN_ADD_TOPIC_REQUESTED})
        const theTopic = await axios.post(`/topic/add/${data.subject}`,data,{headers:{authorization:Cookies.get("e-learningadmintoken")}})
        if(!theTopic)
        return dispatch({type:admin.ADMIN_ADD_TOPIC_ERROR,err:"Something Went Wrong"})
        dispatch({type:admin.ADMIN_ADD_TOPIC_SUCCESS})
        Swal.fire("Topic Added")


    }
    catch(err){
        return dispatch({type:admin.ADMIN_ADD_TOPIC_ERROR,err:err.response.data})
    }
       
}