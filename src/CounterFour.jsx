import React, { useReducer } from "react";

const initialState = {
  initialCount: 0,
  initialCountTwo: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, initialCount: state.initialCount + action.value };

    case "decrement":
      return { ...state, initialCount: state.initialCount - action.value };

    case "reset":
      return { ...state, initialCount: action.value };

    case "increment1":
      return {
        ...state,
        initialCountTwo: state.initialCountTwo + action.value,
      };

    case "decrement1":
      return {
        ...state,
        initialCountTwo: state.initialCountTwo - action.value,
      };

    case "reset1":
      return { ...state, initialCountTwo: action.value };

    default:
      return state;
  }
};
const CounterFour = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>CounterFour One</h2>
      count :- {count.initialCount}
      <button onClick={() => dispatch({ type: "increment", value: 2 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 2 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset", value: 0 })}>
        Reset
      </button>
      <hr />
      <h2>CounterFour Two</h2>
      count :- {count.initialCountTwo}
      <button onClick={() => dispatch({ type: "increment1", value: 1 })}>
        Increment1
      </button>
      <button onClick={() => dispatch({ type: "decrement1", value: 1 })}>
        Decrement1
      </button>
      <button onClick={() => dispatch({ type: "reset1", value: 10 })}>
        Reset1
      </button>
    </div>
  );
};

export default CounterFour;
