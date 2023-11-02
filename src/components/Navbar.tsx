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

const settings = ["My settings", "Profile", "Logout"];

interface Props {
  open: boolean;
  handleDrawerOpen?: () => void;
}

export const Navbar = ({ open, handleDrawerOpen }: Props) => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Toolbar>
  );
};
