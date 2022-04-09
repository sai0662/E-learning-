import React from 'react'
import Topbar from '../../global/component/Topbar'
import Sidebar from '../../global/component/Sidebar2'
import { sideBarData } from '../sidebarData'
import { useSelector } from 'react-redux'
import NotFound from '../../home/component/NotFound'
import AddSession from '../../global/component/AddSession'
export default function TeacherAddSession() {
  return (
    <div style={{height:"100%"}}>
        <Topbar/>
        <div className="mainContainer" style={{height:"calc(100vh - 10%)",display:'grid',gridTemplateColumns:"17% 1fr"}}>
            <div className="sidebarContaine">
                <Sidebar data={sideBarData}/>

            </div>
            <div className="sidebarContaine" style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
                <AddSession/>

            </div>
       
       </div>
        
    </div>
  )
}
