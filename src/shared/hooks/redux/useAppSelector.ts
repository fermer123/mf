import type {TypedUseSelectorHook} from 'react-redux';

import type {RootState} from '@src/store';

import {useSelector} from '.';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
