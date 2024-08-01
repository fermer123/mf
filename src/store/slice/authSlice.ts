/* eslint-disable no-param-reassign */
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const USER = 'user';
const ACCESS_KEY = 'access';

export interface IInitialState {
  name: string;
  token: string;
}

export interface IAuthPayload {
  name: string;
  token: string;
}

export type IAuthPayloadError = {
  status: number;
  data: string;
};

const initialState: IInitialState = {
  name: localStorage.getItem(USER) ?? '',
  token: localStorage.getItem(ACCESS_KEY) ?? '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials(state, action: PayloadAction<IAuthPayload>) {
      const {name, token} = action.payload;
      state.name = name;
      state.token = token;
      localStorage.setItem(USER, JSON.stringify(action.payload.name));
      localStorage.setItem(ACCESS_KEY, JSON.stringify(action.payload.token));
    },
    logout: (state) => {
      state.name = null;
      state.token = null;
      localStorage.removeItem(USER);
      localStorage.removeItem(ACCESS_KEY);
    },
  },
  // extraReducers: (builder) => {
  //   builder.addMatcher(
  //     authApi.endpoints.login.matchFulfilled,
  //     (state, {payload}: PayloadAction<IAuthPayload>) => {
  //       console.log(payload);
  //       state.token = payload.token;
  //       state.name = payload.name;
  //     },
  //   );
  // builder.addMatcher(
  //   authApi.endpoints.register.matchRejected,
  //   (state, {payload}: PayloadAction<IAuthPayloadError>) => {
  //     console.log(payload);
  //   },
  // );
  // },
});
export const {setCredentials, logout} = authSlice.actions;
export default authSlice.reducer;
