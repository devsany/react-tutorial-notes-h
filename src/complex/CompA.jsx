import React, { useReducer } from "react";
import CompB from "./CompB";
import { createContext } from "react";

const initialState = 0;
const reduce = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
      break;
    case "decrement":
      return state - 1;
      break;
    case "reset":
      return initialState;
      break;
    default:
      return state;
      break;
  }
};
export const AppProvider = React.createContext();
const CompA = () => {
  const [count, dispatch] = useReducer(reduce, initialState);

  return (
    <div>
      <h2>Component CompA</h2>
      counter:{count}
      <AppProvider.Provider value={{ dispatch: dispatch }}>
        <CompB />
      </AppProvider.Provider>
    </div>
  );
};

export default CompA;
