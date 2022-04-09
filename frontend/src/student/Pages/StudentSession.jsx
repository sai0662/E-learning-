import React, { useState } from 'react'
import StudentNavbar from "./StudentNavbar";
import { sideBarData } from "../sidebarData";
import { useSelector} from 'react-redux';
import TopicsList from '../components/TopicsList';
import UpcomingSession from '../../global/component/UpcomingSession';
import RecentlyCompleted from '../../global/component/RecentlyCompleted';
function StudentSession() {
  return (
    <div style={{height:"100%"}}>
      <StudentNavbar list={sideBarData}/>
      <div className="mainContainer" style={{height:"calc(100vh - 10%" ,display:"grid",gridTemplateColumns:"30% 1fr"}}>
          <div className="container1">
              <TopicsList/>

          </div>
          <div className="totalSessAndComSessCon" style={{backgroundColor:"",display:"grid",gridTemplateRows:"55% 1fr"}}>
            <div className="umComCon" style={{padding:"3%" ,overflow:"auto"}}>
            <UpcomingSession/>
            </div>
            <div className="recentlyCon" style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
              <RecentlyCompleted/>

            </div>
            

          </div>
          
      </div>
      </div>
  )
}

export default StudentSession