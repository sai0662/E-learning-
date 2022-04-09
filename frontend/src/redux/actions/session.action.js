import * as session from "../constant/session.constant";
import axios from "../../axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2"
export const createSession = (data) => async(dispatch) => {
    try{
        
  const { sessionName, subject, topic, subtopic, date, fromtime,totime, isCostom } = data;
  console.log(data)
  if (!date)
    return dispatch({
      type: session.SESSION_ERROR,
      key: "date",
      err: "This is required Field*",
    });
  if (!fromtime)
    return dispatch({
      type: session.SESSION_ERROR,
      key: "time",
      err: "This is required Field*",
    });
    if (!totime)
    return dispatch({
      type: session.SESSION_ERROR,
      key: "totime",
      err: "This is required Field*",
    });

  const isValidDateAndTime = dispatch(isFutureDateAndTime(date, fromtime,totime));
  console.log(isValidDateAndTime);
  if (isValidDateAndTime !== true) return;

  if (isCostom) {
    if (!sessionName)
      return dispatch({
        type: session.SESSION_ERROR,
        key: "sessionName",
        err: "This is required Field*",
      });
    if (!subject)
      return dispatch({
        type: session.SESSION_ERROR,
        key: "subject",
        err: "This is required Field*",
      });
      const dataToSend={sessionname:sessionName,subject,date,fromtime,totime,isCostom}
      // console.log(dataToSend)
      dispatch({type:session.SESSION_REQUESTED})
      const theSession=await axios.post("/session",dataToSend,{headers:{authorization: Cookies.get("e-learningadmintoken")}})
      if(theSession){
          Swal.fire({ title: 'Success',
          icon: 'success',
          showCloseButton: true,
          cancelButtonText: 'Ok',
          html: `<h3>${theSession.data}</h3>`,})
          return true
      }
      
  } else {
    if (!subject)
    return dispatch({
      type: session.SESSION_ERROR,
      key: "subject",
      err: "This is required Field*",
    });
    if (!topic)
    return dispatch({
      type: session.SESSION_ERROR,
      key: "topic",
      err: "This is required Field*",
    });
    if (!subtopic)
    return dispatch({
      type: session.SESSION_ERROR,
      key: "subtopic",
      err: "This is required Field*",
    });
    const dataToSend={subject,topic,subtopic,date,fromtime,totime,isCostom}
    console.log(dataToSend)
    dispatch({type:session.SESSION_REQUESTED})
    const theSession=await axios.post("/session",dataToSend,{headers:{authorization: Cookies.get("e-learningadmintoken")}})
    if(theSession){
        Swal.fire({ title: 'Success',
        icon: 'success',
        showCloseButton: true,
        cancelButtonText: 'Ok',
        html: `<h3>${theSession.data}</h3>`,})
        return true
    }

  }
  
}
catch(err){
    Swal.fire({ title: 'Oops',
        icon: 'error',
        showCloseButton: true,
        cancelButtonText: 'Ok',
        html: `<h3>${err.response.data}</h3>`,})
}
return false
};

const isFutureDateAndTime = (date, fromtime,totime) => (dispatch) => {
  const currentDate = new Date().toLocaleString();
  const dateAndTime = currentDate.split(",");
  const theDate = dateAndTime[0];
  const theFullDate = theDate.split("/");
  const theGivenDate = date.split("-");
  const theGivenTime = fromtime.split(":");
  const theGivenToTime = totime.split(":");

  const theTime = new Date().toLocaleTimeString("en-IN", {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
  });
  const theFullTime = theTime.split(":");
  //    checking valid year or Not
  if (theGivenDate[0] - theFullDate[2] < 0)
    return dispatch({
      type: session.SESSION_ERROR,
      key: "date",
      err: "can't enter past year*",
    });
  //    checking valid months or Not
  if (
    theGivenDate[1] - theFullDate[0] < 0 &&
    theGivenDate[0] - theFullDate[2] == 0
  )
    return dispatch({
      type: session.SESSION_ERROR,
      key: "date",
      err: "can't enter past months*",
    });
  //    checking valid date or Not
  if (
    theGivenDate[2] - theFullDate[1] < 0 &&
    theGivenDate[1] - theFullDate[0] == 0 &&
    theGivenDate[0] - theFullDate[2] == 0
  )
    return dispatch({
      type: session.SESSION_ERROR,
      key: "date",
      err: "can't enter past date*",
    });
  //    checking valid hour or Not
  if (theFullTime[0] == 24) theFullTime[0] = 0;
  console.log(theGivenTime[0] - theFullTime[0]);
  if (
    theGivenTime[0] - theFullTime[0] < 0 &&
    theGivenDate[1] - theFullDate[0] == 0 &&
    theGivenDate[0] - theFullDate[2] == 0 &&
    theGivenDate[2] - theFullDate[1] == 0
  )
    return dispatch({
      type: session.SESSION_ERROR,
      key: "time",
      err: "can't enter past hour*",
    });
  //    checking valid minute or Not
  console.log(theGivenTime[1] - theFullTime[1]);
  if (
    theGivenTime[1] - theFullTime[1] < 0 &&
    theGivenDate[1] - theFullDate[0] == 0 &&
    theGivenDate[0] - theFullDate[2] == 0 &&
    theGivenDate[2] - theFullDate[1] == 0 &&
    theGivenTime[0] - theFullTime[0] == 0
  )
    return dispatch({
      type: session.SESSION_ERROR,
      key: "time",
      err: "can't enter past minute*",
    });
    console.log(theGivenToTime,theGivenTime)
    if(theGivenTime[0]>theGivenToTime[0]){
      console.log("if")
    return dispatch({
      type: session.SESSION_ERROR,
      key: "totime",
      err: "time should be greater than from time*",
    });}
    if(theGivenToTime[1]-theGivenTime[1]<20&&theGivenTime[0]>=theGivenToTime[0])
    return dispatch({
      type: session.SESSION_ERROR,
      key: "totime",
      err: "You can't create meeting less than 20min*",
    });

  return true;
};





export const getSessionListByClass=()=>async(dispatch)=>{
  try{
    dispatch({type:session.SESSION_REQUESTED})
    const data=await axios.get("/getsession",{headers:{authorization: Cookies.get("e-learningadmintoken")}})
    dispatch({type:session.SESSION_SUCCESS,session:data.data})

  }
  catch(err){
    console.log(err)
    dispatch({type:session.SESSION_ERROR,key:"backend",err:err.response.data})
  }
}