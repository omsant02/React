import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <br />
      <Link to="/course">Course</Link>
    </>
  );
};

export default Navigation;
