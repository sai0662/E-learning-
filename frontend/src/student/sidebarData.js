import {AiFillDashboard} from "react-icons/ai"
import {MdManageAccounts,MdQuiz,MdAssignment} from "react-icons/md"
import {BiBookReader} from "react-icons/bi"
import {GiTeacher} from "react-icons/gi"
import {GrNotes} from "react-icons/gr"
import {FaUsers} from "react-icons/fa"
import {BsFillCalendarCheckFill} from "react-icons/bs"
export const sideBarData=[
    {
        icon:<AiFillDashboard/>,
        list:"Dashboard",
        path:"/student/dashboard",
        dropdown:[]
    },
    {
        icon:<GiTeacher/>,
        list:"Session",
        path:"/student/session",
        dropdown:[]
    },
    {
        icon:<BsFillCalendarCheckFill/>,
        list:"Attendance",
        path:"/student/attendance",
        dropdown:[]
    },
    {
        icon:<MdQuiz/>,
        list:"Quiz",
        path:"/student/auiz",
        dropdown:[]
    },
    
    
    {
        icon:<GrNotes/>,
        list:"Notes",
        path:"/student/session",
        dropdown:[]
    },
    
    {
        icon:<MdAssignment/>,
        list:"Assignment",
        path:"/student/session",
        dropdown:[]
    },
    

    
]