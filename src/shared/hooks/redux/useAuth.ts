import {useMemo} from 'react';

import useAppSelector from './useAppSelector';

export const useAuth = () => {
  // const token = document.cookie
  //   .split('; ')
  //   .find((row) => row.startsWith('accessToken='))
  //   ?.split('=')[1];
  const user =
    useAppSelector((state) => state.auth.token) ||
    localStorage.getItem('access');
  return useMemo(() => ({user}), [user]);
};
