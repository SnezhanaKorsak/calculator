import React from 'react';

import { ControlPanelProps } from 'components/controlPanel/types';

import { ButtonStyle, StyledControlPanel } from 'components/controlPanel/components';

class ControlPanelCC extends React.PureComponent<ControlPanelProps> {
  render(): React.ReactNode {
    const { toggleHistory, visible } = this.props;

    return (
      <StyledControlPanel>
        <ButtonStyle onClick={toggleHistory}>{visible ? '◀' : '▶'}</ButtonStyle>
      </StyledControlPanel>
    );
  }
}

export default ControlPanelCC;
