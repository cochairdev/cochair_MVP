import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink } from "react-router-dom";

import JoinInnerOutlinedIcon from '@mui/icons-material/JoinInnerOutlined';import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import "./style.css";

export const Sidebar = () => {
    
    return (
      <List  component="nav">
        <NavLink to="/home">
          <ListItem >
  
                  <ListItemButton>
                      <ListItemIcon>
                          <HomeOutlinedIcon/>
                      </ListItemIcon>
                      <ListItemText primary="Dashboard" />
                  </ListItemButton>

          </ListItem>
        </NavLink>

        <NavLink
            to="/matchmaking"
            
        >
            <ListItem  >
            <ListItemButton>
                <ListItemIcon>
                    <JoinInnerOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary="Matchmakings" />
            </ListItemButton>
            </ListItem>
        </NavLink>
        <NavLink
            to="/contacts"
           
        >
        <ListItem  >
          <ListItemButton>
            <ListItemIcon>
                <ContactsOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary="Contacts" />
          </ListItemButton>
        </ListItem>
        </NavLink>
        <NavLink
            to="/messages"
           >
        <ListItem  >
          <ListItemButton>
            <ListItemIcon>
                <ChatOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary="Messages" />
          </ListItemButton>
        </ListItem>
        </NavLink>
        <NavLink
            to="/challenges"
            >
        <ListItem  >
          <ListItemButton>
            <ListItemIcon>
                <EmojiEventsOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary="Challenges" />
          </ListItemButton>
        </ListItem>
        </NavLink>

      </List>
    );
};
