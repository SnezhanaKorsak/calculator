import React from 'react';

import ButtonFC from 'components/button/ButtonFC';

import { buttons } from 'constants/buttons';

import { StyledKeyPad } from 'components/keyPad/components';
import { KeyPadProps } from 'components/keyPad/types';

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
