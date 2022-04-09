import axios from "../../axios"
import Cookie from "js-cookie"
import * as subject from "../constant/subject.constant"
import Swal from "sweetalert2"
export const getSubjects=(data)=>async(dispatch,state)=>{
    try{
        const theState=state().adminReducer
        const course=theState.users.course
        dispatch({type:subject.SUBJECT_REQUESTED})
        const theSubject=await axios.get(`/subject/get/all/${course}`,{headers:{authorization:Cookie.get("e-learningadmintoken")}})
       dispatch({type:subject.SUBJECT_SUCCESS,subjects:theSubject.data})
    }
    catch(err){
        dispatch({type:subject.SUBJECT_ERROR,err:err.response.data})
    }
}

export const updateSubject=(data)=>async(dispatch)=>{
    try{
        const {_id,Name,topics}=data
        dispatch({type:subject.SUBJECT_REQUESTED})
        const theSubject=await axios.post(`/subject/update/${_id}`,{Name,topics},{headers:{authorization:Cookie.get("e-learningadmintoken")}})
        Swal.fire("Topic Updated!")
        dispatch(getSubjects())
    }
    catch(err){
        dispatch({type:subject.SUBJECT_ERROR,err:err.response.data})
        console.log(err)
    }
}