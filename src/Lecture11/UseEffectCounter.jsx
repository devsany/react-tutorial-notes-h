import React, { useEffect, useState } from "react";

const UseEffectCounter = () => {
  const [tick, setTick] = useState(0);

  const count = () => {
    setTick((preValue) => preValue + 1);
  };
  useEffect(() => {
    const interval = setInterval(count, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <div>{tick}</div>;
};

export default UseEffectCounter;
