import React from "react";
import {render} from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import css from "./css/index.css";

import rootReducer from './components/reducers/index.js';
import App from "./components/App";

const initialState = {
    currentCity: "",
    currentTemp: "",
    added: []
};

let store = createStore(rootReducer, initialState);

store.subscribe(()=>{
    console.log('store');
});

render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('content')
);
