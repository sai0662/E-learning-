import React,{useState} from "react";
import Topbar from "../../global/component/Topbar";
import { sideBarData } from "../sidebarData";
import Sidebar from "../../global/component/Sidebar2";
import {
  TableContainer,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  tableCellClasses,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  TreeVi,
  Modal,Box,Typography, CircularProgress
} from "@mui/material";
import { FaFileDownload } from "react-icons/fa";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudents } from "../../redux/actions/admin.action";
import { useEffect } from "react";
import NotFound from "../../home/component/NotFound";
import { VscFilePdf } from "react-icons/vsc";
import { TreeView, TreeItem } from "@material-ui/lab";
import { ExpandMore, ChevronRight } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { getSubjects } from '../../redux/actions/subject.action'
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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
export default function () {
  const dispatch = useDispatch();
  const theState = useSelector((state) => state.adminReducer);
  const theSubjectState=useSelector((state)=>state.subjectReducer)
  
  useEffect(async()=>{
    await dispatch(getSubjects())
  },[dispatch])
    

  if (!theState.isLogedin || theState.users.role !== "teacher")
    return <NotFound />;
  else
    return (
      <div style={{ height: "100%" }}>
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
          <div
            className="sidebarContaine"
            style={{
              padding: "1%",
              maxHeight: "calc(100vh - 10%)",
              overflow: "auto",
              paddingTop: "0.05%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItem: "center",
                justifyContent: "right",
                padding: "10px",
                marginBottom: "5px",
              }}
            >
              <FormControl style={{ width: "20%" }}>
                <InputLabel>Select Subject</InputLabel>
                <Select label={"Select Subject"} defaultValue={1}>
                  <MenuItem value="1">ALL</MenuItem>
                  {theState.subjects.map((d) => (
                    <MenuItem value={d._id}>{d.Name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <TableContainer component={"paper"}>
              <Table
                sx={{ minWidth: 700 }}
                aria-label="customized table"
                stickyHeader
              >
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">
                      Subject Name
                    </StyledTableCell>
                    <StyledTableCell align="center">Semester</StyledTableCell>
                    <StyledTableCell align="center">Topic List</StyledTableCell>
                    <StyledTableCell align="center">Edit</StyledTableCell>
                    <StyledTableCell align="center">Delete</StyledTableCell>
                    <StyledTableCell align="center">Download</StyledTableCell>
                  </TableRow>
                </TableHead>
                {theSubjectState.isLoading
                ?
                <CircularProgress/>
                :
                <TableBody>
                  {theSubjectState.subjects.map((d) => (
                    <StyledTableRow>
                      <StyledTableCell align="center">{d.Name}</StyledTableCell>
                      <StyledTableCell align="center">
                        {d.Semester}
                      </StyledTableCell>
                      <StyledTableCell>
                        <TreeView
                          aria-label="file system navigator"
                          defaultCollapseIcon={<ExpandMore />}
                          defaultExpandIcon={<ChevronRight />}
                          sx={{
                            minHeight: "100%",
                            flexGrow: 0.1,
                            maxWidth: 400,
                            overflowY: "auto",
                          }}
                        >
                          {d.topics.map((t, k) => (
                            <TreeItem
                              nodeId={k}
                              label={t.Name}
                              style={{ margin: "10px" }}
                            >
                              {t.SubTopics.map((st, sk) => (
                                <TreeItem nodeId={st + sk} label={st} />
                              ))}
                            </TreeItem>
                          ))}
                        </TreeView>
                      </StyledTableCell>
                      <StyledTableCell align="center">
                       <NavLink to={`edit/${d._id}`} style={{textDecoration:"none"}}><Button color="success">Edit</Button></NavLink>
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <Button color="error">Delete</Button>
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <FaFileDownload fontSize={23} cursor="pointer" />
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
                }
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    );
}
