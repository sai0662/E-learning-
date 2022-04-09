import React, { useEffect, useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import axios from "../../axios";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import LinkUploadModal from "./modal/LinkUploadModal";
function UpcomingSession() {
  const theUserState = useSelector((state) => state.adminReducer);
  const [linkModal,setLinkModal]=useState(
    {
      status:false,
      sessionId:false
    }
  )
  const [session, setSession] = useState([]);
  useEffect(async () => {
    try {
      const sessionData = await axios.get("/get/upcoming", {
        headers: { authorization: Cookies.get("e-learningadmintoken") },
      });
      setSession(sessionData.data);
    } catch (err) {}
  }, [linkModal]);
  return (
    <>
      {session.map((ses, k) => (
        <div
          className="mainContainrt"
          style={{
            height: "",
            backgroundColor: "",
            borderRadius: "70px",
            boxShadow: "0px 3px 14px #0000000f",
            display: "grid",
            gridTemplateColumns: `8% 1fr 30% 13% ${
              theUserState.users.role == `teacher` ? "13%" : ""
            }`,
            padding: "15px 20px",
            margin: "1%",
            border: `${ses.isLive ? "2px solid red" : ""}`,
          }}
        >
          <div
            className="msgContainer"
            style={{
              backgroundColor: "",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <AiOutlineMessage
              size={"65px"}
              color={`${ses.isLive ? "red" : "green"}`}
            />
          </div>
          <div
            className="detailsContainer"
            style={{
              backgroundColor: "",
              display: "grid",
              gridTemplateRows: "50% 50%",
            }}
          >
            <div
              className="sessionStatusContainer"
              style={{
                backgroundColor: "",
                display: "flex",
                alignItems: "center",
              }}
            >
              <h4
                style={{
                  font: "600 20px/34px sans-serif",
                  color: `${ses.isLive ? "red" : "green"}`,
                }}
              >
                {ses.isLive ? "Live" : "Upcoming Session"}
              </h4>
            </div>
            <div
              className="topicNameContainer"
              style={{
                backgroundColor: "",
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
              }}
            >
              <h5 style={{ color: "", font: "Bold 17px sans-serif" ,display:"flex",flexDirection:"column"}}>
                <div className="sub">Subject:{ses.subject}</div> 
                <div className="top"> Topic: {ses.topic}</div>
              </h5>
            </div>
          </div>
          <div
            className="dateAndTimeContainer"
            style={{
              backgroundColor: "",
              display: "grid",
              gridTemplateRows: "50% 50%",
              font: "Normal 16px/26px sans-serif",
              textAlign: "center",
            }}
          >
            <div className="time">
              {ses.fromtime.time} - {ses.totime.time}
            </div>
            <div className="date">{ses.fromtime.date}</div>
          </div>
          <div
            className="btnContainer"
            style={{
              backgroundColor: "",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <div
              class="status"
              style={{
                minWidth: "70%",
                background: `${
                  ses.isLive
                    ? "red 0% 0% no-repeat padding-box"
                    : "#DCD4D4 0% 0% no-repeat padding-box"
                }`,
                border: "1px solid #C6BFBF",
                borderRadius: "24px",
                font: "Normal 14px/22px sans-serif",
                padding: "3%",
                color: `${ses.isLive ? "white" : ""}`,
                textAlign: "center",
                cursor: `${ses.isLive && ses.isLink ? "pointer" : ""}`,
              }}
            >
              {ses.isLive && ses.isLink ?<a href={ses.isLink} target="_blank" color="white" style={{textDecoration:"none",color:"white",width:"100%",height:"100%",backgroundColor:"",display:"block"}}>JOIN</a>  : "SCHEDULED"}
            </div>
          </div>
          <div
            className="btnContainer2"
            style={{
              backgroundColor: "",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            {theUserState.users.role == "teacher" ? (
              <div
                className="uploadSession"
                style={{minWidth: "70%",
                  background: "#DCD4D4 0% 0% no-repeat padding-box",
                  border: "1px solid #C6BFBF",
                  borderRadius: "24px",
                  font: "Normal 14px/22px sans-serif",
                  padding: "3%",
                  textAlign: "center",
                  cursor: "pointer",
                }}
                onClick={()=>{setLinkModal({status:!linkModal.status,sessionId:ses._id})}}
              >
                LINK
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
     {linkModal.status?<LinkUploadModal linkModal={linkModal} onClick={setLinkModal} />:<></>}
    </>
  );
}

export default UpcomingSession;
