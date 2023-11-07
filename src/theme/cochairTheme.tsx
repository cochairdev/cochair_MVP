import { createTheme } from '@mui/material/styles';
  import darkScrollbar from "@mui/material/darkScrollbar";
  declare module '@mui/material/styles' {
    interface TypographyVariants {
      poster: React.CSSProperties;
    }
  
    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
      poster?: React.CSSProperties;
    }
  }
  
  // Update the Typography's variant prop options
  declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
      poster: true;
      h3: false;
    }
  }
  
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
 
    button:{
      fontFamily:'"Roboto", sans-serif'
    },
    poster: {
      fontSize: '2rem',
      color:' #FFF',
      fontFamily: "'Montserrat',  sans-serif",
      fontWeight: 700,
    },
    
  
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