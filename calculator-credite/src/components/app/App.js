import React from 'react';
import './App.css';

import {Route} from 'react-router-dom';

import AppHome from '../pages/app-home';

import AppCalculator from '../pages/app-calculator';
import Header from '../app-header';
import AppResult from '../pages/app-result';
import {widthCreditRateService} from '../hoc';

const App = ({creditrateService}) => {
  console.log(creditrateService.getRate());
    return (
        <div className="App">
          <Header/>
          <Route exact path="/" component={AppHome}/>
          <Route path="/calculator" component={AppCalculator}/>
          <Route path="/result" component={AppResult}/>
        </div>
  );
}

export default widthCreditRateService()(App);
