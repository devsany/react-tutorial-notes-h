import React, { useEffect, useState } from "react";

const UseEffectCondition = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  useEffect(() => {
    console.log(checkbox);
    console.log("you Clikced");
    document.title = `you clicked ${count}`;
  }, [count]);
  return (
    <div>
      <input
        type="checkbox"
        value={checkbox}
        onChange={() => setCheckbox(!checkbox)}
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Click {count}</button>
    </div>
  );
};

export default UseEffectCondition;
