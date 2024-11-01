import * as auth from './authSlice';
import * as theme from './themeSlice';

export const allActions = {
  ...auth,
  ...theme,
};
