import React from 'react';

import ButtonFC from 'components/button/ButtonFC';

import { buttons } from 'constants/buttons';

import { KeyPadProps } from 'components/keyPad/types';
import { StyledKeyPad } from 'components/keyPad/components';

function KeyPadFC({ callback }: KeyPadProps) {
  return (
    <StyledKeyPad>
      {buttons.map(({ id, className, value }) => (
        <ButtonFC key={id} className={className} value={value} callback={callback} />
      ))}
    </StyledKeyPad>
  );
}

export default KeyPadFC;
