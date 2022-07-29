import React from 'react';

import { DisplayProps } from 'components/display/types';

import { StyledDisplay, StyledDisplayHistory, StyledDisplayResult } from 'components/display/styled';

const DisplayFC: React.FC<DisplayProps> = ({ output, displayHistory }) => (
  <StyledDisplay>
    <StyledDisplayHistory id="display-history">{displayHistory}</StyledDisplayHistory>
    <StyledDisplayResult type="text" value={output} readOnly />
  </StyledDisplay>
);

export default DisplayFC;
