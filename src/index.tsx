import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from 'App';

import theme from 'theme';
import GlobalStyles from 'globalStyles';
import { store } from 'store';
import Provider from 'react-redux/es/components/Provider';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
      <GlobalStyles />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root'),
);
