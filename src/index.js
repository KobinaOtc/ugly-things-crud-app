import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";

import {Provider} from "react-redux";

import {createStore} from "redux";
import reducers from "./reducers";

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

let Root = () => (
  <Provider store={store}>
    <App/>
  </Provider>
)


ReactDOM.render(<Root />, document.querySelector("#root"));
