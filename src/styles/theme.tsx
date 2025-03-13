import {createTheme} from '@rneui/themed';

const theme = createTheme({
  lightColors: {
    primary: '#e7e7e8',
    secondary: '#e7e7e8',
  },
  darkColors: {
    primary: '#000',
  },
  mode: 'light',
});

export const colors = {
  primary: '#FDD042',
  primaryLight: '#FEEF9D',
  primaryDark: '#765a00',
  secondary: '#DE473C',
  secondaryLight: '#FFE8E6',
  secondaryDark: '#93160e',
  background: '#F6F8F9',
  black: '#000',
  white: '#FFF',
  greyLight: '#dbdbdb',
  greyDark: '#535353',
  grey: '#979797',
  light: '#FFFFFF',
  disabled: '#E3E3E3',
  success: '#2CDCBE',
  info: '#5bc0de',
  warning: '#f0ad4e',
  danger: '#d9534f',
  errorBackground: '#fff6f6',
};

export default theme;
