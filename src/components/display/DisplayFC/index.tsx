import React from 'react';

import { DisplayProps } from 'components/display/types';

import { StyledDisplay, StyledDisplayHistory, StyledDisplayResult } from 'components/display/components';

function DisplayFC({ output, displayHistory }: DisplayProps) {
  return (
    <StyledDisplay>
      <StyledDisplayHistory className="display-history">{displayHistory}</StyledDisplayHistory>
      <StyledDisplayResult type="text" value={output} />
    </StyledDisplay>
  );
}

export default DisplayFC;
