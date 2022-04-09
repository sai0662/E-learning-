import React from 'react'
import Topbar from '../../global/component/Topbar'
import Sidebar from '../../global/component/Sidebar2'
import { sideBarData } from '../sidebarData'
import AddTopic from '../../global/component/AddTopic'
export default function TeacherAddTopic() {
  return (
    <div style={{height:"calc(100vh - 10%)"}}>
        <Topbar/>
        <div className="mainContainer" style={{height:"100%",display:'grid',gridTemplateColumns:"17% 1fr"}}>
            <div className="sidebarContaine">
                <Sidebar data={sideBarData}/>

            </div>
            <div className="sidebarContaine" style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
                <AddTopic/>

            </div>
       
       </div>
        
    </div>

  )
}
