import { useEffect, useState } from "react";

import { getUserLoggedIn } from "../api/apis";
import { useNavigate } from "react-router-dom";

import { Avatar, Box, Divider, Grid, ListItemIcon, Menu, MenuItem, Tooltip } from "@mui/material";
import IconButton from '@mui/material/IconButton'
import Logout from '@mui/icons-material/Logout'

const NavBarLoggedIn = () => {
    const [userEmail, setUserEmail] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    }

    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    }

    const getUserEmail = () => {
        getUserLoggedIn()
            .then((res) => {
                console.log('usuario', res)
                setUserEmail(res.data.email);
            })
    }

    useEffect(() => {
        getUserEmail();
    }, []);

    const signOut = () => {
        console.log('Sign out clicked');
        const token = window.localStorage.getItem('token');
        if (token) {
            window.localStorage.removeItem('token');
        }
        navigate('/login');
    }

    return (
        <Grid
            sx={{
                background: 'rgb(255, 255, 255)',
                borderBottom: '1px solid #e1e1e1',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                py: '1.5em',
                px: '4em',
                width: '100vw'
            }}
        >
            <Grid item
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', height: 35 }}>
                    <Tooltip title="Account settings">
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar sx={{ width: 30, height: 30 }} />
                        </IconButton>
                    </Tooltip>
                </Box>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem>
                        <ListItemIcon>
                            {userEmail}
                        </ListItemIcon>
                    </MenuItem>
                    <Divider />
                    <MenuItem
                        onClick={signOut}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Sign Out
                    </MenuItem>
                </Menu>
            </Grid>
        </Grid>
    );
}

export default NavBarLoggedIn;