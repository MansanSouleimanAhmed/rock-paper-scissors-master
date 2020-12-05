import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./css/app.min.css";
import App from "./app.js";
import {createStore} from "redux";
import allReducers from "./reducers/index";
import {Provider} from "react-redux";
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default function Index() {
  return (
    <Fragment>    
      <Provider store={store}>
           <App />
       </Provider>
    </Fragment>
  );
}

ReactDOM.render(<Index />, document.querySelector("#app"));
