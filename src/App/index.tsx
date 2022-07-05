import React from 'react';

import { Card, PageLayout } from "layouts";

import Header from "components/Header";
import CalculatorFC from "components/calculator/CalculatorFC";


function App() {

  return (
    <PageLayout>
      <Card>
        <Header/>
        <CalculatorFC/>
      </Card>
    </PageLayout>
  );
}

export default App;
