import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, AppBar, Toolbar, Button, Typography, Drawer, IconButton, Menu,  MenuItem } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

export default function Signing_Navbar() {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfile = () => {
    navigate('/profile');
  };

  const handleLogout = () => {
    navigate('/signin');
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
        <AppBar
          position="fixed"
          sx={{
            boxShadow: 0,
            bgcolor: 'transparent',
            backgroundImage: 'none',
            backgroundColor: 'white',
            mt: 0,
          }}
        >
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.4)'
                  : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <a href='/'><img
                src={
                  './Ciberts_logo.jpeg'
                }
                style={{width: '120px', marginBottom: '4px', height: 'auto', cursor: 'pointer'}}
                alt="logo of ciberts"
              /></a>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <MenuItem
                  onClick={() => window.location.href = '/'}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Home
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => window.location.href = '/'}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Applications
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => window.open('https://ciberts.ai/','_blank')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    About
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => window.location.href = '/'}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Contact
                  </Typography>
                </MenuItem>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >


      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="small"
            edge="end"
            colo
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            sx={{ ml: 0, mr: 0, height: '2px', width: '2px', bgcolor: 'transparent' }}
          >
              <AccountCircleIcon sx={{ fontSize: 32 }}/>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >

                <RouterLink to="/profile" style={{ textDecoration: 'none' }}>
                  <MenuItem>Profile</MenuItem>
                </RouterLink>

            {/* <MenuItem onClick={handleProfile}>Profile</MenuItem> */}
            {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      </Box>
      <Box sx={{ display: { sm: '', md: 'none' } }}>
        <Button variant="text" color="primary" aria-label="menu" onClick={toggleDrawer(true)}
              sx={{ minWidth: '30px', p: '4px' }} >
              <MenuIcon />
        </Button>
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          <Box
            sx={{
                minWidth: '60dvw',
                p: 2,
                backgroundColor: 'background.paper',
                flexGrow: 1,
              }}
            >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'end',
                flexGrow: 1,
              }}
            >
            </Box>
            <MenuItem onClick={() => window.location.href = '/'}>
              Home
            </MenuItem>
            <MenuItem onClick={() => window.location.href = '/'}>
              Applications
            </MenuItem>
            <MenuItem onClick={() => window.open('https://ciberts.ai/','_blank')}>
              About
            </MenuItem>
            <MenuItem onClick={() => window.location.href = '/'}>
              Contact
            </MenuItem>
          </Box>
        </Drawer>
      </Box>
      </Toolbar>
    </AppBar>
    </div>
  );
}
