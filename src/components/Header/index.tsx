import React from 'react';
import { Logo } from '../Logo';
import { HeaderContainer } from './styles';

interface HeaderProps {
  
}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderContainer>
      <Logo />
    </HeaderContainer>
  );
};