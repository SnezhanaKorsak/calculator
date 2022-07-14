import React from 'react';

import { DisplayProps } from 'components/display/types';

import { StyledDisplay, StyledDisplayHistory, StyledDisplayResult } from 'components/display/components';

function DisplayFC({ output, displayHistory }: DisplayProps) {
  return (
    <StyledDisplay>
      <StyledDisplayHistory id="display-history">{displayHistory}</StyledDisplayHistory>
      <StyledDisplayResult type="text" value={output} readOnly />
    </StyledDisplay>
  );
}

export default DisplayFC;
