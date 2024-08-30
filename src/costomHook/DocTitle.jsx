import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useCostumeHook from "./useCostumeHook";

const DocTitle = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  //   useEffect(() => {
  //     document.title = `count ${count}`;
  //   }, [count]);
  useCostumeHook(count);
  return (
    <div>
        
      <button onClick={handleClick}> Click</button>
    </div>
  );
};

export default DocTitle;
