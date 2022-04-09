import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import OTPInput, { ResendOTP } from "otp-input-react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RefreshIcon from "@mui/icons-material/Refresh";
import Navbar from "../../global/component/Navbar";
import { CircularProgress } from "@mui/material";
import { display } from "@mui/system";
import { FormControl, FormLabel } from "@mui/material";
import axios from "../../axios"
import Swal from "sweetalert2"
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { loadUser } from "../../redux/actions/global.action";
import { getSubjects } from "../../redux/actions/subject.action";
import {useDispatch, useSelector} from "react-redux"
const TeachLogin = () => {
  const dispatch=useDispatch()
  const theState=useSelector((state)=>state.adminReducer)
  const [emailOrMobile,setEmailOrMobile]=useState("")
  const [otp,setOtp]=useState()
  const [toggle,setToggle]=useState(false)
  const [errmsg,setErrmsg]=useState(false)
  const [succMsg,setSuccMsg]=useState({msg:false,verifyToken:false})
  const [loading,setLoading]=useState(false)
  const setData=(e)=>{setEmailOrMobile(e.target.value)}
  const sendOtp=async()=>{
    try{
      setOtp("")
      setErrmsg(false)
      setLoading(true)
        const res=await axios.post("/auth/teacher/otp",{emailOrMobile})
        if(res.data){
          setLoading(false)
          setSuccMsg({...succMsg,msg:res.data.msg,verifyToken:res.data.verifyToken})
          setToggle(true)
        }
    }
    catch(err){
      setLoading(false)
      setErrmsg(err.response.data)

    }
  }

  const verifyOtp=async()=>{
    try{
      setLoading(true)
      setErrmsg(false)
      const res=await axios.post(`/auth/verify/otp/${succMsg.verifyToken}`,{otp})
      setLoading(false)
      Cookies.set("e-learningadmintoken",res.data.token)
      await dispatch({type:"ADMIN_USER_LOGIN_SUCCESS",user:res.data.user,courses:res.data.courses,subjects:res.data.subjects})
      await dispatch(getSubjects())
      Swal.fire("Verifyed!")

    }
    catch(err){
      setLoading(false)
      setErrmsg(err.response.data)
    }
  }
  if(theState.isLogedin)
  {
    if(theState.users.role!="teacher")
    {
      return (<h1>404</h1>)

    }
    return <Navigate to={'/teacher/dashboard'}/>
    

  }
  else
  {
  return (
    <>
      <Navbar />
      <div
        style={{
          width: "100%",
          height: "calc(100vh - 13%)",
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
              backgroundImage: "url(https://source.unsplash.com/random)",
              backgroundImage:
                "url(https://www.igexsolutions.com/wp-content/themes/igexsolutions-child/assets/images/webdevelopment.svg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0.01px solid black",
            }}
          />
          <Grid
            item
            sm={6}
            md={6}
            component={Paper}
            elevation={6}
            square
            style={{ boxShadow: "none", padding: "3%" }}
          >
            <Typography
              style={{
                textTransform: "uppercase",
                textAlign: "center",
                fontWeight: "800",
                fontFamily: "Quicksand,sans-serif",
                fontSize: "25px",
                marginBottom: "2%",
              }}
            >
              Teacher Login
            </Typography>
            <Grid container spacing={2}>
            {!toggle?<>
              <Grid item sm={12} md={12} xl={12} style={{marginTop:"10%"}}>
              <TextField
                required
                id="email"
                label="Enter Email or mobile"
                onChange={setData}
                name="email"
                autoComplete="email"
                autoFocus
                fullWidth
              />
              </Grid>
              <Grid item sm={12} md={12} xl={12} left="30%">
                <div style={{width:"100%",display:"flex",justifyContent:"right"}}>
                  {loading?
                 <CircularProgress/>
                 :
                 <Button 
                   variant='contained'
                   style={{
                       borderRadius:'20px'
                       }}
                       onClick={sendOtp}
                       >Send Otp
                </Button>
                } 
                </div>
                </Grid>
                <Grid item sm={12} md={12} xl={12} left="30%">
                  {!errmsg?" ":<b style={{color:"red"}}>{`*${errmsg}`}</b>}
                </Grid>
                </>
                :
                <>
              <Grid item sm={12} md={12} xl={12} textAlign="center">
                <h3>{succMsg.msg} <Button variant="text" onClick={()=>{setErrmsg(false);setToggle(false);setOtp("")}}>change</Button></h3>
              </Grid>
              <Grid item sm={12} md={12} xl={12} marginTop="2%">
                <div
                  style={{
                    display: "flex",
                    alighItem: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <OTPInput OTPLength={4} value={otp} onChange={(e)=>{setOtp(e)}} OTPType={Number} />
                </div>
              </Grid>
              <Grid item sm={6} md={6} xl={6} marginTop="5%">
                
                <Button
                  variant="contained"
                  style={{ borderRadius: "20px", backgroundColor: "#D8240F" ,marginLeft:"30%" }}
                  onClick={()=>{Swal.fire("Otp Resended!");sendOtp()}}
                >
                  <RefreshIcon />
                  Resend
                </Button>
              </Grid>
              <Grid item sm={6} md={6} xl={6} marginTop="5%">
                {loading
                ?
                <div style={{textAlign:"center"}}><CircularProgress/></div>
                :
                <Button variant="contained" onClick={verifyOtp} style={{ borderRadius: "20px" }}>
                  <CheckCircleIcon />
                  Verify
                </Button>
                }
              </Grid>
              <Grid item sm={12} md={12} xl={12} left="30%">
                  {!errmsg?" ":<b style={{color:"red"}}>{`*${errmsg}`}</b>}
                </Grid>
              </>
              }
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
};

export default TeachLogin;
