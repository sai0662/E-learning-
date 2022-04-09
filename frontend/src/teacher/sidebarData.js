import { AiFillDashboard } from "react-icons/ai"
import { MdManageAccounts } from "react-icons/md"
import { BsFillBookmarkPlusFill, BsFillBookmarksFill } from "react-icons/bs"
import { GiTeacher } from "react-icons/gi"
import { FaUsers } from "react-icons/fa"
import { CgUserAdd } from "react-icons/cg"
import { GiBookCover, GiNotebook } from "react-icons/gi"
import { HiClipboardList } from "react-icons/hi"
import { MdAddModerator, MdOutlineCollections } from "react-icons/md"
import { Add, TrendingUp } from '@mui/icons-material';
import { HiOutlineClipboardCheck } from 'react-icons/hi'
export const sideBarData = [
    {
        icon: <AiFillDashboard />,
        list: "Dashboard",
        path: "/teacher/dashboard",
        dropdown: []
    },
    {
        icon: <MdManageAccounts />,
        list: "Manage Student",
        path: false,
        dropdown: [{
            name: "AddStudent",
            icon: <CgUserAdd />,
            link: "/teacher/student/add"

        },
        {
            name: "StudentList",
            icon: <FaUsers />,
            link: "/teacher/student/list",
            dropdown: []

        }]
    },
    {
        icon: <GiTeacher />,
        list: "Manage Attendance",
        path: false,
        dropdown: [{
            name: "TakeAttendance",
            icon: <CgUserAdd />,
            link: "/teacher/manage/attendance"

        },
        {
            name: "ModifyAttendance",
            icon: <FaUsers />,
            link: "/admin/manage/session/list",
            dropdown: []

        }]
    },
    {
        icon: <GiTeacher />,
        list: "Manage Session",
        path: false,
        dropdown: [{
            name: "AddSession",
            icon: <CgUserAdd />,
            link: "/teacher/create/session"

        },
        {
            name: "SessionList",
            icon: <FaUsers />,
            link: "/teacher/manage/session",
            dropdown: []

        }]
    },
    {
        icon: <GiTeacher />,
        list: "Manage Subject & Syllabus",
        path: false,
        dropdown: [{
            name: "AddSubject",
            icon: <BsFillBookmarkPlusFill />,
            link: "/teacher/add/subject"

        },
        {
            name: "SubjectList",
            icon: <BsFillBookmarksFill />,
            link: "/teacher/subject/list",
            dropdown: []

        },
        {
            name: "AddTopic",
            icon: <GiNotebook />,
            link: "/teacher/add/topic"

        },
        {
            name: "TopicList",
            icon: <MdOutlineCollections />,
            link: "/teacher/topic/list",
            dropdown: []

        },
        ]

    },
    {

        icon: <GiTeacher />,
        list: "Create Notice",
        path: false,
        dropdown: [{
            name: "Create Notice",
            icon: <HiOutlineClipboardCheck />,
            link: "/teacher/notice",

        }]

    }

]