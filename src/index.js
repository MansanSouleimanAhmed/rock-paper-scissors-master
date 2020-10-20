import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./css/app.min.css";
import App from "./app.js";

export default function Index() {
  return (
    <Fragment>
      <App />
    </Fragment>
  );
}

ReactDOM.render(<Index />, document.querySelector("#app"));
