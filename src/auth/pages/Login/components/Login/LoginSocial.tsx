
import {
  Button,
  Box
} from '@mui/material';

import LinkedlnIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
interface Props{
  handleLoginGoogle :() => void
}
export const LoginSocial = ({handleLoginGoogle}: Props) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1.5 }}>
    <Button
      fullWidth
      disabled={false}
      size="large"
      variant="outlined"
      startIcon={<GoogleIcon />}
      sx={{
        textTransform: 'none',
        fontWeight: 500,
        borderRadius: 100,
        borderColor: "#CAC4D0"
      }}
      onClick={handleLoginGoogle}
    >
      Google
    </Button>
    <Button
      fullWidth
      disabled={false}
      size="large"
      variant="outlined"
      startIcon={<LinkedlnIcon />}
      sx={{
        textTransform: 'none',
        fontWeight: 500,
        borderRadius: 100,
        color: "#3F51B5",
        borderColor: "#CAC4D0"
      }}
    >
      LinkedIn

    </Button>

  </Box>

  )
}
