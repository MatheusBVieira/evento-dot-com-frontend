import { createMuiTheme } from '@material-ui/core/styles';

export const theme = {
  colors: {
    background: '#262626',
    backgroundSecondary: '#353535',
    backgroundLight: '#FAFAFC',
    headerBackground: '#0D0D0D',
    baseText: '#404040',
    ligthText: '#fafafc',
    inputBackground: '#FAFAFC',
    inputBackgroundDarker: '#C4C4C4',
    lineWhite: '#E6E6F0',
    complementText: '#757575',
    primary: '#18C572',
    primaryText: '#18C572',
    primaryTextDarker: '#04BF58',
    secondary: '#FF9023',
    featuredText: '#FF2948',
    success: '#4caf50',
    successDark: '#337535',
    info: '#2196f3',
    infoDark: '#165f9a',
    warning: '#ff9800',
    warningDark: '#b16901',
    error: '#f44336',
    errorDark: '#a52f26',
  },
  fonts: {
    titleLarge: "700 3rem 'Baloo Tamma 2'",
    title: "700 2.5rem 'Baloo Tamma 2'",
    regularSemiBoldLarge: '600 3rem Poppins',
    regularSemiBold: '600 1.6rem Poppins',
    regular: '1.6rem Poppins',
    regularSmall: '1.4rem Poppins',
  },
  elevation: [
    `box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);`,
    `box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);`,
    `box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);`,
    `box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);`,
  ],
};

export const materialTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF9023',
      contrastText: '#FAFAFC',
    },
    secondary: {
      main: '#18C572',
      contrastText: '#FAFAFC',
    },
    error: {
      main: '#f44336',
      contrastText: '#FAFAFC',
    },
  },
});
