import React, { useState } from 'react';
import {Typography,Grid, FormControl, Input, TextField,MenuItem,Select,InputLabel,Button} from "@mui/material"
import { useDispatch,useSelector } from 'react-redux';
import { addCourse } from '../../redux/actions/admin.action';
import {CircularProgress} from "@mui/material"
export default function AddCourse() {
  const dispatch=useDispatch()
  const adminState=useSelector((state)=>state.adminReducer)
   const [course,setCourse]=useState({
    courseName:"",
    noOfYear:null,
    noOfSem:null,
   })
   const handleChange=(e)=>{
       const {name,value}=e.target
       setCourse({...course,[name]:value})
   }
   const send=async()=>{
     await dispatch(addCourse(course))
     setCourse({
      courseName:"",
      noOfYear:null,
      noOfSem:null,
     })
    }

  return <div style={{width:"80%",height:"80%",padding:"2%",boxShadow: "rgba(100, 100, 111, 0.151) 0px 7px 29px 0px"}}>
      <Typography component="h4"
            variant="h3"
            style={{ textAlign: "center" ,wordSpacing:"7px" ,textTransform:"uppercase" ,fontSize:"30px",fontWeight:"bolder" ,color:"#060606"}}>
                Add Course
</Typography>
<Grid container  spacing={8} style={{marginTop:"0.4%"}}>
    <Grid item lg="12" md="12">
            <TextField fullWidth name='courseName' label="Course Name" variant='standard' onChange={handleChange}  autoCorrect="false" value={course.courseName} size="medium" style={{fontSize:"30px"}}></TextField>

    </Grid>
    <Grid item lg="6" md="6">
<FormControl fullWidth>
    <InputLabel>Number Of Year</InputLabel>
  <Select label="Number Of Year" name='noOfYear' value={course.noOfYear} onChange={handleChange}>
    <MenuItem value={1}>One</MenuItem>
    <MenuItem value={2}>Two</MenuItem>
    <MenuItem value={3}>Three</MenuItem>
    <MenuItem value={4}>Four</MenuItem>
  </Select>
</FormControl>

    </Grid>
    <Grid item lg="6" md="6">
    <FormControl fullWidth>
    <InputLabel>Sem Each Year</InputLabel>
  <Select label="Number Of Year" name='noOfSem'  value={course.noOfSem} onChange={handleChange}>
    <MenuItem value={0}>Zero</MenuItem>
    <MenuItem value={1}>One</MenuItem>
    <MenuItem value={2}>Two</MenuItem>
    <MenuItem value={3}>Three</MenuItem>
  </Select>
</FormControl>
    </Grid>
    <Grid item lg="6" md="12" style={{marginTop:"2%"}}><Button fullWidth variant='contained' color="error" onClick={()=>{setCourse({
    courseName:"",
    noOfYear:null,
    noOfSem:null,
   })}}>clear</Button></Grid>
    <Grid item lg="6" md="12" style={{marginTop:"2%"}}>
      {adminState.isLoading?
      <div style={{textAlign:"center"}}><CircularProgress/></div>
      :
      <Button fullWidth variant='contained' color="success" onClick={send}>Add Course</Button>
      }
      </Grid>
    <Grid item lg="12" md="12" style={{marginTop:"0"}}>
      <b style={{color:"red",fontSize:"20px"}}>{!adminState.err?"":`*${adminState.err}`}</b>
    </Grid>

</Grid>
 
  </div>;
}
