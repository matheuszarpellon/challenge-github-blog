import React from 'react';
import { SpinnerContainer } from './styles';

interface SpinnerProps {

}

const Spinner: React.FC<SpinnerProps> = () => {
  return (
    <SpinnerContainer>
      <div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </SpinnerContainer>
  );
};

export default Spinner;