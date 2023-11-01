import { Grid } from "@mui/material";
import Navbar from "../../components/Navbar";
const Layout = ({ children, }: { children: React.ReactNode; }) => {
  return (
    <Grid
    container
    direction="column"
    alignItems="center"
    bgcolor="background.default"
>
    <Grid
        item
        padding={5}
        className="box-shadow"

        sx={{
            backgroundColor: "white",
            width: "100%",
            height: "100%",
            borderRadius: "12px"
        }}
    >
        <Grid
            container
            direction="column"
            spacing={2}
        >
            <Navbar />
            {children}
        </Grid>
    </Grid>
</Grid>
  )
}

export default Layout