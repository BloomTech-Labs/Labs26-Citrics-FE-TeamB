// Library imports
import React from "react";
import { Link } from "react-router-dom";

const RenderPageNav = () => {
  return (
    <div className="page-nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default RenderPageNav;
