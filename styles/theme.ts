import { createTheme } from '@mui/material';
import { green, red, lightGreen, seashell } from './colors';
import rebond from './fonts/font';

const theme = createTheme({
  palette: {
    primary: {
      main: green,
    },
    secondary: {
      main: red,
    },
    success: {
      main: lightGreen,
    },
    background: {
      default: seashell,
      paper: seashell,
    },
  },
  typography: {
    fontFamily: rebond.style.fontFamily,
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          borderColor: lightGreen,
          fontSize: '1rem',
        },
        select: {
          '&:focus': {
            backgroundColor: 'transparent',
          },
        },
        icon: {
          fill: green,
        },
      },
    },
  },
});

export default theme;
