import { useState } from "react";
import {
  Toolbar,
  IconButton,
  Typography,
  Box,
  Tooltip,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuUser from "./MenuUser";

import MenuIcon from "@mui/icons-material/Menu";
import { useAppDispatch } from "../store";

import { handleLogoutFirebase } from "../firebase/providers";

interface Props {
  open: boolean;
  handleDrawerOpen?: () => void;
}

export const Navbar = ({ open, handleDrawerOpen }: Props) => {
 
  const dispatch = useAppDispatch();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleSettings = () =>{
    console.log("settings")
  }
  const handleProfile = () =>{
    console.log("profile")
  }

  const handleLogout = () =>{
    dispatch(handleLogoutFirebase())
  }

  return (
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{
          marginRight: 5,
          ...(open && { display: "none" }),
        }}
      >
        <MenuIcon />
      </IconButton>

      <Box sx={{ flexGrow: 1 }} />
      <Tooltip title="Open settings">
        <Box onClick={handleOpenUserMenu}>
          <MenuUser />
        </Box>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
          <MenuItem key="profile" onClick={handleSettings}>
            <Typography textAlign="center">My profile</Typography>
          </MenuItem>

          <MenuItem key="settings" onClick={handleProfile}>
            <Typography textAlign="center">Settings</Typography>
          </MenuItem>

          <MenuItem key="logout" onClick={handleLogout}>
            <Typography textAlign="center">Log out</Typography>
          </MenuItem>
      </Menu>
    </Toolbar>
  );
};
