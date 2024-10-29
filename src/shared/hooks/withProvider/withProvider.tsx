import React from 'react';
import {Provider} from 'react-redux';

import {setupStore} from '@src/store';

import {context} from '../redux';

const store = setupStore();

export const withProvider = () => {
  return ({children}: {children: React.ReactNode}) => (
    <Provider store={store} context={context}>
      {children}
    </Provider>
  );
};
