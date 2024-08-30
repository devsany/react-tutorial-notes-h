import React from "react";

const Button = (props) => {
  console.log(`button for ${props.name} with ${props.value} `);
  return (
    <div>
      <button onClick={props.click}>
        Click to increase the {props.name} by {props.value}
      </button>
    </div>
  );
};

export default React.memo(Button);
