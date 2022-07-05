import React from 'react';

import ButtonFC from 'components/button/ButtonFC';

import { buttons } from 'constants/data';

import { StyledKeyPad } from 'components/keyPad/components';

function KeyPadFC() {
  return (
    <StyledKeyPad>
      {buttons.map(({ id, className, value }) => (
        <ButtonFC key={id} className={className} value={value} />
      ))}
    </StyledKeyPad>
  );
}

export default KeyPadFC;
