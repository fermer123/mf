import {lazy} from 'react';
import {RouteProps} from 'react-router-dom';

const Register = lazy(() => import('@pages/Register/Register'));
const Login = lazy(() => import('@pages/Login/Login'));
const Home = lazy(() => import('@pages/Home/Home'));
const NotFoundPage = lazy(() => import('@pages/NotFoundPage/NotFoundPage'));

export enum AppRoutes {
  HOME = 'home',
  LOGIN = 'login',
  REGISTER = 'register',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.REGISTER]: '/register',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <Home />,
  },
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <Login />,
  },
  [AppRoutes.REGISTER]: {
    path: RoutePath.register,
    element: <Register />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
