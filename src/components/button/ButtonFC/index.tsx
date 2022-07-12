import React from 'react';

import { ButtonProps } from 'components/button/types';

import { ButtonNull, ButtonResult, StyledButton } from 'components/button/components';

function ButtonFC({ className, value, callback }: ButtonProps) {
  const clickHandler = () => {
    callback(value);
  };

  return (
    <>
      {className === '' && <StyledButton onClick={clickHandler}>{value}</StyledButton>}
      {className === 'null' && <ButtonNull onClick={clickHandler}>{value}</ButtonNull>}
      {className === 'result' && <ButtonResult onClick={clickHandler}>{value}</ButtonResult>}
    </>
  );
}

export default ButtonFC;
