import type {AppDispatch} from '@src/store';

import {useDispatch} from '.';

const useAppDispatch = () => useDispatch<AppDispatch>();
export default useAppDispatch;
