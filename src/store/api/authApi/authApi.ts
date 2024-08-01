// eslint-disable-next-line import/no-cycle
import {RoutePath} from '@app/routeConfig/routeConfig';
import {createApi} from '@reduxjs/toolkit/dist/query/react';
import {setCredentials} from '@src/store/slice/authSlice';

import {baseQueryWithReAuth} from '../baseQuery';
import type {IAuthDataRequest, IAuthDataResponse} from '../types/types';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithReAuth,
  tagTypes: ['auth'],
  endpoints: (build) => ({
    login: build.mutation<IAuthDataResponse, IAuthDataRequest>({
      query: (body) => ({
        url: '/login',
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
    }),

    register: build.mutation<IAuthDataResponse, IAuthDataRequest>({
      query: (body) => ({
        url: '/register',
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
    }),
  }),
});

export const {useLoginMutation, useRegisterMutation} = authApi;
