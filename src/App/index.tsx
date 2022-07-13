import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { Card, PageLayout } from 'layouts';

import Header from 'components/Header';
import CalculatorFC from 'containers/calculator/CalculatorFC';
import CalculatorCC from 'containers/calculator/CalculatorCC';
import ErrorBoundary from 'components/ErrorBoundary';

import { HOME_CC_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from 'constants/router';
import SettingsFC from 'containers/settings/SettingsFC';

function App() {
  return (
    <PageLayout>
      <Card>
        <ErrorBoundary>
          <Header />
          <Routes>
            <Route path="/" element={<CalculatorFC />} />
            <Route path={HOME_CC_PAGE_ROUTE} element={<CalculatorCC />} />
            <Route path={SETTINGS_PAGE_ROUTE} element={<SettingsFC />} />
          </Routes>
        </ErrorBoundary>
      </Card>
    </PageLayout>
  );
}

export default App;
