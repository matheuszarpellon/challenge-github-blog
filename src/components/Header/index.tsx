import React from 'react';
import { HeaderContainer } from './styles';
import logoSrc from "../../assets/logo.svg";

interface HeaderProps {
  
}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderContainer>
      <img src={logoSrc} alt="" />
    </HeaderContainer>
  );
};