import {AppDispatch} from '@store/index';

import {useDispatch} from './index';

const useAppDispatch = () => useDispatch<AppDispatch>();
export default useAppDispatch;
