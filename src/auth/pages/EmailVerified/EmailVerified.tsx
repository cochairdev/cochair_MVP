import { Grid, Typography, Box, Fab  } from '@mui/material';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';

const EmailVerified = () => {
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
      <Fab aria-label="like" sx={{ backgroundColor:  '#09AF00' }}>
        <MarkEmailUnreadOutlinedIcon sx={{ color: "#FFFF" }} />
      </Fab>
      <Typography component="h1" variant="h5" fontSize={20} sx={{ color: "#000", fontWeight: 700 }}>
        Please verify your email
      </Typography>
      <div >
        <Typography component="p" >
            In 5 seconds you will be automatically redirectedto the platform. 
        </Typography>
      </div>
      <Typography component="p" >
            Not redirected? <Box component="span" sx={{ '&:hover': { color: '#007BFF' } }} >Take me to the platform</Box>
      </Typography>
    </Grid>
    
  </Box>
)
    
}

export default EmailVerified