import React from 'react';

import { ControlPanelProps } from 'components/controlPanel/types';

import { ButtonStyle, StyledControlPanel } from 'components/controlPanel/components';

function ControlPanelFC({ visible, toggleHistory }: ControlPanelProps) {
  return (
    <StyledControlPanel>
      <ButtonStyle onClick={toggleHistory}>{visible ? '◀' : '▶'}</ButtonStyle>
    </StyledControlPanel>
  );
}

export default ControlPanelFC;
