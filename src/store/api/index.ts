import type {createApi} from '@reduxjs/toolkit/dist/query/react';
import {
  buildCreateApi,
  coreModule,
  reactHooksModule,
} from '@reduxjs/toolkit/dist/query/react';
import {useDispatch, useSelector, useStore} from '@src/shared/hooks/redux';

export const createCustomApi: typeof createApi = buildCreateApi(
  coreModule(),
  reactHooksModule({
    useDispatch,
    useSelector,
    useStore,
  }),
);
