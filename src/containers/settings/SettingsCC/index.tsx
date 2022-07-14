import React from 'react';
import { connect } from 'react-redux';

import { clearAllHistory } from 'reducers/historyReducer';

import SwitchThemeCC from 'components/switchTheme/SwitchThemeCC';

import { SettingsCCProps } from 'containers/settings/types';

import { ButtonClear, StyledSettings } from 'containers/settings/components';

class SettingsCC extends React.PureComponent<SettingsCCProps> {
  render(): React.ReactNode {
    const { clearAllHistory: clearHistory } = this.props;

    const clearHistoryHandler = () => clearHistory();

    return (
      <StyledSettings>
        <h1>Settings</h1>
        <SwitchThemeCC />
        <ButtonClear onClick={clearHistoryHandler}>Clear All History</ButtonClear>
      </StyledSettings>
    );
  }
}

export default connect(null, { clearAllHistory })(SettingsCC);
