import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import axios from "../../../axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom"
function LinkUploadModal({ linkModal, onClick }) {
  const [meetingUrl, setMeetingUrl] = useState();
  const [meetId, setMeetId] = useState(false);
  const [err, seErr] = useState(false);
  const sendUrl = async () => {
    try {
      seErr(false);
      const theMeeting = await axios.post(
        "/meet/add",
        { session: linkModal.sessionId, meetUrl: meetingUrl },
        { headers: { authorization: Cookies.get("e-learningadmintoken") } }
      );
      onClick(!linkModal.status);
      Swal.fire(`${theMeeting.data}`, "", "success");
    } catch (err) {
      seErr(err.response.data);
    }
  };
  const updateURL = async () => {
    try {
      const updatedUrl = await axios.patch(
        `/meet/update/${meetId}`,
        {meetingUrl},
        { headers: { authorization: Cookies.get("e-learningadmintoken") } }
      );
      if(updateURL)
      {
        Swal.fire(`${updatedUrl.data}`, "", "success");
        onClick(!linkModal.status);
      }
    } catch (err) {
      console.log(err);
      seErr(err.response.data);
    }
  };
  useEffect(async () => {
    const isUploaded = await axios.get(`/meet/get/${linkModal.sessionId}`, {
      headers: { authorization: Cookies.get("e-learningadmintoken") },
    });
    if (isUploaded.data) {
      setMeetingUrl(isUploaded.data.meetingUrl);
      setMeetId(isUploaded.data._id);
    }
  }, []);
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 10,
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        backgroundColor: "rgba(0, 0, 0, 0.411)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <div
        className="mainModal"
        style={{
          height: "40%",
          width: "55%",
          backgroundColor: "white",
          borderRadius: "15px",
          boxShadow: "0px 3px 14px #0000000f",
          display: "grid",
          gridTemplateRows: "50% 50%",
          padding: "2%",
        }}
      >
        <div
          className="linkCon"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            padding: "5%",
          }}
        >
          {meetingUrl ? (
            <TextField
              fullWidth
              label=" "
              value={meetingUrl}
              onChange={(e) => {
                setMeetingUrl(e.target.value);
              }}
            />
          ) : (
            <TextField
              fullWidth
              label="Paste Link Here!"
              value={meetingUrl}
              onChange={(e) => {
                setMeetingUrl(e.target.value);
              }}
            />
          )}
        </div>
        <div
          className="btnCon"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "5%",
          }}
        >
          <Button
            width="30%"
            color="error"
            variant="contained"
            onClick={() => {
              onClick({ status: !linkModal.status });
            }}
          >
            Cancle
          </Button>
          {meetingUrl&&meetId ? (
            <Button width="30%" color="success" variant="contained" onClick={updateURL}>
              Change
            </Button>
          ) : (
            <Button
              width="30%"
              color="success"
              variant="contained"
              onClick={sendUrl}
            >
              Upload
            </Button>
          )}
        </div>
        <div style={{ textAlign: "Center", color: "red" }}>
          {err ? `* ${err}` : ``}
        </div>
      </div>
    </div>
  );
}

export default LinkUploadModal;
