import React, { useState } from "react";

const UseStateArray = () => {
  const [data, setData] = useState([]);
  const addItem = () => {
    setData([
      ...data,
      {
        id: data.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div>
      <button onClick={addItem}>Show Data</button>
      <ul>
        {data.map((item) => (
          <li>
            {item.id} {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseStateArray;
