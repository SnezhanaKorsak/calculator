import React, { useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import CalculatorFC from 'containers/calculator/CalculatorFC';
import CalculatorCC from 'containers/calculator/CalculatorCC';
import SettingsFC from 'containers/settings/SettingsFC';
import SettingsCC from 'containers/settings/SettingsCC';
import PageLayout from 'components/PageLayout';

import { useAppSelector } from 'hooks/hooks';
import {
  HOME_CC_PAGE_ROUTE,
  SETTINGS_CC_PAGE_ROUTE,
  SETTINGS_FC_PAGE_ROUTE,
} from 'constants/router';

import { getSelectedTheme } from 'utils/getSelectedTheme';

const App = () => {
  const { currentTheme } = useAppSelector((state) => state.theme);

  const theme = useCallback(() => getSelectedTheme(currentTheme), [currentTheme]);

  return (
    <ThemeProvider theme={theme}>
      <PageLayout>
        <Routes>
          <Route path="/" element={<CalculatorFC />} />
          <Route path={HOME_CC_PAGE_ROUTE} element={<CalculatorCC />} />
          <Route path={SETTINGS_FC_PAGE_ROUTE} element={<SettingsFC />} />
          <Route path={SETTINGS_CC_PAGE_ROUTE} element={<SettingsCC />} />
        </Routes>
      </PageLayout>
    </ThemeProvider>
  );
};

export default App;
