import Layout from "../layout/Layout";
import { Box } from '@mui/material';

import { Outlet } from "react-router-dom";

export const DashboardPage = () => {
  return (
    <Layout>
      <Box sx={{ display: 'flex', backgroundColor:'white'}} >

       <Outlet />
       </Box>
    </Layout>
  );
};
