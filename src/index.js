import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./components/App";
import "./css/styles.less";

ReactDOM.render(
  <BrowserRouter>
    <Fragment>
      <App />
    </Fragment>
  </BrowserRouter>,
  document.getElementById("root")
);
