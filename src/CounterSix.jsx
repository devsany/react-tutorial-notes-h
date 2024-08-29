import React, { useReducer } from "react";
const initialState = {
  firstCount: 0,
  secondCount: 10,
};
const reduce = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCount: state.firstCount + action.value };
      break;
    case "decrement":
      return { ...state, firstCount: state.firstCount - action.value };
      break;
    case "reset":
      return { ...state, firstCount: action.value };
      break;

    case "increment1":
      return { ...state, secondCount: state.secondCount + action.value };
      break;
    case "decrement1":
      return { ...state, secondCount: state.secondCount - action.value };
      break;
    case "reset1":
      return { ...state, secondCount: action.value };
      break;
    default:
      return state;
      break;
  }
};
const CounterSix = () => {
  const [count, dispatch] = useReducer(reduce, initialState);
  const [count1, dispatch1] = useReducer(reduce, initialState);
  return (
    <div>
      <h2>Counter Six 1</h2>
      <h2> Counter 1: {count.firstCount}</h2>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 2 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset", value: 0 })}>
        Reset
      </button>

      <h2>Counter Six 2</h2>
      <h2> Counter 2: {count.secondCount}</h2>
      <button onClick={() => dispatch({ type: "increment1", value: 10 })}>
        Increment1
      </button>
      <button onClick={() => dispatch({ type: "decrement1", value: 5 })}>
        Decrement1
      </button>
      <button onClick={() => dispatch({ type: "reset1", value: 0 })}>
        Reset1
      </button>
    </div>
  );
};

export default CounterSix;
