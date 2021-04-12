import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "./helpers";
import { App } from "./App";

const rootElement = document.getElementById("app");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
