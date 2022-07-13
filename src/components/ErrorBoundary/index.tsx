import React, { ErrorInfo } from 'react';

import { ErrorBoundaryProps, State } from 'components/ErrorBoundary/types';

import { StyledErrorMessage } from 'components/ErrorBoundary/components';

class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <StyledErrorMessage>
          <div>Sorry.. there was an error</div>
          <div>Please try again</div>
        </StyledErrorMessage>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
