import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container, CssBaseline, Divider } from '@mui/material';
import { FaBars } from "react-icons/fa"
import { Link } from 'react-router-dom'
import Sidebar from '../../global/component/Sidebar'
import img from "../../global/component/Avtar2.jpg";
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'
import { ListItem } from '@mui/material';
import Swal from 'sweetalert2';

const TeacherNavbar = () => {

    const navigate = useNavigate()



    const techerLogout = () => {
        Cookies.remove('e-learningadmintoken',)
        Swal.fire("Teacher Logout Successfully")
        window.location.href = '/teachlogin'
    }

    const adminState = useSelector((state) => state.adminReducer)


    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <div style={{ height: '13%' }}>
            <Box sx={{ flexGrow: 1 }} >
                <CssBaseline />
                <AppBar position="fixed" color='inherit' sx={{ boxShadow: 1, justifySelf: 'flex-start', height: '13%' }}>
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
                        <div style={{ marginLeft: '30%', width: '100%' }}>
                            <Typography
                                sx={{
                                    fontSize: '30px',
                                    fontWeight: '800',
                                    color: '#0B2060'
                                }}
                            >{`Welcome Mr ${adminState.users.fullname}`}</Typography>
                        </div>

                        <Toolbar sx={{ display: "flex", justifyContent: 'right', width: "100%", marginTop: '5px' }}>
                            <Box sx={{ flexGrow: 0 }}>
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <img src={img} height={65} width={65} style={{ borderRadius: '50px' }}>

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
                                        <Link to="/teacher/dashboard/profile" style={{ textDecoration: 'none', color: 'black' }}>
                                            <ListItem>Profile</ListItem>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <ListItem onClick={techerLogout}>Logout</ListItem>

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

export default TeacherNavbar