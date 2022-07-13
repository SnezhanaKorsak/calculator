import React from 'react';

import { ButtonStyle, StyledControlPanel } from 'components/controlPanel/components';
import { ControlPanelProps } from 'components/controlPanel/types';

function ControlPanelFC({ visible, toggleHistory }: ControlPanelProps) {
  return (
    <StyledControlPanel>
      <ButtonStyle onClick={toggleHistory}>{visible ? '◀' : '▶'}</ButtonStyle>
    </StyledControlPanel>
  );
}

export default ControlPanelFC;
