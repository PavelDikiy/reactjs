import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './containers/App/App';

import CreditRateService from './services/creditrate-service';
import { CreditRateServiceProvider } from './components/creditrate-service-context';
import store from './store';

import './index.css';

const creditRateService = new CreditRateService();

render(
  <Provider store={store}>
    <CreditRateServiceProvider value={creditRateService}>
      <Router>
        <App />
      </Router>
    </CreditRateServiceProvider>
  </Provider>,
  document.getElementById('root')
);