import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount((preValue) => preValue + 1);
  };
  useEffect(() => {
    document.title = `you Clicked ${count} times`;
  });
  return (
    <div>
      <button onClick={handleCount}>Click {count}</button>{" "}
    </div>
  );
};

export default UseEffectHook;
