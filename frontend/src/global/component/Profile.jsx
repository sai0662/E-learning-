import React from "react";
import dp from "./Avtar2.jpg";
import { AiFillEdit,AiOutlineRollback } from "react-icons/ai";
import { Button, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import {NavLink} from "react-router-dom"
function Profile() {
    const userState=useSelector((state)=>state.adminReducer)
    console.log(userState)
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <div
        className="profile"
        style={{
          height: "60%",
          width: "70%",
          boxShadow: "rgba(100, 100, 111, 0.151) 0px 7px 29px 0px",
          display: "grid",
          gridTemplateRows: "1fr 23%",
          padding: "1.5%",
        }}
      >
        <div
          className="profileContainer"
          style={{
            height: "100%",
            display: "grid",
            gridTemplateColumns: "42% 1fr",
          }}
        >
          <div
            className="dpConatiner"
            style={{
              height: "100%",
              border: "0px solid red",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexDirection: "column",
            }}
          >
            <img
              src={dp}
              height="85%"
              width="85%"
              style={{ borderRadius: "10px" }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "right",
                width: "85%",
              }}
            >
              <AiFillEdit color="red" alt="edit" size={"26px"} />
            </div>
          </div>
          <div
            className="detailsContainer"
            style={{ height: "100%", paddingLeft: "15%" }}
          >
              <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "right",
              }}
            >
              <AiFillEdit color="red" alt="edit" size={"26px"} />
            </div>
            <Typography
              textAlign={"center"}
              component="h4"
              variant="h4"
              style={{
                textAlign: "center",
                wordSpacing: "7px",
                textTransform: "uppercase",
                fontSize: "25px",
                fontWeight: "bolder",
                color: "#060606",
                textDecoration: "underline",
              }}
            >
              {userState.users.role} Details
            </Typography>
            <Grid container spacing={1} style={{ marginTop: "2%" }}>
              <Grid item sm={12} md={12} xl={12}>
                <h3>
                  Name: <b style={{ fontWeight: 500 }}>{userState.users.fullname}</b>
                </h3>
              </Grid>
              <Grid item sm={12} md={12} xl={12}>
                <h3>
                  Email: <b style={{ fontWeight: 500 }}>{userState.users.email}</b>
                </h3>
              </Grid>
              <Grid item sm={12} md={12} xl={12}>
                <h3>
                  Mobile: <b style={{ fontWeight: 500 }}>{userState.users.mobile}</b>
                </h3>
              </Grid>
              <Grid item sm={12} md={12} xl={12}>
                <h3>
                  Role: <b style={{ fontWeight: 500 }}>{userState.users.role}</b>
                </h3>
              </Grid>
            </Grid>
          </div>
        </div>
        <div
          className="buttonContainer"
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "column",
          }}
        >
          <NavLink to={`/${userState.users.role}/dashboard`} style={{width:"30%",textDecoration:"none"}} ><Button style={{width:"100%",}}  variant="contained" startIcon={<AiOutlineRollback/>}>Go Back</Button></NavLink>
        </div>
      </div>
    </div>
  );
}

export default Profile;
