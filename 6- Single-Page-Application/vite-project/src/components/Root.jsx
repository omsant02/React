import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Root = () => {
  return (
    <div>
      {/* links for home and course */}
      <Navigation />

      {/* page (home or course) */}
      <Outlet />
    </div>
  );
};

export default Root;
