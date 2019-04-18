import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducer from './reducers'
import App from './containers/App';

import loanRatesData from './loan-rates-data.json.js';

console.log(loanRatesData);

/**
 * 
 * Store
 * 
 */
// const store = createStore(reducer);



/**
 * 
 * Consumer, Provider
 *  
 * */ 
// const {
//   Provider: CreditRateServiceProvider,
//   Consumer: CreditRateServiceConsumer
// } = React.createContext();



/**
 * 
 * Credit service data
 * 
 */
// import CreditRateService from './services/creditrate-service';

// const creditRateService = new CreditRateService();

// class CreditRateService {
//   getRate() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(jsonData)
//       }, 1000);
//     })
//   }
// }

render(
  <Provider>
    <Router>
      <App />
    </Router>
    {/* <CreditRateServiceProvider value={creditRateService}>
      
    </CreditRateServiceProvider> */}
  </Provider>,
  document.getElementById('root')
);