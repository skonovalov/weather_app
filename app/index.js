import React from "react";
import {render} from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import css from "./css/index.css";

import rootReducer from './components/reducers/index.js';
import App from "./components/App";

import initialState from "./components/constants";

let store = createStore(rootReducer, initialState);

store.subscribe(()=>{
    console.log('store');
});

store.dispatch({type: "GET_CURRENT_TEMP", currentTemp: "20"});
store.dispatch({type: "GET_CURRENT_CITY", currentCity: "Moscow"});
store.dispatch({type: "ADD_CITY", city: "Paris"});

render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('content')
);
