import React from 'react';

import { ButtonProps } from 'components/button/types';

import { StyledButton } from 'components/button/styled';

const ButtonFC: React.FC<ButtonProps> = ({ className, value, onButtonClick }) => {
  const buttonClickHandler = () => onButtonClick(value);

  return (
    <StyledButton className={className} onClick={buttonClickHandler}>
      {value}
    </StyledButton>
  );
};

export default ButtonFC;
