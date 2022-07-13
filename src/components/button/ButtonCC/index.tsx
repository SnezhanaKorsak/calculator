import React from 'react';

import { ButtonProps } from 'components/button/types';

import { ButtonNull, ButtonResult, StyledButton } from 'components/button/components';

class ButtonCC extends React.PureComponent<ButtonProps> {
  render(): React.ReactNode {
    const { className, value, callback } = this.props;

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
}

export default ButtonCC;
