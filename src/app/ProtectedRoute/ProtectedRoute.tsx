import {FC, ReactNode} from 'react';
import {Navigate} from 'react-router-dom';

export interface IProtectedRouteProps {
  user: string;
  children: ReactNode;
}

const ProtectedRoute: FC<IProtectedRouteProps> = ({user, children}) => {
  if (!user) {
    return <Navigate to='/login' replace />;
  }

  return children;
};
export default ProtectedRoute;
