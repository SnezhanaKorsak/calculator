import React from 'react';

import { DisplayProps } from 'components/display/types';

import { StyledDisplay } from 'components/display/components';

function DisplayFC({ output, displayHistory }: DisplayProps) {
  return (
    <StyledDisplay>
      <div className="display-history">{displayHistory}</div>
      <div>{output}</div>
    </StyledDisplay>
  );
}

export default DisplayFC;
