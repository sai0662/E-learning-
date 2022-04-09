import {combineReducers} from "redux"
import adminReducer from "./admin.reducer"
import globalReducer from "./global.reducer"
import { subjectReducer } from "./subjects.reducer"
import {sessionReducer} from "./session.reducer"
const rootReducer=combineReducers({
    adminReducer,subjectReducer,globalReducer,sessionReducer
})
export default rootReducer