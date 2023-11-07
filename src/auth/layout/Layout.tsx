import { Grid } from "@mui/material";

const Layout = ({ children}: { children: React.ReactNode; }) => {
  return (
    <Grid
    container
    component="main"
    sx={{
      height: "100vh",
      borderRadius: "12px"
    }}>
   
       {children}
  </Grid>
  )
}

export default Layout