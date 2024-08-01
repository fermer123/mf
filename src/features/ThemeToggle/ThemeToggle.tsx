import useAppDispatch from '@src/shared/hooks/redux/useAppDispatch';
import {setTheme, useTheme} from '@store/slice/themeSlice';

import {ThemeToggleButton} from './ThemeToggle.styled';

const ThemeToggle = () => {
  const dispatch = useAppDispatch();
  const theme = useTheme();

  return (
    <ThemeToggleButton
      onClick={() => dispatch(setTheme())}
      checked={theme === 'dark'}
    />
  );
};
export default ThemeToggle;
