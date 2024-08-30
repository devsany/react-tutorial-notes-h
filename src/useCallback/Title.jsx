import React from "react";

const Title = () => {
  console.log("title");
  return (
    <div>
      <h2>Title</h2>
    </div>
  );
};

export default React.memo(Title);
