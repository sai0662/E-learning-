import * as user from "../constant/admin.Constant";
import axios from "../../axios";
import Cookies from "js-cookie";
import { getSubjects } from "./subject.action";
import { getAllTeachers, getAllStudents } from "./admin.action";
import * as global from "../constant/global.constatnt";
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: user.ADMIN_USER_LOGIN_REQUESTED });
    const theUser = await axios.get("/auth/load/user", {
      headers: { authorization: Cookies.get("e-learningadmintoken") },
    });
    if (theUser)
      dispatch({
        type: user.ADMIN_USER_LOGIN_SUCCESS,
        user: theUser.data.user,
        courses: theUser.data.courses,
        subjects: theUser.data.subjects,
        teachers:theUser.data.teachers
      });
    if (theUser.data.user.role == "admin") dispatch(getAllTeachers());
    if (
      theUser.data.user.role == "admin" ||
      theUser.data.user.role == "teacher"
    ) {
      dispatch(getAllStudents());
      dispatch(getSubjects());
    }
  } catch (err) {
    dispatch({ type: user.ADMIN_USER_LOGIN_ERROR, err: false });
  }
};

export const getfeedback = () => async (dispatch) => {
  try {
    dispatch({ type: global.ADMIN_FEEDBACK_GET_REQUESTED });
    const getData = await axios.get("/getfb", {
      headers: { authorization: Cookies.get("e-learningadmintoken") },
    });
    console.log(getData);
    dispatch({ type: global.ADMIN_FEEDBACK_GET_SUCCESS, data: getData.data });
  } catch (err) {
    dispatch({ type: global.ADMIN_FEEDBACK_GET_ERROR, err: err.response.data });
  }
};

export const getAllNotice = () => async (dispatch) => {
  try{
    dispatch ({ type: global.TEACHER_NOTICE_CREATE_REQUESTEED})
      const getNoticeData = await axios.get("/getnotices", {
        headers:{ authorization:Cookies.get("e-learningadmintoken")}
      });
      console.log(getAllNotice);
      dispatch({ type: global.TEACHER_NOTICE_CREATE_SUCCESS, data:getNoticeData.data});
  }catch(err){
    dispatch({ type:global.TEACHER_NOTICE_CREATE_ERROR, err:err.response.data})

  }
}



export const logOut = () => async (dispatch) => {
  try {
    await Cookies.remove("e-learningadmintoken");
    dispatch({ type: global.LOGOUT });
    return true;
  } catch (err) {}
};
