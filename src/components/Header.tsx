import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useAuthStore } from '../store/useAuthStore.ts';
import { Link, useNavigate } from 'react-router-dom';
import { userSignOut } from '../firebase.ts';
import { Box, Button } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

export default function Header() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const { user, clearUser, profile } = useAuthStore();

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (route: string) => {
        setAnchorEl(null);
        navigate(route);
    };

    const logOut = async () => {
        await userSignOut();
        clearUser();
        navigate('/login');
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ 
                        backgroundColor: '#2563eb', 
                        p: 1, 
                        borderRadius: 1, 
                        mr: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <DirectionsCarIcon sx={{ color: 'white', fontSize: 32 }} />
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Button 
                        sx={{ 
                            color: '#374151', 
                            textTransform: 'none',
                            fontSize: '16px',
                            fontWeight: 500,
                            '&:hover': { color: '#2563eb' }
                        }}
                    >
                        Арендовать
                    </Button>
                    <Button 
                        sx={{ 
                            color: '#374151', 
                            textTransform: 'none',
                            fontSize: '16px',
                            fontWeight: 500,
                            '&:hover': { color: '#2563eb' }
                        }}
                    >
                        Войти
                    </Button>
                </Box>
                
                {user && (
                    <div>
                        <IconButton size="large" onClick={handleMenu} sx={{ color: '#374151' }}>
                            <AccountCircle />
                        </IconButton>
                        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
                            <MenuItem onClick={() => handleClose('/')}>Home</MenuItem>
                            {!profile && (
                                <MenuItem onClick={() => handleClose('/create-profile')}>
                                    Create Profile
                                </MenuItem>
                            )}
                            <MenuItem onClick={() => handleClose('/profile')}>Profile</MenuItem>
                            <MenuItem onClick={() => handleClose('/add-post')}>Add post</MenuItem>
                            <MenuItem onClick={() => handleClose('/create-category')}>Create Category</MenuItem>
                            <MenuItem onClick={logOut}>Log out</MenuItem>
                        </Menu>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
}