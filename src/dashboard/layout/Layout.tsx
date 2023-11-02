import { useState } from 'react';
import { Box } from '@mui/material';

import { styled } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

import { DrawerHeader, Sidebar } from '../../components/Sidebar';
import { navItems } from '../../lib/navItems';
import { Navbar } from '../../components/Navbar';

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Layout = ({ children }: { children: React.ReactNode }) => {
   
    const [open, setOpen] = useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

  return (
    <Box sx={{ display: 'flex', }} >
        <AppBar   elevation={0} open={open}>
          <Navbar 
            open={open} 
            handleDrawerOpen={handleDrawerOpen}
          />
        </AppBar>
        <Sidebar 
            navItems={navItems}
            open={open}
            handleDrawerClose={handleDrawerClose}/>
        <Box component="main"  sx={{ flexGrow: 1, p: 0 , height:'100%'}}>
          <DrawerHeader />
          {children}
        </Box>
    </Box>
  );
};

export default Layout;
