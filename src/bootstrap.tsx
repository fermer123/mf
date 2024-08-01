import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import AppRouter from '@app/provider/AppRouter';
import GlobalStyle from '@app/styles/global';
import Theme from '@app/styles/Theme';

import {setupStore} from './store';

const store = setupStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Theme>
      <GlobalStyle />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Theme>
  </Provider>,
);
