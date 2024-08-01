import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';

import type {RootState} from '..';
import {logout, setCredentials} from '../slice/authSlice';

import {IAuthDataResponse} from './types/types';

const baseQuery = fetchBaseQuery({
  baseUrl: baseURL,
  // credentials: 'include', //для куки
  prepareHeaders: (headers, {getState}) => {
    const {token} = (getState() as RootState).auth;
    if (token) {
      headers.set('Authorization', token || null);
      headers.set('accept', 'application/json');
      headers.set('Content-Type', 'application/json');
    }
    return headers;
  },
});
export const baseQueryWithReAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery('login/refresh', api, extraOptions);
    if (refreshResult?.data) {
      // const user = (api.getState() as RootState).authSlice.access_token;
      api.dispatch(setCredentials(refreshResult.data as IAuthDataResponse));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};
