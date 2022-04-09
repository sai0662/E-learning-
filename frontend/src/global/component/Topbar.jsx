import React, { useState } from 'react'
import "./Topbar.css"
import img from "../../global/component/Avtar2.jpg";
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ListItem } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Box } from '@mui/material'
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Container, CssBaseline, Divider,Typography } from '@mui/material';
import { useSelector ,useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/actions/global.action';

export default function Topbar() {  
  //admin topbar
  const dispatch=useDispatch()
  const navigate=useNavigate()

     const getLogOut = async() => {
        const isLogedOut= await dispatch(logOut())
       if(isLogedOut)
       navigate("/")
    }

    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const adminState = useSelector((state) => state.adminReducer)


    return (
        <div style={{ height: '10%' }}>
            <Box sx={{ flexGrow: 1 }}  style={{height:"100%"}}>
                <CssBaseline />
                <AppBar  color='inherit' sx={{ boxShadow: 1, justifySelf: 'flex-start' }}>
                    <Toolbar style={{display:"grid",gridTemplateColumns:"10% 1fr 10%"}}>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Typography
                                sx={{
                                    flexGrow: 3,
                                    fontFamily: 'Quicksand,sans-serif',
                                    fontSize: '25px',
                                    fontWeight: '800',
                                    color: '#0B2060',
                                }}
                            >
                                eLearning
                            </Typography>
                        </Link>
                        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                            <Typography
                                sx={{
                                    fontSize: '25px',
                                    fontWeight: '800',
                                    color: '#0B2060'
                                }}
                            >{`Welcome Mr ${adminState.users.fullname}`}</Typography>
                        </div>

                        <Toolbar sx={{ display: "flex", justifyContent: 'right', width: "100%", marginTop: '5px' }}>
                            <Box sx={{ flexGrow: 0 }}>
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <img src={img} height={40} width={40} style={{ borderRadius: '50px' }}>

                                    </img>
                                </IconButton>
                                <Menu
                                    PaperProps={{
                                        style: {
                                            width: 150,
                                        },
                                    }}
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"

                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    <MenuItem>
                                        <Link to="/profile" style={{ textDecoration: 'none', color: 'black' }}>
                                            <ListItem>Profile</ListItem>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <ListItem onClick={getLogOut}>Logout</ListItem>

                                    </MenuItem>
                                </Menu>
                            </Box>
                        </Toolbar>

                    </Toolbar>

                </AppBar>
            </Box>
        </div>


    )
}
