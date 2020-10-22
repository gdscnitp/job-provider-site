import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//import signUpForWorker from "./components/signup_for_worker/signUpForWorker";
// import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
