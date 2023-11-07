
import Layout from "../layout/Layout"

import { Grid, Paper, Typography, Divider, Box } from '@mui/material';
import { LoginForm } from './Login/components/Login/LoginForm';
import { LoginSocial } from './Login/components/Login/LoginSocial';

import CochairIcon from '../../assets/images/logo_cochair.svg';
import { Carousel } from './Login/components/Carousel';


import {images} from '../../lib/imagesCarouse';

export const LoginPage = () => {


  const handleSubmit = () => {
    console.log('handleSubmit')
  }
  const loginGoogle = () => {
    //handleLoginGoogle()
  }

  return (
    <Layout>
      <Grid item xs={12} sm={6} md={6} component={Paper} paddingTop={3} paddingBottom={2} paddingLeft={4} paddingRight={4} sx={{ display: 'flex', flexDirection: 'column', borderRadius: '10px' , justifyContent:'space-between'}}>
        <Box>
          <img src={CochairIcon} alt="logo" />
        </Box>

          <Box>
            <Typography component="h1" variant="h5" fontSize={20} sx={{ color: "#000", fontWeight: 700 }}>
              Welcome to Cochair
            </Typography>
            <Typography component="h2" variant="h6" fontSize={14} sx={{ color: "#625B71", fontWeight: 400}}>
              Select a method to sign up
            </Typography>
          </Box>

          <LoginSocial handleLoginGoogle={loginGoogle}/>
          
          <Divider sx={{
            fontStyle: 'italic',
            color: '#666',
          }}>
            Or continue manually
          </Divider>
          <LoginForm handleSubmit={handleSubmit }/>
        <Box>
          <Typography component="h1" variant="h5" fontSize={14} sx={{ color: "#625B71", fontWeight: 400, textAlign: "center" }}>
            Already have an account? <a href="#">Log in</a>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={6} component={Paper} paddingTop={3} paddingBottom={2} paddingLeft={4} paddingRight={4}  bgcolor={"#3F51B5"} sx={{ display: 'flex', flexDirection: 'row', borderRadius: '10px' , justifyContent:'center', alignItems:'center' }}>
          
         <Carousel images={images}/>
      </Grid>
    </Layout>
  )
}
