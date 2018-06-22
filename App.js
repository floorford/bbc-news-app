// importing react, react native components and redux
import React from 'react';

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducer from './data/reducer';
import initial from './data/initial';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initial, composeEnhancers(applyMiddleware(thunk)));

// import the Main App component
import Main from "./Main";

// pass our store through to Main using props
const App = () => (
  <Provider store={ store }>
    <Main />
  </Provider>
)

// Your API key is: 0696675ebd6e4a2990c238aeb6f6d8c5 for this API https://newsapi.org/

export default App;
