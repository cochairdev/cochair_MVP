import {
    Grid,
    Box,
} from '@mui/material';
import CochairLogo from './../assets/images/logo_cochair.svg';

export default function Navbar() {
    return (
        <Grid item
            paddingTop={2}
            paddingBottom={2}
        >
            <nav>
                <Box component="img"
                    src={CochairLogo} />

            </nav>
        </Grid>
    )
}
