import React, { useContext } from "react";
import CompC from "./CompC";
import { AppProvider } from "./CompA";

const CompB = () => {
  const dispatch = useContext(AppProvider);
  return (
    <div>
      <h2>Component B </h2>
      <button onClick={() => dispatch.dispatch("increment")}>Increment</button>
      <CompC />
    </div>
  );
};

export default CompB;
