
import {
    Grid,
    IconButton,
    Avatar,
    Typography
} from '@mui/material';
import { useUserStore } from '../stores';

export default function MenuUser() {
    const name = useUserStore((state) => state.name);
    const lastName = useUserStore((state) => state.lastName);
    const email = useUserStore((state) => state.email);


    return (
      <Grid container spacing={1} alignItems="center">
        <Grid item>
          <IconButton  sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Grid>  
        <Grid item>
          <Typography sx={{color:"#1D1B20"   , fontWeight:600 }}>{name} {lastName}</Typography>
          <Typography sx={{color:"#49454F"  , fontWeight:400}}>{email}</Typography>
        </Grid>
      </Grid>
    )
}
