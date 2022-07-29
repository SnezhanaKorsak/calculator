import React from 'react';

import ButtonFC from 'components/button/ButtonFC';

import { buttons } from 'constants/buttons';

import { KeyPadProps } from 'components/keyPad/types';
import { StyledKeyPad } from 'components/keyPad/styled';

const KeyPadFC: React.FC<KeyPadProps> = ({ onButtonClick }) => (
  <StyledKeyPad>
    {buttons.map(({ id, className, value }) => (
      <ButtonFC key={id} className={className} value={value} onButtonClick={onButtonClick} />
    ))}
  </StyledKeyPad>
);

export default KeyPadFC;
