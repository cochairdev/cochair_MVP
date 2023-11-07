import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Grid,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";

import JoinInnerOutlinedIcon from "@mui/icons-material/JoinInnerOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

import CochairLogo from "../assets/images/logo_cochair.svg";
import "./style.css";
import { navItem } from "../@types/definitions";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const navIcons = [
  <HomeOutlinedIcon />,
  <JoinInnerOutlinedIcon />,
  <ContactsOutlinedIcon />,
  <ChatOutlinedIcon />,
  <EmojiEventsOutlinedIcon />,
];
interface Props {
  open: boolean;
  navItems: navItem[];
  handleDrawerClose?: () => void;
}

export const Sidebar = ({ open, navItems }: Props) => {
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <Grid container spacing={1} alignItems="center" justifyContent="center">
          <Box component="img" src={CochairLogo} />
        </Grid>
        {/* <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton> */}
      </DrawerHeader>

      <List>
        {navItems.map((item, index) => {
          return (
            <NavLink to={item.path} key={index}>
              <ListItem
                key={item.title}
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  disableRipple
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {navIcons[index]}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    sx={{ opacity: open ? 1 : 0, color: "#49454F" }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
          );
        })}
      </List>
    </Drawer>
  );
};
