import React from 'react'
import Topbar from "../../global/component/Topbar"
import Sidebar from "../../global/component/Sidebar2"
import AddTeacher from "../components/AddTeacher"
import { sideBarData } from '../sidebarData'
import { Grid } from '@mui/material'
import { useSelector } from 'react-redux'
import NotFound from '../../home/component/NotFound'
function AdminAddTeacher() {
  const theState=useSelector((state)=>state.adminReducer)
  if(!theState.isLogedin||theState.users.role!=="admin")
  return <NotFound/>
  else 
  return (
    <div style={{height:"calc(100vh - 10%)"}}>
        <Topbar/>
        <div className="mainContainer" style={{height:"100%",display:'grid',gridTemplateColumns:"17% 1fr"}}>
            <div className="sidebarContaine">
                <Sidebar data={sideBarData}/>

            </div>
            <div className="sidebarContaine" style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
                <AddTeacher/>

            </div>
       
       </div>
        
    </div>
  )
}

export default AdminAddTeacher
