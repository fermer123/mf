import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import AppRouter from '@app/provider/AppRouter';
import GlobalStyle from '@app/styles/global';
import Theme from '@app/styles/Theme';

import ErrorBoundary from './features/ErrorBoundary/ErrorBoundary';
import {withProvider} from './shared/hooks/withProvider/withProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Provider = withProvider();
root.render(
  <Provider>
    <ErrorBoundary>
      <Theme>
        <GlobalStyle />
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Theme>
    </ErrorBoundary>
  </Provider>,
);
