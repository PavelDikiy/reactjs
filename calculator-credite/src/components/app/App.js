import React, {Component} from 'react';
import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import AppHome from '../app-home';

import AppCalculator from '../app-calculator';
import Header from '../app-header';
import AppResult from '../app-result';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path="/" component={AppHome}/>
          <Route path="/calculator" component={AppCalculator}/>
          <Route path="/result" component={AppResult}/>
        </div>
      </Router>
  );
  }
}

export default App;
