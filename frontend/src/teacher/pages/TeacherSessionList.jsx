import React from "react";
import Topbar from "../../global/component/Topbar";
import Sidebar from "../../global/component/Sidebar2";
import { sideBarData } from "../sidebarData";
import { useSelector } from "react-redux";
import NotFound from "../../home/component/NotFound";
import UpcomingSession from "../../global/component/UpcomingSession";
import RecentlyCompleted from "../../global/component/RecentlyCompleted";
function TeacherSessionList() {
  return (
    <div style={{ height: "calc(100vh - 10%)" }}>
      <Topbar />
      <div
        className="mainContainer"
        style={{
          height: "100%",
          display: "grid",
          gridTemplateColumns: "17% 1fr",
        }}
      >
        <div className="sidebarContaine">
          <Sidebar data={sideBarData} />
        </div>
        <div
          className="sidebarContaine"
          style={{ display: "grid", gridTemplateRows: "55% 1fr" }}
        >
          <div className="f11" style={{overflow:"auto",padding:"3%"}}>
            <UpcomingSession />
          </div>
          <div className="f22" style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
              <RecentlyCompleted/>

          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherSessionList;
