import Layout from "../layout/Layout";
import { Grid } from "@mui/material";
import { Sidebar } from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

export const DashboardPage = () => {
  return (
    <Layout>
      <Grid item>
        <Grid container spacing={3} height={"100vh"}  
            >
          <Grid item lg={3}>
            <Sidebar />
          </Grid>
          <Grid item lg={8} >
            <Outlet />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};
