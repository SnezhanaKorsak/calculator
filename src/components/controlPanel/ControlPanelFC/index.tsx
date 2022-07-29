import React from 'react';

import { ControlPanelProps } from 'components/controlPanel/types';

import { ButtonStyle, StyledControlPanel } from 'components/controlPanel/styled';

const ControlPanelFC: React.FC<ControlPanelProps> = ({ visible, toggleHistory }) => (
  <StyledControlPanel>
    <ButtonStyle onClick={toggleHistory}>{visible ? '◀' : '▶'}</ButtonStyle>
  </StyledControlPanel>
);

export default ControlPanelFC;
