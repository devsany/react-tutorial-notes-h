import React, { useContext } from "react";
import { AppProvider } from "./CompA";

const CompD = () => {
  const dispatch = useContext(AppProvider);
  return (
    <div>
      <h2>Component D</h2>
      <button onClick={() => dispatch.dispatch("reset")}>Reset</button>
    </div>
  );
};

export default CompD;
