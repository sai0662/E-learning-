import Cookie from "js-cookie";
import * as admin from "../constant/admin.Constant";
import * as global from "../constant/global.constatnt";

const initialState = {
  isLogedin: false,
  isLoading: false,
  users: {},
  courses: [],
  err: false,
  token: Cookie.get("e-learningadmintoken"),
  teachers: [],
  students: [],
  subjects:[]
};
const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case admin.ADMIN_USER_LOGIN_REQUESTED:
      return {
        ...state,
        isLoading: true,
        err: false,
      };
    case admin.ADMIN_USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLogedin: true,
        users: action.user,
        courses: action.courses,
        subjects:action.subjects,
        teachers:action.teachers,
        token: Cookie.get("e-learningadmintoken"),
      };
    case admin.ADMIN_USER_LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        err: action.err,
      };
    case admin.ADMIN_COURSE_REQUESTED:
      return {
        ...state,
        isLoading: true,
        err: false,
      };
    case admin.ADMIN_COURSE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        courses: action.course,
      };
    case admin.ADMIN_COURSE_ERROR:
      return {
        ...state,
        isLoading: false,
        err: action.err,
      };
    case admin.ADMIN_ADD_TEACHER_REQUESTED:
      return {
        ...state,
        isLoading: true,
        err: false,
      };
    case admin.ADMIN_ADD_TEACHER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        teachers: action.teacher,
      };
    case admin.ADMIN_ADD_TEACHER_ERROR:
      return {
        ...state,
        isLoading: false,
        err: action.err,
      };
    case admin.ADMIN_ADD_STUDENT_REQUESTED:
      return {
        ...state,
        isLoading: true,
        err: false,
      };
    case admin.ADMIN_ADD_STUDENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        students: action.student,
      };
    case admin.ADMIN_ADD_STUDENT_ERROR:
      return {
        ...state,
        isLoading: false,
        err: action.err,
      };
    case global.LOAD_USER_REQUESTED:
      return{
        ...state,
        isLoading:true,
        err:false
      }
      case global.LOAD_USER_SUCCESS:
        return{
          ...state,
          isLoading:false,
          isLogedin:true,
          users:action.payload.user,
          token: Cookie.get("e-learningadmintoken"),
        }
        case global.LOAD_USER_ERROR:
          return{
            ...state,
            isLoading:false,
            err:action.err
          }
         case admin.ADMIN_ADD_SUBJECT_REQUESTED:
           return{
             ...state,
             isLoading:true,
             err:false

           }
           case admin.ADMIN_ADD_SUBJECT_SUCCESS:
           return{
             ...state,
             isLoading:false,
           }
           case admin.ADMIN_ADD_SUBJECT_ERROR:
           return{
             ...state,
             isLoading:false,
             err:action.err
           }
           case admin.ADMIN_ADD_TOPIC_REQUESTED:
              return {
                ...state,
                isLoading:true,
                err:false,
              }
          case admin.ADMIN_ADD_TOPIC_SUCCESS:
            return{
              ...state,
              isLoading:false,
            }
          case admin.ADMIN_ADD_TOPIC_ERROR:
            return{
              ...state,
              isLoading:false,
              err:action.err
            }  
          case global.LOGOUT:
            return{
              ...state,
              isLogedin: false,
              isLoading: false,
              users: {},
              courses: [],
              err: false,
              token: Cookie.get("e-learningadmintoken"),
              teachers: [],
              students: [],
              subjects:[]
            }
       

    default:
      return state;
  }
};
export default adminReducer;
