import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./index.scss";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
