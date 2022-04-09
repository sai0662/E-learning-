import React from 'react'
import Navbar from '../../global/component/Navbar'
import Corosouel from '../pages/Corosouel'
import HomeHeader from '../pages/HomeHeader'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
const Home = () => {
  const theState= useSelector((state=>state.adminReducer))
  if(theState.isLogedin){
    return <Navigate to={`${theState.users.role}/dashboard`}/>

  }
  else
  {
  return (
    <div>
        <Navbar />
        <HomeHeader />
        
    </div>
  )
    
}
}

export default Home