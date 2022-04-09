import React from 'react'
import Topbar from '../../global/component/Topbar'
import { sideBarData } from '../sidebarData'
import Sidebar from '../../global/component/Sidebar2'
import { TableContainer, Table, TableCell, TableBody, TableHead, TableRow, tableCellClasses, Button } from "@mui/material"
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux'
import { getAllStudents } from '../../redux/actions/admin.action'
import { useEffect } from 'react'
import NotFound from "../../home/component/NotFound"
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
  const dispatch = useDispatch()
  const adminState = useSelector((state) => state.adminReducer)
  useEffect(async () => { await dispatch(getAllStudents()) }, [dispatch])
  if (!adminState.isLogedin || adminState.users.role !== "admin")
    return <NotFound />
  else
    return (
      <div style={{ height: "100vh" }}>
        <Topbar />
        <div className="mainContainer" style={{ height: "calc(100vh - 10%)", display: 'grid', gridTemplateColumns: "17% 1fr" }}>
          <div className="sidebarContaine">
            <Sidebar data={sideBarData} />

          </div>
          <div className="sidebarContaine" style={{ padding: "1%", maxHeight: "calc(100vh - 10%)", overflow: "auto", paddingTop: "0.05%" }}>
            <TableContainer component={"paper"}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table" stickyHeader>
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">Fullname</StyledTableCell>
                    <StyledTableCell align="center">Email</StyledTableCell>
                    <StyledTableCell align="center">Mobile</StyledTableCell>
                    <StyledTableCell align="center">Course</StyledTableCell>
                    <StyledTableCell align="center">TotalTeachers</StyledTableCell>
                    <StyledTableCell align="center">Edit</StyledTableCell>
                    <StyledTableCell align="center">Delete</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {adminState.students.map((d) => (

                    <StyledTableRow>
                      <StyledTableCell align="center">{d.fullname}</StyledTableCell>
                      <StyledTableCell align="center">{d.email}</StyledTableCell>
                      <StyledTableCell align="center">{d.mobile}</StyledTableCell>
                      <StyledTableCell align="center">{d.course.cName}</StyledTableCell>
                      <StyledTableCell align="center">{d.teachers}</StyledTableCell>
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
