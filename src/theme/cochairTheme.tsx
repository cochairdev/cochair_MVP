import { createTheme } from '@mui/material/styles';
  import darkScrollbar from "@mui/material/darkScrollbar";
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
    //  default: "#ffffff",
     
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
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          ...darkScrollbar(),
          backgroundColor: "#DDD",
         
        }
      }
    },
    MuiAppBar:{
      styleOverrides:{
        root:{
          backgroundColor: "#FFF",   
        }
      }
    }
    }
})

export default theme;