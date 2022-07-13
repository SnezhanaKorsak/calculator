import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import Provider from 'react-redux/es/components/Provider';
import { store } from 'store';

import App from 'App';
import GlobalStyles from 'globalStyles';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    <GlobalStyles />
  </BrowserRouter>,
  document.getElementById('root'),
);
