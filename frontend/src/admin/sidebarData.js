import {AiFillDashboard} from "react-icons/ai"
import {MdManageAccounts} from "react-icons/md"
import {BiBookReader} from "react-icons/bi"
import {GiTeacher} from "react-icons/gi"
import {FaUsers} from "react-icons/fa"
import {CgUserAdd} from "react-icons/cg"
import {GiBookCover} from "react-icons/gi"
import {HiClipboardList} from "react-icons/hi"
import {MdAddModerator} from "react-icons/md"
import { BsFillBookmarkPlusFill } from "react-icons/bs"
import {Add,TrendingUp} from '@mui/icons-material';
export const sideBarData=[
    {
        icon:<AiFillDashboard/>,
        list:"Dashboard",
        path:"/admin/dashboard",
        dropdown:[]
    },
    {
        icon:<BiBookReader/>,
        list:"Manage Course",
        path:false,
        dropdown:[
             {
            name:"AddCourse",
            icon:<MdAddModerator/>,
            link:"/admin/manage/course/add",
            dropdown:[]
        },
        {
            name:"CourseList",
            icon:<HiClipboardList/>,
            link:"/admin/course/list",
            dropdown:[]
        },
        {
            name:"SyllabusList",
            icon:<GiBookCover/>,
            link:false,
            dropdown:[]
            
        }]
    },
    {
        icon:<MdManageAccounts/>,
        list:"Manage Student",
        path:false,
        dropdown:[{
            name:"AddStudent",
            icon:<CgUserAdd/>,
            link:"/admin/manage/student/add"
        
        },
        {
            name:"StudentList",
            icon:<FaUsers/>,
            link:"/admin/student/list",
            dropdown:[]
            
        }]
    },
    {
        icon:<GiTeacher/>,
        list:"Manage Teacher",
        path:false,
        dropdown:[{
            name:"AddTeacher",
            icon:<CgUserAdd/>,
            link:"/admin/manage/teacher/add"
        
        },
        {
            name:"TeacherList",
            icon:<FaUsers/>,
            link:"/admin/teacher/list",
            dropdown:[]
            
        }]
    },
    {
        icon:<GiTeacher/>,
        list:"Manage Session",
        path:false,
        dropdown:[{
            name:"AddSession",
            icon:<CgUserAdd/>,
            link:"/admin/manage/session"
        
        },
        {
            name:"SessionList",
            icon:<FaUsers/>,
            link:"/admin/manage/session/list",
            dropdown:[]
            
        }]
    },
    {
        icon:<GiTeacher/>,
        list:"Manage Subject&Syllabus",
        path:false,
        dropdown:[{
            name:"AddSubject",
            icon:<BsFillBookmarkPlusFill/>,
            link:"/admin/add/subject"
        
        },
        {
            name:"SubjectList",
            icon:<FaUsers/>,
            link:"/admin/subject/list",
            dropdown:[]
            
        },
        {
            name:"AddTopic",
            icon:<CgUserAdd/>,
            link:"/admin/add/topic"
        
        },
        {
            name:"TopicList",
            icon:<FaUsers/>,
            link:"/admin/topic/list",
            dropdown:[]
            
        },
        {
            name:"Feedback",
            icon:<FaUsers/>,
            link:"/admin/footer",
            dropdown:[]
            
        }]
    }
]