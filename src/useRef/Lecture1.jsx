import React, { useRef } from "react";

const Lecture1 = () => {
  const divRef = useRef(null);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      divRef.current.focus();
    }
  };
  return (
    <div>
      <input type="text" placeholder="Enter a name" onKeyDown={handleKeyDown} />
      <div
        ref={divRef}
        tabIndex="0"
        style={{
          border: "1px solid black",
          padding: "20px",
          marginTop: "10px",
          backgroundColor: "lightblue",
        }}
      >
        This div can be focused.
      </div>
    </div>
  );
};

export default Lecture1;
