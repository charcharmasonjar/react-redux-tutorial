import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./js/components/App";

// provider wraps up reac app and makes it aware
// of the entire redux's store
render (
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById("root")
);
