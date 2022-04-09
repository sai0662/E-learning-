import React, { useState } from 'react';
import "./Header.css"
import Sidebar from './Sidebar';
import {FaBars} from "react-icons/fa"
import { useSelector } from 'react-redux';
function Header({list}) {
  // console.log(list)
  const userState=useSelector((state)=>state.adminReducer)
  let isAdmin;
  if(userState.users.role=="admin") isAdmin=true
  const [sidebar,setSidebar]=useState(false)
  return<><div className="header">
    <h3>{userState.courses.cName}</h3>
    <FaBars className='iconBar' onClick={()=>{setSidebar(!sidebar)}}/>
    </div>
     <Sidebar sidebar={sidebar} setSidebar={setSidebar} list={list}/>
    </>
}

export default Header;
