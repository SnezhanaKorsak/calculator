import React from 'react';

import ButtonCC from 'components/button/ButtonCC';

import { buttons } from 'constants/buttons';

import { KeyPadProps } from 'components/keyPad/types';

import { StyledKeyPad } from 'components/keyPad/styled';

class KeyPadCC extends React.PureComponent<KeyPadProps> {
  render(): React.ReactNode {
    const { onButtonClick } = this.props;

    return (
      <StyledKeyPad>
        {buttons.map(({ id, className, value }) => (
          <ButtonCC key={id} className={className} value={value} onButtonClick={onButtonClick} />
        ))}
      </StyledKeyPad>
    );
  }
}

export default KeyPadCC;
