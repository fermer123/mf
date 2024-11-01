import type {TypedUseSelectorHook} from 'react-redux';

import {RootState} from '@store/index';

import {useSelector} from './index';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
