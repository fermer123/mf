import {ThemeProvider as ScThemeProvider} from 'styled-components';

import {StyledEngineProvider} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useTheme} from '@store/slice/themeSlice';

import {darkThemeColors, lightThemeColors} from './default_variables';

const Theme = ({children}: {children: React.ReactNode}) => {
  const muiTheme = createTheme();
  const theme = useTheme();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <ScThemeProvider
          theme={theme === 'dark' ? darkThemeColors : lightThemeColors}>
          {children}
        </ScThemeProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
export default Theme;
