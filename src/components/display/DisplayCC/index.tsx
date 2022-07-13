import React from 'react';

import { DisplayProps } from 'components/display/types';

import { StyledDisplay } from 'components/display/components';

class DisplayCC extends React.PureComponent<DisplayProps> {
  render(): React.ReactNode {
    const { output, displayHistory } = this.props;

    return (
      <StyledDisplay>
        <div className="display-history">{displayHistory}</div>
        <div>{output}</div>
      </StyledDisplay>
    );
  }
}

export default DisplayCC;
