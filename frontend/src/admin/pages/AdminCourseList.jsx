import React, { useEffect } from 'react'
import Topbar from '../../global/component/Topbar'
import { sideBarData } from '../sidebarData'
import Sidebar from '../../global/component/Sidebar2'
import {TableContainer,Table,TableCell,TableBody,TableHead,TableRow,tableCellClasses,Button} from "@mui/material"
import { styled } from '@mui/material/styles';
import { useDispatch,useSelector } from 'react-redux'
import { getCourse } from '../../redux/actions/admin.action'
import NotFound from '../../home/component/NotFound'
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
export default function 
() {
    const adminState=useSelector((state)=>state.adminReducer)
    const dispatch=useDispatch()
    useEffect(async()=>{
      await dispatch(getCourse())
    },[dispatch])
  if(!adminState.isLogedin||adminState.users.role!=="admin")
  return <NotFound/>
  else 
  return (
    <div style={{height:"calc(100vh - 10%)"}}>
        <Topbar/>
        <div className="mainContainer" style={{height:"100%",display:'grid',gridTemplateColumns:"17% 1fr"}}>
            <div className="sidebarContaine">
                <Sidebar data={sideBarData}/>

            </div>
            <div className="sidebarContaine" style={{padding:"1%",maxHeight:"calc(100vh - 10%)",overflow:"auto",paddingTop:"0.05%"}}>
               <TableContainer component={"paper"}>
                   <Table sx={{ minWidth: 700 }} aria-label="customized table" stickyHeader >
                   <TableHead>
          <TableRow>
            <StyledTableCell align="center">CourseName</StyledTableCell>
            <StyledTableCell align="center">Year</StyledTableCell>
            <StyledTableCell align="center">Semester</StyledTableCell>
            <StyledTableCell align="center">Teachers</StyledTableCell>
            <StyledTableCell align="center">Students</StyledTableCell>
            <StyledTableCell align="center">Edit</StyledTableCell>
            <StyledTableCell align="center">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
                {adminState.courses.map((d)=>(
                    
                      <StyledTableRow>
                    <StyledTableCell align="center">{d.course}</StyledTableCell>
                    <StyledTableCell align="center">{d.totalYear.length}</StyledTableCell>
                    <StyledTableCell align="center">{d.totalSem.length}</StyledTableCell>
                    <StyledTableCell align="center">{d.totalTeacher}</StyledTableCell>
                    <StyledTableCell align="center">{d.totalStudent}</StyledTableCell>
                    <StyledTableCell align="center"><Button variant='text' color="success">Edit</Button></StyledTableCell>
                    <StyledTableCell align="center" ><Button variant='text' color='error'>Delete</Button></StyledTableCell>
                
                </StyledTableRow>

                ))}
        </TableBody>

             </Table>

               </TableContainer>

            </div>
       
       </div>
        
    </div>
  )
}
