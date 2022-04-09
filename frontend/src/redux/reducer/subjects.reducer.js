import * as subject from "../constant/subject.constant"
const initialState={
    isLoading:false,
    err:false,
    subjects:[]
}
export const subjectReducer=(state=initialState,action)=>{
    switch(action.type){
        case subject.SUBJECT_REQUESTED:
            return{
                ...state,
                isLoading:true,
                err:false,
            }
        case subject.SUBJECT_SUCCESS:
            return{
                ...state,
                isLoading:false,
                subjects:action.subjects
            }
        case subject.SUBJECT_ERROR:
            return{
                ...state,
                isLoading:false,
                err:action.err
            }
        default:
             return state
    }
}
