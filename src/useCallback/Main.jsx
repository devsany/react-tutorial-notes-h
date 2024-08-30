import React, { useCallback, useState } from "react";
import Title from "./Title";
import Age from "./Age";
import Salary from "./Salary";
import Button from "./Button";

const Main = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(1000);
  const increaseAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const increaseSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  return (
    <div>
      <Title />
      <Age age={age} />
      <Button click={increaseAge} name="age" value="1" />
      <Salary salary={salary} />
      <Button click={increaseSalary} name="salary" value="1000" />
    </div>
  );
};

export default Main;
