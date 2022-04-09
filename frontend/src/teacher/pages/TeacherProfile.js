import React from 'react'
import { CircularProgress, Grid, Button, Typography, TextField, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import img from "../../global/component/Avtar2.jpg";
import { width } from '@mui/system';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllStudents } from '../../redux/actions/admin.action';
import Navbar from '../../global/component/Navbar';
import { sideBarData } from '../sidebarData';
import TeacherNavbar from './TeacherNavbar';


const TeacherProfile = () => {
    const adminState=useSelector((state)=>state.adminReducer)
    // console.log(adminState)
  return (
 <div >
 <TeacherNavbar/>
             {/* <StudentNavbar list={sideBarData}/> */}
            <div
                style={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    marginTop:'100px'
                }}
            >

                <div
                    style={{
                        height: "78%",
                        backgroundColor: "",
                        boxShadow: "rgba(100, 100, 111, 0.151) 0px 7px 29px 0px",
                    }}
                >
                    

                    <Typography
                        component="h3"
                        variant="h3"
                        style={{
                            textAlign: "center",
                            wordSpacing: "7px",
                            textTransform: "uppercase",
                            fontSize: "28px",
                            fontWeight: "bolder",
                            color: "#060606",

                        }}
                    >
                        Student Information
                    </Typography>
                    <Grid>
                        <img src={img} height={140} width={140} style={{ borderRadius: '50%', marginLeft: '38%', marginTop: '10px' }} >

                        </img>
                    </Grid>
                    <Grid m={5}>
                            
                            <div>
                                <div style={{ display: "flex" }}>
                                    <Typography fontSize={25}> Fullname :</Typography>
                                    <Typography fontSize={25} marginLeft={1}>{adminState.users.fullname}</Typography>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <Typography fontSize={25}> Email :</Typography>
                                    <Typography fontSize={25} marginLeft={1} >{adminState.users.email}</Typography>
                                </div>
                               
                                <div style={{ display: "flex" }}>
                                    <Typography fontSize={25}> Semister :</Typography>
                                    <Typography fontSize={25} marginLeft={1} > </Typography>
                                </div>

                                <div style={{ display: 'flex' }}>
                                    <Typography fontSize={25} > Mobile No :</Typography>
                                    <Typography fontSize={25} marginLeft={1}>{adminState.users.mobile}</Typography>

                                </div>
                                <div style={{ display: 'flex' }}>
                                    <Typography fontSize={25} > Email Id :  </Typography>
                                    <Typography fontSize={25} marginLeft={1}>{}</Typography>

                                </div>
                                <div style={{ display: 'flex' }}>
                                    <Typography fontSize={25} > Subjects :  </Typography>
                                    <Typography fontSize={25} marginLeft={1}>{}</Typography>

                                </div>
                                
                                
                            </div>

                    </Grid>
                    <Link to="/teacher/dashboard">
                        <Button variant='contained' sx={{ borderRadius: '50px', backgroundColor: '#5913B0', height: '40px', width: '115px' }} >Back</Button>
                    </Link>
                </div>

            </div>
    </div>
  )
}

export default TeacherProfile;