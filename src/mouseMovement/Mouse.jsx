import React, { useEffect, useState } from "react";
import { Input } from "../Input";

const Mouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [toggle, setToggle] = useState(false);
  const logMousePosition = (e) => {
    console.log("mouse Move");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("useEffect Run");
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  return (
    <div>
      hook X:{x} Y:{y}
    </div>
  );
};

export default Mouse;
