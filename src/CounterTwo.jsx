import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secoundCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        firstCounter: state.firstCounter + action.value,
      };

    case "decrement":
      return {
        ...state,
        firstCounter: state.firstCounter - action.value,
      };

    case "increment2":
      return {
        ...state,
        secoundCounter: state.secoundCounter + action.value,
      };

    case "decrement2":
      return {
        ...state,
        secoundCounter: state.secoundCounter - action.value,
      };

    case "reset":
      return {
        firstCounter: 0,
        secoundCounter: 10,
      };

    default:
      return state;
      break;
  }
};
const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      counter 1:- {count.firstCounter} <br />
      counter 2:- {count.secoundCounter} <br />
      <button
        onClick={() => {
          dispatch({ type: "increment", value: 1 });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", value: 1 });
        }}
      >
        Decrement
      </button>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "increment2", value: 1 });
          }}
        >
          Increment counter 2
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decrement2", value: 1 });
          }}
        >
          Decrement counter 2
        </button>
      </div>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default CounterTwo;
