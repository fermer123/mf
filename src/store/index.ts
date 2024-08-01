import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {authApi} from './api/authApi/authApi';
import {wordsApi} from './api/wordsApi/wordsApi';
import authSlice from './slice/authSlice';
import themeSlice from './slice/themeSlice';

const rootReducer = combineReducers({
  [wordsApi.reducerPath]: wordsApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  auth: authSlice,
  theme: themeSlice,
});

export const setupStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: isDev,
    middleware: (getDefaultMiddleWare) =>
      getDefaultMiddleWare().concat(wordsApi.middleware, authApi.middleware),
  });
  return store;
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
