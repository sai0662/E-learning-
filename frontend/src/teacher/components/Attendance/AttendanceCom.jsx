import React from "react";
import Topbar from "../../../global/component/Topbar";
import Sidebar from "../../../global/component/Sidebar2";
import "./Attendance.css";
import { DataGrid } from '@mui/x-data-grid';
import { sideBarData } from "../../sidebarData";
import {Button, Table } from 'react-bootstrap';
import {BiBookReader} from "react-icons/bi"
import {Link} from 'react-router-dom'

export default function AttendanceCom() {

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
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>Id</th>
      <th>Class Name</th>
      <th>Take Attendance</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>One</td>
      <td><div>
      <Link
                  to="/teacher/components/ClassList/ClassListAttendance"
                  style={{ textDecoration: "none", color: "grey " }}
                >
                  <Button><BiBookReader/></Button>
                </Link></div></td>
      
    </tr>
    <tr>
      <td>2</td>
      <td>Two</td>
      <td><div>
      <Link
                  to="/Houses"
                  style={{ textDecoration: "none", color: "grey " }}
                >
                  <Button><BiBookReader/></Button>
                </Link></div></td>
     
    </tr>
    <tr>
      <td>3</td>
      <td>Three</td>
      <td><div>
      <Link
                  to="/Houses"
                  style={{ textDecoration: "none", color: "grey " }}
                >
                  <Button><BiBookReader/></Button>
                </Link></div></td>
    </tr>
  </tbody>
</Table>
         </div>
      </div>
    </div>
  );
}
