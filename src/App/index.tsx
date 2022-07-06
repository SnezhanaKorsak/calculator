import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { Card, PageLayout } from 'layouts';

import Header from 'components/Header';
import CalculatorFC from 'components/calculator/CalculatorFC';
import CalculatorCC from 'components/calculator/CalculatorCC';

import { HOME_CC_PAGE_ROUTE } from 'constants/router';

function App() {
  return (
    <PageLayout>
      <Card>
        <Header />
        <Routes>
          <Route path="/" element={<CalculatorFC />} />
          <Route path={HOME_CC_PAGE_ROUTE} element={<CalculatorCC />} />
        </Routes>
      </Card>
    </PageLayout>
  );
}

export default App;
