import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from "react"


const settings = ['Profile', 'Cart', 'Shopping', 'Logout'];
const settingsroute = ['/profile', '/cart', "/shopping", '/logout'];
const admin = ['Profile', 'Add Product', 'All Product', 'All User', 'All Orders', 'Logout'];
const adminroute = ['/profile', '/add-product', '/all-product', '/all-user', '/all-orders', '/logout'];

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [user, setUser] = React.useState([]);
    const [cart, setCart] = React.useState("");

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const id = localStorage.getItem("user")
    const token = localStorage.getItem("token")

    useEffect(() => {
        axios.get(`http://localhost:5000/user/${id}`, { headers: { "Authorization": `Bearer ${token}` } })
            .then((value) => (setUser(value.data)))
        axios.get(`http://localhost:5000/cart/${id}`, { headers: { "Authorization": `Bearer ${token}` } })
            .then((value) => {
                // console.log(value.data);
                setCart(value.data.cart.length)
            })
        console.log(user, cart);
    }, []);

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        E-commerce
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        E-commerce
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        {
                            localStorage.getItem("token") ?
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src={user.pic} />
                                    </IconButton>
                                </Tooltip> :
                                null
                        }
                        <Menu
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
                            {
                                localStorage.getItem("role") === "admin" ?
                                    admin.map((setting, index) => (
                                        <Link className='text-secondary text-decoration-none' to={`${adminroute[index]}`}>
                                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                                <Typography textAlign="center">{setting}</Typography>
                                            </MenuItem>
                                        </Link>
                                    ))
                                    :
                                    settings.map((setting, index) => (
                                        <Link className='text-secondary text-decoration-none' to={`${settingsroute[index]}`}>
                                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                                {setting === "Cart" ?
                                                    <Typography textAlign="center">{setting} <span style={{borderRadius:"50%"}} className="badge bg-danger text-white">{cart}</span></Typography>
                                                    :
                                                    <Typography textAlign="center">{setting}</Typography>
                                                }
                                            </MenuItem>
                                        </Link>
                                    ))
                            }
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;

