import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import {CircularProgress} from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Input, TextField } from "@mui/material";
import Navbar from "../../global/component/Navbar";
import {useDispatch,useSelector} from "react-redux"
import { loginAdminAction } from "../../redux/actions/admin.action";
import { Navigate } from "react-router-dom";

const AdminLogin = () => {
  const adminState=useSelector((state)=>state.adminReducer)
  console.log(adminState)
  const dispatch=useDispatch()
  const [user,setUser]=useState({
    email:"",
    password:""
  })
  const handleChange=(e)=>{
    const {name,value}=e.target
    setUser({...user,[name]:value})
  }
  const sendLogin=async()=>{
   await dispatch(loginAdminAction(user))
  }
  if(adminState.isLogedin&&adminState.users.role=="admin")
  {
    return <Navigate to={"/admin/dashboard"}/>
  }
  else
  {
  return (
    <>
      <Navbar />
      <div
        style={{
          height: "calc(100vh - 9%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Grid
          container
          component="main"
          style={{
            width: "70%",
            justifyContent: "center",
            boxShadow: "rgba(100, 100, 111, 0.322) 0px 7px 29px 0px",
            minHeight: "65%",
          }}
        >
          <CssBaseline />
          <Grid
            item
            sm={6}
            md={6}
            sx={{
              backgroundImage:
                "url(https://www.igexsolutions.com/wp-content/themes/igexsolutions-child/assets/images/webdevelopment.svg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }} // | second div
          />
          <Grid
          item
            xs={6}
            sm={6}
            md={6}
            component={Paper}
            elevation={8}
            square
            style={{ boxShadow: "none", padding: "3%" }}
          >
            <Typography
              style={{
                fontFamily: "Quicksand,sans-serif",
                fontSize: "30px",
                textAlign: "center",
              }}
            >
              Welcome Back{" "}
            </Typography>
            <Typography
              style={{
                fontFamily: "Quicksand,sans-serif",
                fontSize: "31px",
                textAlign: "center",
              }}
            >
              Admin{" "}
            </Typography>
            <Grid container className="main" spacing={1}>
              <Grid
                item
                md={12}
                sm={12}
                xl={12}
                style={{ marginTop: "2%", borderRadius: "60%" }}
              >
                <TextField fullWidth name="email" value={user.email} label="Enter Email" onChange={handleChange}></TextField>
              </Grid>
              <Grid
                item
                md={12}
                sm={12}
                xl={12}
                style={{ marginTop: "2%", borderRadius: "60%" }}
              >
                <TextField
                  fullWidth
                  type="password"
                  name="password" 
                  value={user.password}
                  label="Enter password"
                  onChange={handleChange}
                ></TextField>
              </Grid>
              <Grid
                item
                md={12}
                sm={12}
                xl={12}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "right",
                }}
              >
                <Button variant="text">Forget Password!?</Button>
              </Grid>
              <Grid
                item
                md={12}
                sm={12}
                xl={12}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "right",
                }}
              >
                {adminState.isLoading?
                <Button variant="contained" style={{ width: "30%",fonSize:"5px",textTransform:"capitalize" }} onClick={sendLogin}>
                 <CircularProgress color="secondary" size={20}/> 
                <b style={{marginLeft:"12px"}}>Wait..</b> 
              </Button>
                :<Button variant="contained" style={{ width: "30%" }} onClick={sendLogin}>
                Login
              </Button>}
                
              </Grid>
              <Grid item sm={12} md={12} xl={12}>
                <b style={{color:"red", fontWeight:"bold"}}>{!adminState.err ?" ":`*${adminState.err} `}</b>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
};

export default AdminLogin;
