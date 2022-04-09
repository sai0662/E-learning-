import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getAllNotice } from "../../redux/actions/global.action";
import axios from "../../axios";
import Cookies from "js-cookie";
function NoticeBoard() {
  const [notice,setNotice]=useState({
    notice:"",
    by:"",
    date:""
  })

  useEffect(async () => {
    const thenotice=await axios.get("/getnotices",{
      headers: { authorization: Cookies.get("e-learningadmintoken") },
    }) 
    const {notice,by,date}=thenotice.data
    setNotice({...notice,notice,by,date})
  }, [])
  return (
    <div
      className=""
      style={{
        minHeight: "60%",
        width: "95%",
        boxShadow: "rgba(100, 100, 111, 0.151) 0px 7px 29px 0px",
        backgroundColor: "rgb(0 0 0 / 85%)",
        borderRadius: "8px",
        border: "3px solid green",
        display: "grid",
        gridTemplateRows: "15% 1fr 20%",
      }}
    >
      <Typography
        textAlign={"center"}
        component="h5"
        variant="h5"
        style={{
          textAlign: "center",
          wordSpacing: "7px",
          textTransform: "capitalize",
          fontSize: "22px",
          fontWeight: "bolder",
          color: "red",
        }}
      >
        Notice Board
      </Typography>
      <div>
          <div>
            <div className="containt" style={{ textAlign: "center", padding: "3%" }}>

              <p style={{ color: "yellow" }}>
               {notice.notice}
              </p>
            </div>
            <div
              className="authorContainer"
              style={{
                display: "grid",
                gridTemplateColumns: "50% 50%",
                alignItems: "center",
                padding: "3%",
              }}
            >
              <b style={{ color: "white", justifySelf: "flex-start" }}>{notice.date}</b>
              <b style={{ color: "white", justifySelf: "flex-end" }}>~{notice.by}</b>
            </div>
          </div>
        
      </div>
    </div>
  );
}

export default NoticeBoard;
