import Layout from "../layout/Layout"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { LoginForm } from './Login/components/Login/LoginForm';

export const LoginPage = () => {
  const handleSubmit = ()=>{
    console.log("submit")
  }
  return (
    <Layout>
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            
            <Typography component="h1" variant="h5">
              Welcome to Cochair
            </Typography>
            <Typography component="h1" variant="h5">
              Select a method to sign up 
            </Typography>
            <LoginForm/>
           
          </Box>
        </Grid>
    </Layout>
  )
}
