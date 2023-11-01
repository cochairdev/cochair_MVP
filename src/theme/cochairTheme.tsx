import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3F51B5",
    },
    secondary: {
      main: "#f50057",
    },
    success:{
      main: "#09AF00"
  
    },
    background: {
      default: "#dddddd",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'Roboto',
      'sans-serif',
    ].join(','),
  
  },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: "100px",
          transition: "background 1s, color 1s",
          color:"#49454F",
          '&:hover': {
            backgroundColor: "#F7F2FA",
            borderRadius: "100px",
        }
        }
      },
    }
  }
});

export default theme;