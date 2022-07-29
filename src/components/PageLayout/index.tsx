import React, { ReactNode } from 'react';

import ErrorBoundary from 'components/ErrorBoundary';
import Header from 'components/Header';

import { Card, StyledPageLayout } from 'components/PageLayout/styled';

const PageLayout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <StyledPageLayout>
    <Card id="card">
      <ErrorBoundary>
        <Header />
        {children}
      </ErrorBoundary>
    </Card>
  </StyledPageLayout>
);

export default PageLayout;
