import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchingData = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState({});
  console.log("fetch data");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setLoading(false);
        setPost(response.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setError("server Error");
      });
  }, []);
  return (
    <div>
      <h2>Fetching Data</h2>
      {loading ? (
        <div style={{ backgroundColor: "red" }}>loading</div>
      ) : (
        post.title
      )}
      {error ? error : null}
    </div>
  );
};

export default React.memo(FetchingData);
