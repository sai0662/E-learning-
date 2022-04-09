import * as session from "../constant/session.constant"
const initialState={
    session:[],
    loading:false,
    err:false
}
export const sessionReducer=(state=initialState,action)=>{
    switch(action.type){
        case session.SESSION_REQUESTED:
            return{
                ...state,
                loading:true,
                err:false
            }
        case session.SESSION_SUCCESS:
            return{
                ...state,
                loading:false,
                session:action.session
            }
        case session.SESSION_ERROR:
            return{
                ...state,
                loading:false,
                err:{[action.key]:action.err}
            }
        default:
            return state
    }
}