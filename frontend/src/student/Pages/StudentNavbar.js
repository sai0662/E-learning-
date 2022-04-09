import React, { useState } from 'react'
import { sideBarData } from '../sidebarData';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container, CssBaseline, Divider } from '@mui/material';
import { FaBars } from "react-icons/fa"
import { Link } from 'react-router-dom'
import Sidebar from '../../global/component/Sidebar'
import { useSelector } from 'react-redux';

const StudentNavbar = ({ list }) => {
  const [sidebar, setSidebar] = useState(false)
  const adminState = useSelector((state) => state.adminReducer)

  return (
      <div style={{ height: '10%' }}>
        <Box sx={{ flexGrow: 1 }} >
          <CssBaseline />
          <AppBar position="fixed" color='inherit' sx={{ boxShadow: 1, justifySelf: 'flex-start', height: '10%' }}>
            <Toolbar>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Typography 
                  sx={{
                    flexGrow: 3,
                    fontFamily: 'Quicksand,sans-serif',
                    fontSize: '30px',
                    fontWeight: '800',
                    color: '#0B2060'
                  }}
                >
                  eLearning
                </Typography>
              </Link>
              <Toolbar sx={{ display:'flex', width:'80%',  justifyContent:'center'}} >
                <Typography
                  sx={{
                    fontSize: '30px',
                    fontWeight: '400',
                    color: '#0B2060',
                    marginLeft:'80px'
                  
              
                  }}
                >{`Welcome Mr ${adminState.users.fullname}`}</Typography>
              </Toolbar>

              <Toolbar sx={{ display: "flex", justifyContent: 'right', width: "20%", marginTop: '5px' }}>
                <div>
                  <FaBars className='iconBar' onClick={() => { setSidebar(!sidebar) }} />

                </div>
              </Toolbar>

            </Toolbar>
            <Sidebar sidebar={sidebar} setSidebar={setSidebar} list={list} />

          </AppBar>
        </Box>
      </div>
  )
}

export default StudentNavbar;