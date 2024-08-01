import ThemeToggle from '@features/ThemeToggle/ThemeToggle';

import {HeaderContainer} from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <ThemeToggle />
    </HeaderContainer>
  );
};
export default Header;
