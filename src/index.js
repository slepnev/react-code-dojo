import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "./reducers/index"

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./styles/index.scss";
import App from "./containers/App";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
