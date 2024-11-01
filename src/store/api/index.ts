import {useDispatch, useSelector, useStore} from '@hooks/redux';
import type {createApi} from '@reduxjs/toolkit/dist/query/react';
import {
  buildCreateApi,
  coreModule,
  reactHooksModule,
} from '@reduxjs/toolkit/dist/query/react';

export const createCustomApi: typeof createApi = buildCreateApi(
  coreModule(),
  reactHooksModule({
    useDispatch,
    useSelector,
    useStore,
  }),
);
