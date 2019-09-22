// # Core
import React from "react";
import ReactDOM from "react-dom";

// # Redux
import { Provider } from "react-redux";

// Components
import App from "./container/App";

// # Instruments
import "./themes/scss/main.scss";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
