import React from 'react';

import { useAppDispatch } from 'hooks/hooks';
import { clearAllHistory } from 'reducers/historyReducer';

import SwitchThemeFC from 'components/switchTheme/SwitchThemeFC';

import { ButtonClear, StyledSettings } from 'containers/settings/styled';

const SettingsFC = () => {
  const dispatch = useAppDispatch();

  const clearHistoryHandler = () => {
    dispatch(clearAllHistory());
  };

  return (
    <StyledSettings>
      <h1>Settings</h1>
      <SwitchThemeFC />
      <ButtonClear onClick={clearHistoryHandler}>Clear All History</ButtonClear>
    </StyledSettings>
  );
};

export default SettingsFC;
