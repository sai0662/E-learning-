import React, { useState } from "react";
import Topbar from "../../global/component/Topbar";
import Sidebar from "../../global/component/Sidebar2";
import { sideBarData } from "../sidebarData";
import { FormControl, Input, TextareaAutosize } from "@mui/material";
import DatePicker from "@mui/material";
import axios from "../../axios";
import Swal from "sweetalert2";
import { Typography, Grid, TextField, Button } from "@mui/material";
import Cookies from "js-cookie";

const CreateNotice = () => {
  const [notice, setNotice] = useState({
    notice: "",
  });

  const noticeBoardData = (e) => {
    const { name, value } = e.target;
    setNotice({ ...notice, [name]: value });
  };

  const sendNoticeData = async () => {
    try {
      const getNotice = await axios.post("/createnotice", notice, {
        headers: { authorization: Cookies.get("e-learningadmintoken") },
      });
      if(getNotice)
      {
        Swal.fire({ title: 'Success',
          icon: 'success',
          showCloseButton: true,
          cancelButtonText: 'Ok',
          html: `<h3>${getNotice.data}</h3>`,})
          setNotice({notice:""})
      }
    } catch (err) {
      Swal.fire({ title: 'Oops',
        icon: 'error',
        showCloseButton: true,
        cancelButtonText: 'Ok',
        html: `<h3>${err.response.data}</h3>`,})
    }
  };

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
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            padding: "2%",
          }}
        >
          <div
            style={{
              width: "93%",
              minHeight: "78%",
              backgroundColor: "",
              boxShadow: "rgba(100, 100, 111, 0.151) 0px 7px 29px 0px",
              padding: "5%",
            }}
          >
            <Typography
              style={{
                textAlign: "center",
                wordSpacing: "7px",
                textTransform: "uppercase",
                fontSize: "28px",
                fontWeight: "bolder",
                color: "#060606",
              }}
            >
              Create Notice
            </Typography>

            <Grid container spacing={12}>
              <Grid xs={12} md={12} sm={12} lg={12} item style={{marginTop:"3%"}}>
                <TextareaAutosize
                  label="Enter Notice"
                  fullWidth
                  variant="standard"
                  name="notice"
                  value={notice.notice}
                  aria-label="minimum height"
                  minRows={3}
                  placeholder="Write Notice here!"
                  style={{width:"100%"}}
                  onChange={noticeBoardData}
                />
              </Grid>
              <Grid item sm={12} md={12} xl={12} marginTop={3}>
                <Button
                  variant="contained"
                  color={"success"}
                  fullWidth
                  onClick={sendNoticeData}
                >
                  Create Notice
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNotice;
