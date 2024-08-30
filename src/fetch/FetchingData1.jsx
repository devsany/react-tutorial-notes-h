import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import FetchingData from "./FetchingData";

const initialState = {
  loading: true,
  data: [],
  error: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        data: action.payload,
        error: "",
      };

      break;

    case "ERROR":
      return {
        loading: false,
        data: [],
        error: "Something Went Wrong",
      };
    default:
      return state;
      break;
  }
};
const FetchingData1 = () => {
  const [toggle, setToggle] = useState(false);
  const [post, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((responce) => {
        dispatch({ type: "FETCH_SUCCESS", payload: responce.data });
      })
      .catch((error) => {
        dispatch({ type: "ERROR" });
      });
  });
  const handletoggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <h2>Fetch data 1</h2>
      <button onClick={handletoggle}>Toggle fetchData </button>
      {toggle && <FetchingData />}
      {post.loading
        ? "loading data"
        : post.data.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
      {post.error ? post.error : null}
    </div>
  );
};

export default React.memo(FetchingData1);
