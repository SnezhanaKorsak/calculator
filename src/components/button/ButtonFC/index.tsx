import React from 'react';

import { ButtonProps } from 'components/button/types';

import { ButtonNull, ButtonResult, StyledButton } from 'components/button/components';

function ButtonFC({ className, value }: ButtonProps) {
  return (
    <>
      {className === '' && <StyledButton>{value}</StyledButton>}
      {className === 'null' && <ButtonNull>{value}</ButtonNull>}
      {className === 'result' && <ButtonResult>{value}</ButtonResult>}
    </>
  );
}

export default ButtonFC;
