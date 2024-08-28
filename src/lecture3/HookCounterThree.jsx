import React, { useState } from "react";

const HookCounterThree = () => {
  //Here we learn about the correct way to deal with useState hook
  //setp 1 I am going to create a three button reset,increment and decrement
  //You can do it in different way :
  /*As per class component  when we set the state it take previous state and that is the right way to do so*/
  //so I am going to comment the three button and make this three cutton again but on changing count+1 and count-1 to prevState => prevState+1, and prevState=> prevState-1
  //Here prevState is a function

  const initialState = 0;
  const [count, setCount] = useState(initialState);

  return (
    <div>
      Count: {count}
      {/* <button onClick={() => setCount(initialState)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button> */}
      <button onClick={() => setCount(initialState)}>Reset</button>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevState) => prevState - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default HookCounterThree;
