import React, { useState } from "react";

const Hookcounter = () => {
  //Initial state must be set it eighter be a number,
  //boolian, array (when we call json or api), object,null.
  const [data, setData] = useState(0);
  return (
    <div>
      {/* Here we calling setdata which is a function */}
      <button onClick={() => setData(data + 1)}>Count:{data}</button>
    </div>
  );
};

export default Hookcounter;
