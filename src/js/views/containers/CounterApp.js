import React from "react";

import Counter1 from "views/components/Counter1";
import Counter2 from "views/components/Counter2";

export default class CounterApp {
  render() {
    return (
      <div>
        <Counter1/>
        <Counter2/>
      </div>
    );
  }
}
