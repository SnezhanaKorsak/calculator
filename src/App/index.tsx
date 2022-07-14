import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from 'components/Header';
import CalculatorFC from 'containers/calculator/CalculatorFC';
import CalculatorCC from 'containers/calculator/CalculatorCC';
import ErrorBoundary from 'components/ErrorBoundary';
import SettingsFC from 'containers/settings/SettingsFC';
import SettingsCC from 'containers/settings/SettingsCC';

import { Card, PageLayout } from 'layouts';
import { coloredTheme, darkTheme, lightTheme } from 'theme';

import { useAppSelector } from 'utils/hooks';

import { HOME_CC_PAGE_ROUTE, SETTINGS_CC_PAGE_ROUTE, SETTINGS_FC_PAGE_ROUTE } from 'constants/router';

function App() {
  const { currentTheme } = useAppSelector((state) => state.theme);

  let theme = coloredTheme;

  if (currentTheme === 'light') {
    theme = lightTheme;
  }
  if (currentTheme === 'dark') {
    theme = darkTheme;
  }

  return (
    <ThemeProvider theme={theme}>
      <PageLayout>
        <Card id="card">
          <ErrorBoundary>
            <Header />
            <Routes>
              <Route path="/" element={<CalculatorFC />} />
              <Route path={HOME_CC_PAGE_ROUTE} element={<CalculatorCC />} />
              <Route path={SETTINGS_FC_PAGE_ROUTE} element={<SettingsFC />} />
              <Route path={SETTINGS_CC_PAGE_ROUTE} element={<SettingsCC />} />
            </Routes>
          </ErrorBoundary>
        </Card>
      </PageLayout>
    </ThemeProvider>
  );
}

export default App;
