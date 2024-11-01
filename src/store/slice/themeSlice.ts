/* eslint-disable no-param-reassign */
import useAppSelector from '@hooks/redux/useAppSelector';
import {createSlice} from '@reduxjs/toolkit';

const THEME = 'theme';
const supportedThemes = {
  light: 'light',
  dark: 'dark',
};
type Themes = keyof typeof supportedThemes;

export interface IThemeState {
  theme: Themes;
}

const initialState: IThemeState = {
  theme:
    (localStorage.getItem(THEME) as Themes) || (supportedThemes.dark as Themes),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state) {
      state.theme = state.theme === supportedThemes.dark ? 'light' : 'dark';
      localStorage.setItem(THEME, state.theme);
    },
  },
});
export const {setTheme} = themeSlice.actions;
export const useTheme = (): Themes => {
  return useAppSelector((state) => state.theme.theme);
};
export default themeSlice.reducer;
