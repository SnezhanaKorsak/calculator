import React from 'react';

import { ButtonStyle, StyledControlPanel } from 'components/controlPanel/components';
import { ControlPanelProps } from 'components/controlPanel/types';

function Index({ visible, toggleHistory }: ControlPanelProps) {
  return (
    <StyledControlPanel>
      <ButtonStyle onClick={toggleHistory}>{visible ? '◀' : '▶'}</ButtonStyle>
    </StyledControlPanel>
  );
}

export default Index;

// ▶ ◀
