import React from "react";
import {createStore} from "redux";
import {Provider} from "redux/react";

import * as reducers from "reducers";
import CounterApp from "views/containers/CounterApp";

const store = createStore(reducers);

export default class App {
  render() {
    return (
      <Provider store={store}>
      {() => <CounterApp/>}
      </Provider>
    );
  }
}
