import {DefaultTheme} from 'styled-components';

import {blue, blueGrey, grey} from '@mui/material/colors';

export const darkThemeColors: DefaultTheme = {
  primaryColor: blueGrey[100],
  secondaryColor: blue[300],
  backGroundColor: grey[900],
};

export const lightThemeColors: DefaultTheme = {
  primaryColor: grey[900],
  secondaryColor: blue[300],
  backGroundColor: grey[50],
};
