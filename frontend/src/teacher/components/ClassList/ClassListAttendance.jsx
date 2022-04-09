import React from "react";
import Topbar from "../../../global/component/Topbar";
import Sidebar from "../../../global/component/Sidebar2";
import { sideBarData } from "../../sidebarData";
import { DataGrid } from "@mui/x-data-grid";
import { BiBookReader } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NotFound from "../../../home/component/NotFound";
import {
  TableContainer,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  tableCellClasses,
  FormGroup,
  FormControlLabel,
  styled,
  Checkbox,
  Grid,
  Button
} from "@mui/material";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function Attendance() {
  console.log("inside");
  const theState = useSelector((state) => state.adminReducer);
  if(!theState.isLogedin||theState.users.role!=="teacher")
  return <NotFound/>
  else 
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
        <div className="attendamce-data">
          <TableContainer component={"paper"}>
            <Table
              sx={{ minWidth: 700 }}
              aria-label="customized table"
              stickyHeader
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">id</StyledTableCell>
                  <StyledTableCell align="center">Student Name</StyledTableCell>
                  <StyledTableCell align="center">Email</StyledTableCell>
                  <StyledTableCell align="center">Mobile</StyledTableCell>
                  <StyledTableCell align="center">Course</StyledTableCell>
                  <StyledTableCell align="center">Subject</StyledTableCell>
                  <StyledTableCell align="center">Status</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {theState.students.map((s, k) => (
                  <TableRow>
                    <StyledTableCell align="center">{k + 1}</StyledTableCell>
                    <StyledTableCell align="center">
                      {s.fullname}
                    </StyledTableCell>
                    <StyledTableCell align="center">{s.email}</StyledTableCell>
                    <StyledTableCell align="center">{s.mobile}</StyledTableCell>
                    <StyledTableCell align="center">
                      {s.course.cName}
                    </StyledTableCell>
                    <StyledTableCell align="center">react</StyledTableCell>
                    <StyledTableCell align="center" style={{ width: "60px" }}>
                      <FormGroup>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                          }}
                        >
                          <FormControlLabel
                            control={<Checkbox color="success" />}
                            label="Present"
                          />
                          <FormControlLabel
                            control={<Checkbox color="error" />}
                            label="Absent"
                          />
                        </div>
                      </FormGroup>
                    </StyledTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div style={{margin:"2%",display:"flex",justifyContent:"right"}}>
            <Button variant="contained">Take Attendance</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
