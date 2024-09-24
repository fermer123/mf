import React from 'react';
import {Provider} from 'react-redux';

import {setupStore} from '@src/store';

const store = setupStore();

export const withProvider = () => {
  return ({children}: {children: React.ReactNode}) => (
    // добавить контекст
    <Provider store={store} context={null}>
      {children}
    </Provider>
  );
};
