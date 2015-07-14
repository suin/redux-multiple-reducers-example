import React from "react";
import {createStore, combineReducers, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

import * as reducers from "reducers";
import CounterApp from "views/containers/CounterApp";

const reducer = combineReducers(reducers);
const finalCreateStore = applyMiddleware(thunk)(createStore);
const store = finalCreateStore(reducer);

export default class App {
  render() {
    return (
      <Provider store={store}>
      {() => <CounterApp/>}
      </Provider>
    );
  }
}
