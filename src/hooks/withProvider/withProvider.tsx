import React from 'react';
import {Provider} from 'react-redux';

import {setupStore} from '@store/index';

import {context} from '../redux/index';

const store = setupStore();

export const withProvider = () => {
  return ({children}: {children: React.ReactNode}) => (
    <Provider store={store} context={context}>
      {children}
    </Provider>
  );
};

// export const withProvider = <T,>(Component: FC<T>) => {
//   return (props: T) => (
//     <Provider store={store} context={context}>
//       <Component {...props} />
//     </Provider>
//   );
// };
