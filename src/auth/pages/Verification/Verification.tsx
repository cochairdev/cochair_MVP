import { useState, useEffect } from 'react';
import { Grid, Typography, Box, Fab , Snackbar } from '@mui/material';
import { useLocation } from 'react-router-dom';

import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import { useAppDispatch, useAppSelector } from '../../../store';
import { sendVerificationEmail } from '../../../firebase/providers';
export const Verification = () => {

  const { success } = useAppSelector((state) => state.auth);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get('email');
  const dispatch = useAppDispatch();
  const [showToast, setShowToast] = useState(false);

  const resendEmail = ():void=> {
    dispatch(sendVerificationEmail({}))
  }

  useEffect(()=>{
    if(success){
      setShowToast(true)
    }
  }, [success, dispatch])

  return (
    <Box sx={{ display: 'flex', height: '100vh', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} className='animate__animated animate__fadeIn animate__faster'>
      <Grid
        container
        sx={{
          borderRadius: "12px",
          maxWidth: "600px",
          padding: 4,
          gap: 4,
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Fab aria-label="like" sx={{ backgroundColor: "#3F51B5" }}>
          <MarkEmailUnreadOutlinedIcon sx={{ color: "#FFFF" }} />
        </Fab>
        <Typography component="h1" variant="h5" fontSize={20} sx={{ color: "#000", fontWeight: 700 }}>
          Please verify your email
        </Typography>
        <div >
          <Typography component="p" >
            You're almost there! We sent an email to  <span style={{ color: '#3F51B5' }}>{email}</span>
          </Typography>
          <Typography component="p" >
            Just click on the link in that email to complete your sign up.
          </Typography>
        </div>
        <Typography component="p" >
          Still can't find the email? <Box component="span" onClick={resendEmail}  sx={{ '&:hover': { color: '#007BFF' } }} style={{
            color: '#3F51B5', textDecoration: 'underline', cursor: 'pointer',
            transition: 'color 0.2s ease-in-out',
          }} >Resend Email</Box>
        </Typography>
      </Grid>
      {
        showToast && <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' } }
        open={showToast}
        onClose={()=>setShowToast(false)}
        autoHideDuration={2000}
        message="We sent an email to your email address, please verify your email."
        key='Success verification email'
      />
      }
    </Box>
  )
}
