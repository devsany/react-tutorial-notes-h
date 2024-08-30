import React, { useMemo, useState } from "react";

const Lecture1 = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  const handleOne = () => {
    setCounterOne(counterOne + 1);
  };

  const IsEven = useMemo(() => {
    for (var i = 0; i <= 9000; i++) {
      console.log(i);
    }
    return counterOne % 2 === 0;
  }, [counterOne]);

  const handleTwo = () => {
    setCounterTwo(counterTwo + 1);
  };
  return (
    <div>
      <button onClick={handleOne}>counter One{counterOne}</button>
      <span>{IsEven ? "Even" : "odd"}</span>
      <button onClick={handleTwo}>counter Two{counterTwo}</button>
    </div>
  );
};

export default Lecture1;
