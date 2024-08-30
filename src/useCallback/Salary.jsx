import React from "react";

const Salary = (props) => {
  console.log("salary", props.salary);
  return <div>Salary: {props.salary}</div>;
};

export default React.memo(Salary);
