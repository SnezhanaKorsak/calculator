import React from 'react';

import ButtonCC from 'components/button/ButtonCC';

import { buttons } from 'constants/buttons';

import { KeyPadProps } from 'components/keyPad/types';

import { StyledKeyPad } from 'components/keyPad/components';

class KeyPadCC extends React.PureComponent<KeyPadProps> {
  render(): React.ReactNode {
    const { callback } = this.props;

    return (
      <StyledKeyPad>
        {buttons.map(({ id, className, value }) => (
          <ButtonCC key={id} className={className} value={value} callback={callback} />
        ))}
      </StyledKeyPad>
    );
  }
}

export default KeyPadCC;
