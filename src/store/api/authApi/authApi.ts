import {RoutePath} from '@app/routeConfig/routeConfig';
import {setCredentials} from '@store/slice/authSlice';
import {IAuthDataRequest, IAuthDataResponse} from '@store/types/auth';

import {baseQueryWithReAuth} from '../baseQuery';
import {createCustomApi} from '..';

export const authApi = createCustomApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithReAuth,
  tagTypes: ['login', 'register'],
  endpoints: (build) => ({
    login: build.mutation<IAuthDataResponse, IAuthDataRequest>({
      query: (body) => ({
        url: 'login',
        method: 'POST',
        body,
      }),
      async onQueryStarted(args, {dispatch, queryFulfilled}) {
        try {
          const {data} = await queryFulfilled;
          dispatch(setCredentials(data));
          window.location.href = RoutePath.home;
        } catch (error) {
          window.location.href = RoutePath.login;
        }
      },
      invalidatesTags: ['login'],
    }),

    register: build.mutation<IAuthDataResponse, IAuthDataRequest>({
      query: (body) => ({
        url: 'register',
        method: 'POST',
        body,
      }),
      async onQueryStarted(args, {dispatch, queryFulfilled}) {
        try {
          const {data} = await queryFulfilled;
          dispatch(setCredentials(data));
          window.location.href = RoutePath.home;
        } catch (error) {
          window.location.href = RoutePath.register;
        }
      },
      invalidatesTags: ['register'],
    }),
  }),
});

export const {
  // авторизация
  useLoginMutation,
  // регистрация
  useRegisterMutation,
} = authApi;
