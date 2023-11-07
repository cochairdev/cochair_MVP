
import {
    Grid,
    IconButton,
    Avatar,
    Typography
} from '@mui/material';

export default function MenuUser() {
   
    return (
      <Grid container spacing={1} alignItems="center">
        <Grid item>
          <IconButton  sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Grid>  
        <Grid item>
          <Typography sx={{color:"#1D1B20"   , fontWeight:600 }}>Jhon Doe</Typography>
          <Typography sx={{color:"#49454F"  , fontWeight:400}}>jhon_doe@gmail.com</Typography>
        </Grid>
      </Grid>
    )
}
