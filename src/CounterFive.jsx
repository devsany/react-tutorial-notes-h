import React, { useReducer } from "react";

const initialState = 0;
const initialState1 = {
  firstNumber: 0,
  secondNumber: 10,
};
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "reset":
      return initialState;

    default:
      return state;
      break;
  }
};

const reducer1 = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstNumber: state.firstNumber + action.value };

    case "decrement":
      return { ...state, firstNumber: state.firstNumber - action.value };

    case "reset":
      return { ...state, firstNumber: action.value };

    default:
      return state;
      break;
  }
};
const CounterFive = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count1, dispatch1] = useReducer(reducer1, initialState1);
  return (
    <div>
      <h2>Counter Five</h2>
      Count: {count}
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch("reset");
        }}
      >
        Reset
      </button>
      <hr />
      <h2>Counter Five</h2>
      Count1: {count1.firstNumber}
      <button
        onClick={() => {
          dispatch1({ type: "increment", value: 1 });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch1({ type: "decrement", value: 1 });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch1({ type: "reset", value: 0 });
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default CounterFive;
