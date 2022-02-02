import { red, orange } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#556cd6',
      light: '#5c67a3',
      dark: '#2e355b',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ff8000',
      light: '#ff944d',
      dark: '#ff6600',
      contrastText: '#000',
    },
    openTitle: '#3f4771',
    protectedTitle: orange['400'],
    error: {
      main: red.A400,
    },
  },
});

export default theme;
