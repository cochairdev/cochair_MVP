
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from '@mui/material';
import theme from './cochairTheme';

export const AppTheme = ({children}: { children: React.ReactNode; }) => {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
        {children}
    </ThemeProvider>
  )
}
