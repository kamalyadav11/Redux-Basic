import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import counterReducer from "./store/reducer/counter";
import resultReducer from "./store/reducer/result";

const rootReducer = combineReducers({
  counter: counterReducer,
  result: resultReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
