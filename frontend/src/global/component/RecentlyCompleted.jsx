import React from 'react'

function RecentlyCompleted() {
  return (
    <div style={{width:"95%",height:"90%",boxShadow: "rgba(100, 100, 111, 0.151) 0px 7px 29px 0px",background:"#f2f2f2 0% 0% no-repeat padding-box",display:"grid",gridTemplateRows:"15% 1fr",padding:"1%",overflow:"auto"}}>
        <div className="RecentHeader" style={{display:"flex",alignItems:"center",fontSize:"20px",fontWeight:"bold"}}>
            Recently Completed Sessions:-

        </div>
        <div className="listContainer" style={{backgroundColor:""}}>

        </div>

    </div>
  )
}

export default RecentlyCompleted