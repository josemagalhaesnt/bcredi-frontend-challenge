import React from 'react';

import headerLogo from '../../../../assets/img/logo.svg';
import HeaderContainer from './styles';

const CadastroHeader = () => {
  return (
    <HeaderContainer>
      <img src={headerLogo} alt="BCredi" />
    </HeaderContainer>
  );
};

export default CadastroHeader;
