import React from "react";

const Age = (props) => {
  console.log("Age", props.age);
  return <div>Age: {props.age}</div>;
};

export default React.memo(Age);
