import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#E1E9EC',
      light: 'rgba(160, 115, 255, 0.8)',
      dark: '#70808F',
      contrastText: '#70808F',
    },
    primary: {
      main: '#A074FF',
      light: '#B9C0FF',
      dark: '#8d58ff',
      contrastText: '#fff',
    },
  },
  overrides: {

  },
});
