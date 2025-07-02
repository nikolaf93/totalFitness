import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    secondary: { main: '#4fc3f7' },
    background: { default: '#fff', paper: '#f5f5f5' },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#90caf9' },
    secondary: { main: '#4fc3f7' },
    background: { default: '#121212', paper: '#1e1e1e' },
  },
}); 