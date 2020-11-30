import React from 'react';

import { HeaderContainer } from './styles';
import headerLogo from '../../assets/img/logo.svg';

const Header = () => {
  return (
    <HeaderContainer>
      <img src={headerLogo} alt="BCredi" />
    </HeaderContainer>
  );
};

export default Header;
