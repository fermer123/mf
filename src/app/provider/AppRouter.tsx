import {FC, lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';

import ProtectedRoute from '@app/ProtectedRoute/ProtectedRoute';
import {routeConfig} from '@app/routeConfig/routeConfig';
import LoadingSpinner from '@features/Loading/LoadingSpinner';
import {useAuth} from '@shared/hooks/redux/useAuth';

import {ContentContainer} from '../styles/global';

const Header = lazy(() => import('@widgets/header/Header'));

const AppRouter: FC = () => {
  const {user} = useAuth();

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Header />
      <ContentContainer>
        <Routes>
          {Object.values(routeConfig).map(({element, path}) => {
            if (path === '/login' || path === '/register' || path === '*') {
              return <Route key={path} path={path} element={element} />;
            }
            return (
              <Route
                key={path}
                path={path}
                element={<ProtectedRoute user={user}>{element}</ProtectedRoute>}
              />
            );
          })}
        </Routes>
      </ContentContainer>
    </Suspense>
  );
};

export default AppRouter;
