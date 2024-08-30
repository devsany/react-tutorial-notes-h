import React from "react";
import { useState } from "react";
import useCounter from "./useCounter";

const Counter = () => {
  const [counter, increment, decrement, reset] = useCounter();
  return (
    <div>
      counter {counter}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>increment</button>
      <button onClick={reset}>increment</button>
    </div>
  );
};

export default Counter;
