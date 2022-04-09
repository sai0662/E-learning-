import React from 'react'
import "./Topbar.css"
import AttendanceCom from '../../components/Attendance/AttendanceCom'
import useSelector from "react-redux"
import NotFound from '../../../home/component/NotFound'
export default function Attendance() {
  const theState=useSelector((state)=>state.adminReducer)
  if(!theState.isLogedin||theState.users.role!=="teacher")
  return <NotFound/>
  else 
  return ( 
 <div className='breakout'>
< AttendanceCom />
 </div>
  ) 
}