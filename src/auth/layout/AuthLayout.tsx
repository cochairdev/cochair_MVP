import { Grid, Paper, Typography, Box } from '@mui/material';
import { Link } from "react-router-dom";

import CochairIcon  from '../../assets/images/logo_cochair.svg';
import { Carousel } from '../../components/shared/Carousel';
import {imagesCarousel} from '../../lib';

interface Props {
  title: string;
  subtitle: string;
  linkText: string;
  linkPath:string;
  linkPathText:string;
  children: React.ReactNode;

}
const AuthLayout = ({ title, subtitle, linkText, linkPath ,linkPathText,children }: Props) => {
  return (
    <Box sx={{ display: 'flex', height:'100vh', flexDirection: 'column', justifyContent:'center', alignItems: 'center' }} className='animate__animated animate__fadeIn animate__faster'>
      <Grid
        container
        component="main"
        sx={{
          height: "744px",
          borderRadius: "12px",
          maxWidth: "1128px",
        }}>
        <Grid item xs={12} sm={6} md={6} component={Paper} paddingTop={3} paddingBottom={2} paddingLeft={4} paddingRight={4} sx={{ display: 'flex', flexDirection: 'column', borderRadius: '10px', justifyContent: 'space-between', borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>
          <Box>
            <img src={CochairIcon} alt="logo" />
          </Box>

          <Box>
            <Typography component="h1" variant="h5" fontSize={20} sx={{ color: "#000", fontWeight: 700 }}>
              {title}
            </Typography>
            <Typography component="h2" variant="h6" fontSize={14} sx={{ color: "#625B71", fontWeight: 400 }}>
              {subtitle}
            </Typography>
          </Box>

          {children}

          <Box>
                <Typography component="h1" variant="h5" fontSize={14} sx={{ color: "#625B71", fontWeight: 400, textAlign: "center" }}>
                 {linkText} <Link to={linkPath}>{linkPathText}</Link>
                </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} component={Paper} paddingTop={3} paddingBottom={2} paddingLeft={4} paddingRight={4} bgcolor={"#3F51B5"} sx={{ display: 'flex', flexDirection: 'row', borderRadius: '10px', justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>
          <Carousel images={imagesCarousel}/>
        </Grid>

      </Grid>

    </Box>

  )
}

export default AuthLayout