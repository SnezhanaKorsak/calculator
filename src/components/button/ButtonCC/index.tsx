import React from 'react';

import { ButtonProps } from 'components/button/types';

import { StyledButton } from 'components/button/styled';

class ButtonCC extends React.PureComponent<ButtonProps> {
  render(): React.ReactNode {
    const { className, value, onButtonClick } = this.props;

    const buttonClickHandler = () => onButtonClick(value);

    return (
      <StyledButton className={className} onClick={buttonClickHandler}>
        {value}
      </StyledButton>
    );
  }
}

export default ButtonCC;
