import React from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom';

import AppHome from '../pages/app-home';

import AppCalculator from '../pages/app-calculator';
import Header from '../app-header';
import AppResult from '../pages/app-result';


const App = () => {
  return (

    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={AppHome}/>
        <Route path="/calculator" component={AppCalculator}/>
        <Route path="/result" component={AppResult}/>
      </Switch>
    </div>


  );
};

export default App;
