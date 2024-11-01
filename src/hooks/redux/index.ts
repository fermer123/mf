import {createContext} from 'react';
import type {ReactReduxContextValue} from 'react-redux';
import {
  createDispatchHook,
  createSelectorHook,
  createStoreHook,
} from 'react-redux';

export const context = createContext<ReactReduxContextValue | null>(null);
export const useDispatch = createDispatchHook(context);
export const useSelector = createSelectorHook(context);
export const useStore = createStoreHook(context);
