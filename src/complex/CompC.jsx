import React, { useContext } from "react";
import CompD from "./CompD";
import { AppProvider } from "./CompA";

const CompC = () => {
  const dispatch = useContext(AppProvider);
  return (
    <div>
      <h2>Component C</h2>
      <button onClick={() => dispatch.dispatch("decrement")}>Decrement</button>
      <CompD />
    </div>
  );
};

export default CompC;
