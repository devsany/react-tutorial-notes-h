import React, { useState } from "react";
import CompB from "./CompB";

export const UserFirstName = React.createContext();

const CompA = () => {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [data, setData] = useState([]);
  const [dataPrice, setDataPrice] = useState([]);

  const handleAdd = () => {
    setData((preValue) => {
      return [...preValue, item];
    });

    setDataPrice(price);
    setItem("");
    setPrice("");
  };
  return (
    <div>
      <h2>Component CompA</h2>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="enter item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input
          id="price"
          name="price"
          type="number"
          placeholder="Enter Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <button onClick={handleAdd}>Add item</button>
      <UserFirstName.Provider
        value={{
          firstName: "sunny",
          lastName: "raj",
          item: { data },
          price: { dataPrice },
        }}
      >
        <CompB />
      </UserFirstName.Provider>
    </div>
  );
};

export default CompA;
