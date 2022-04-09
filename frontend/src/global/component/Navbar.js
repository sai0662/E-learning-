import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container, CssBaseline, Divider } from '@mui/material';

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{height:'13%'}}>
         <Box sx={{ flexGrow: 1  }} >
         <CssBaseline/>
           <AppBar position="fixed" color='inherit'  sx={{boxShadow:0, justifySelf:'flex-start', height:'13%'}}>
             <Toolbar>
             <Link to="/" style={{textDecoration:'none'}}>
                <Typography 
                    sx={{
                       flexGrow: 3, 
                       fontFamily:'Quicksand,sans-serif',
                       fontSize:'30px', 
                       fontWeight:'800',
                       color:'#0B2060' 
                       }}
                       >
                  eLearning
                </Typography>
              </Link>
              
             <Toolbar sx={{display:"flex", justifyContent:'right' ,width:"100%", marginTop:'5px'}}>
          <Link to="/teachlogin" style={{textDecoration:'none', marginRight:'1%'}}><Button color="inherit" variant='outlined' sx={{borderRadius:'50px', height:'40px', width:'115px'}} >Teacher</Button></Link>
            <Link to="/studlogin" style={{ textDecoration:'none'}}><Button  variant='contained' sx={{borderRadius:'50px', backgroundColor:'#5913B0', height:'40px',width:'115px' }} >Student </Button></Link>
             
             </Toolbar>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar;