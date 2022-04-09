import React from 'react'
import Topbar from '../../global/component/Topbar'
import { sideBarData } from '../sidebarData'
import Sidebar from '../../global/component/Sidebar2'
import { TableContainer, Table, TableCell, TableBody, TableHead, TableRow, tableCellClasses, Button } from "@mui/material"
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux'
import { getAllStudents } from '../../redux/actions/admin.action'
import { useEffect } from 'react'
import { getSubjects } from '../../redux/actions/subject.action'
import NotFound from '../../home/component/NotFound'
import {VscFilePdf} from "react-icons/vsc"
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
    const theState = useSelector((state) => state.adminReducer)
    const theSubjectState=useSelector((state)=>state.subjectReducer)
    useEffect(async()=>{await dispatch(getSubjects())},[dispatch])
    if (!theState.isLogedin || theState.users.role !== "teacher")
        return <NotFound />
    else
        return (
            <div style={{ height: "calc(100vh - 10%)" }}>
                <Topbar />
                <div className="mainContainer" style={{ height: "100%", display: 'grid', gridTemplateColumns: "17% 1fr" }}>
                    <div className="sidebarContaine">
                        <Sidebar data={sideBarData} />

                    </div>
                    <div className="sidebarContaine" style={{ padding: "1%", maxHeight: "calc(100vh - 10%)", overflow: "auto", paddingTop: "0.05%" }}>
                        <TableContainer component={"paper"}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table" stickyHeader>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="center">Course Name</StyledTableCell>
                                        <StyledTableCell align="center">Subject Name</StyledTableCell>
                                        <StyledTableCell align="center">Semester</StyledTableCell>
                                        <StyledTableCell align="center">Edit</StyledTableCell>
                                        <StyledTableCell align="center">Delete</StyledTableCell>
                                        <StyledTableCell align="center">Download Sylabus</StyledTableCell>



                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {theSubjectState.subjects.map((d, k) =>(
                                        <TableRow>
                                            <StyledTableCell align="center">{theState.courses[0].course}</StyledTableCell>
                                            <StyledTableCell align="center">{d.Name}</StyledTableCell>
                                            <StyledTableCell align="center">{d.Semester}</StyledTableCell>
                                            <StyledTableCell align="center"><Button color='success'>Edit</Button></StyledTableCell>
                                            <StyledTableCell align="center"><Button color='error'>Delete</Button></StyledTableCell>

                                        <StyledTableCell align="center"><VscFilePdf style={{ fontSize:"25px", cursor:'pointer'}} /></StyledTableCell>


                                        </TableRow>
                                    ))}

                                </TableBody>

                            </Table>

                        </TableContainer>

                    </div>

                </div>

            </div>
        )
}
