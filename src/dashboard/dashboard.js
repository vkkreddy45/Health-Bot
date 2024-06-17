import React, { useState } from 'react';
import {Box, Drawer, CssBaseline, AppBar, Toolbar, List, Divider, ListItem, ListItemButton, ListItemText, } from '@mui/material'
import Projects from "./projects";
import Dashboards from "./dashboards";
import Integrations from "./integrations";
import Datasets from "./datasets";
import Signing_Navbar from "../auth/signing_navbar";

const drawerWidth = 240;

export default function Dashboard() {

  const [selectedItem, setSelectedItem] = useState('Projects');

  const handleListItemClick = (text) => {
    setSelectedItem(text);
  };

  const renderComponent = () => {
    switch (selectedItem) {
      case 'Projects':
        return <Projects />;
      case 'Dashboards':
        return <Dashboards />;
      case 'Integrations':
        return <Integrations/>;
      case 'Datasets':
        return <Datasets/>
      default:
        return null;
    }
  };

  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Signing_Navbar/>
        <Divider />
        <List style={{marginTop: '60px'}}>
          {['Projects', 'Dashboards', 'Integrations', 'Datasets'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton selected={selectedItem === text} onClick={() => handleListItemClick(text)}>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
      <Toolbar />
      {renderComponent()}
        
      </Box>
    </Box>

    </>
  );
}