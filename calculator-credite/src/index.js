import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
/*import * as serviceWorker from './serviceWorker';*/
import {BrowserRouter as Router} from 'react-router-dom';

import {Provider} from 'react-redux';
import CreditRate from './services/creditrate-service';
import {CreditRateServiceProvider} from './components/creditrate-service-context';
import store from './store';

const creditRateService = new CreditRate();

ReactDOM.render(
  <Provider store={store}>
    <CreditRateServiceProvider value={creditRateService}>
      <Router>
        <App />
      </Router>
    </CreditRateServiceProvider>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
/*serviceWorker.unregister();*/
