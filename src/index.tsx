import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from 'App';

import theme from 'theme';
import GlobalStyles from 'globalStyles';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
      <GlobalStyles />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root'),
);
