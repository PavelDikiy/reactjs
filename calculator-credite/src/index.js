import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducer from './reducers'
<<<<<<< HEAD
import App from './containers/App';

import loanRatesData from './loan-rates-data.json.js';
=======
import App from './containers/App/App';

import loanRatesData from './loan-rates-data.json';
>>>>>>> a39b04cd0193506da65565401254a758ac3c413a

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