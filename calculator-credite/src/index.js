// # Core
import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

// # Redux
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import ReduxPromise from "redux-promise";
import rootReducer from './reducers';

// # Components
import App from './containers/App';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(rootReducer);

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);