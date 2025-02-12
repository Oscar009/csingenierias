import { createTheme } from '@mui/material/styles';
import '@fontsource/bebas-neue';

const theme = createTheme({
  palette: {
    primary: {
      main: '#264772',
    },
    secondary: {
      main: '#122946',
    },
    error: {
      main: '#942727',
    },
  },
  typography:{
    fontFamily: 'Montserrat, sans-serif',
    h2: {
      fontFamily: '"Bebas Neue", cursive',
    },
    h3: {
      fontFamily: 'Bebas Neue, sans-serif',
    },
  }
});

export default theme;
