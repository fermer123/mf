import {useMemo} from 'react';

import {bindActionCreators} from '@reduxjs/toolkit';
import {allActions} from '@store/slice/rootActions';

import {useDispatch} from '.';

export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch]);
};
