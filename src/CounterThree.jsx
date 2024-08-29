import React, { useReducer } from "react";

const initialState = 0;
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
const CounterThree = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTow] = useReducer(reducer, initialState);
  return (
    <div>
      {count}
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
      <div>
        {countTwo}
        <button
          onClick={() => {
            dispatchTow("increment");
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatchTow("decrement");
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatchTow("reset");
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterThree;
