import React,{ useState , useEffect} from 'react'
import Topbar from '../../global/component/Topbar'
import { sideBarData } from '../sidebarData'
import Sidebar from '../../global/component/Sidebar2'
import { TableContainer, Table, TableCell, TableBody, TableHead, TableRow, tableCellClasses, Button } from "@mui/material"
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux'
import { getAllStudents } from '../../redux/actions/admin.action'
import NotFound from "../../home/component/NotFound"
import axios from '../../axios'
import { getfeedback } from '../../redux/actions/global.action'

const AdminFooter = () => {
    const dispatch=useDispatch()
    const theFooterState=useSelector((state)=>state.globalReducer)
    console.log(theFooterState)
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
   useEffect(async()=>{
       await dispatch(getfeedback())

   },[])

    



    return (
        <div>
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
                                        <StyledTableCell align="center">Name</StyledTableCell>
                                        <StyledTableCell align="center">Feedback</StyledTableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                        {theFooterState.feedbacks.map((d)=>(
                                            <StyledTableRow>
                                        <StyledTableCell align="center">{d.name}</StyledTableCell>
                                        <StyledTableCell align="center">{d.feedback}</StyledTableCell>


                                    </StyledTableRow>



                                        ))}
                                    

                                </TableBody>

                            </Table>

                        </TableContainer>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default AdminFooter