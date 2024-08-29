import React, { useState } from "react";
import Mouse from "./mouseMovement/Mouse";

const Show = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "hide" : "show"}
      </button>
      {toggle && <Mouse />}
    </div>
  );
};

export default Show;
