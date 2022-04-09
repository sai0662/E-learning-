import React from 'react'
// import "./sidebar2.css"

import {NavLink} from "react-router-dom"
import {List,ListItem,ListItemIcon,ListItemText} from "@mui/material"
export default function Sidebar({data}) {
  return (
    <div className='sidebar' style={{width:"100%",height:"calc(100vh - 50px)",position: "sticky",overflow:"auto"}}>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <List>
                {data.map((d,k)=>(
                    <>
                    {!d.path?
                    <ListItem ListItem
                    button
                    style={{
                      width: "100%",
                      color:'blue',
                    }}>
                    <ListItemText  style={{fontWeight:"bold",wordSpacing:"5px",letterSpacing:"5px"}}>{d.list}</ListItemText>
                    </ListItem>
                    :
                    <NavLink to={d.path} style={{textDecoration: 'none',color:"blue"}}>
                   
                    <ListItem
                      button
                      style={{
                        fontSize: "25px",
                        width: "100%",
                      }}
                    >
                      <ListItemIcon>{d.icon}</ListItemIcon>
                      <ListItemText>{d.list}</ListItemText>
                    </ListItem>
                    </NavLink>
                     }
  
                    <List>
                      {d.dropdown.map((drop) => (
                        <NavLink to={drop.link} style={{textDecoration: 'none',color:"#141414"}}>
                        <ListItem button
                        style={{
                          fontSize: "22px",
                          width: "100%",
                          paddingLeft:"15%"
                        }}>
                          <ListItemIcon>{drop.icon}</ListItemIcon>
                          <ListItemText>{drop.name}</ListItemText>
                        </ListItem>
                        </NavLink>
                        
                      ))}
                    </List>
                  </>
  

                ))}
                </List>
               
                 {/* <h3 className="sidebarTitle">Manage Teacher</h3>
                <ul className="sidebarList">
                    <li className='sidebarListItem'>
                        <Add className='sidebarIcon'/>
                        <NavLink to="teacher">Add Teacher</NavLink>
                    </li>
                    <li className='sidebarListItem'>
                        <List className='sidebarIcon'/>
                        Teacher list
                    </li>
                 </ul>
                 <h3 className="sidebarTitle">Manage Student</h3>
                <ul className="sidebarList">
                    <li className='sidebarListItem'>
                        <Add className='sidebarIcon'/>
                        Add Student 
                    </li>
                    <li className='sidebarListItem'>
                        <List className='sidebarIcon'/>
                        Student List
                    </li>
                 </ul>
                 <h3 className="sidebarTitle">Manage Sessions</h3>
                <ul className="sidebarList">
                    <li className='sidebarListItem'>
                        <Add className='sidebarIcon'/>
                        Add Session 
                    </li>
                    <li className='sidebarListItem'>
                        <List className='sidebarIcon'/> 
                        Session List
                    </li>
                 </ul> */}
            </div>
        </div> 
    </div>
  )
}
