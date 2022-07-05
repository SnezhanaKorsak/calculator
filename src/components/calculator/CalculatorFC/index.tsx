import React from 'react';

import DisplayFC from 'components/display/DisplayFC';
import KeyPadFC from 'components/keyPad/KeyPadFC';
import ControlPanelFC from 'components/controlPanel/ControlPanelFC/ControlPanelFC';

import { StyledCalculator } from 'components/calculator/components';
import HistoryFC from 'components/history/HistoryFC';

function CalculatorFC() {
  return (
    <StyledCalculator>
      <div className="main-block">
        <DisplayFC />
        <KeyPadFC />
      </div>
      <ControlPanelFC />
      <HistoryFC />
    </StyledCalculator>
  );
}

export default CalculatorFC;
