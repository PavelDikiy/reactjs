import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Calculator from '../../pages/Calculator';
import Header from '../../components/Header';
import Result from '../../pages/Result';
import Home from '../../pages/Home';
import './styles.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/calculator" component={Calculator} />
        <Route path="/result" component={Result} />
      </Switch>
    </div>
  );
};

export default App;
