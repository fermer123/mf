import {useMemo} from 'react';

import useAppSelector from './useAppSelector';

export const useAuth = () => {
  const user =
    useAppSelector((state) => state.auth.token) ||
    localStorage.getItem('access');

  return useMemo(() => ({user}), [user]);
};
