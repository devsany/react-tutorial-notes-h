import React, { useContext } from "react";
import { UserFirstName } from "./CompA";
import CompD from "./CompD";

const CompC = () => {
  const name = useContext(UserFirstName);
  console.log(name.price.dataPrice);
  const TotalPriceValue = 0;
  const TotalPriceValue1 = TotalPriceValue + name.price.dataPrice;
  return (
    <div>
      Component C
      {/* my name is {name.firstName} {name.lastName}
      <div>Total Price:- {TotalPriceValue1}</div>
      <ul>{name.item.data && name.item.data.map((item) => <li>{item}</li>)}</ul> */}
      <CompD />
    </div>
  );
};

export default CompC;
