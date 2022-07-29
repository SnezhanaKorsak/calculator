import React from 'react';

import { DisplayProps } from 'components/display/types';

import { StyledDisplay, StyledDisplayHistory, StyledDisplayResult } from 'components/display/styled';

class DisplayCC extends React.PureComponent<DisplayProps> {
  render(): React.ReactNode {
    const { output, displayHistory } = this.props;

    return (
      <StyledDisplay>
        <StyledDisplayHistory id="display-history">{displayHistory}</StyledDisplayHistory>
        <StyledDisplayResult type="text" value={output} readOnly />
      </StyledDisplay>
    );
  }
}

export default DisplayCC;
