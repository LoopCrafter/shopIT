import React from "react";
import Topbar from "../layout/Topbar";
import Navbar from "../layout/Navbar";

const Header = () => {
  return (
    <div className="border-b border-gray-200">
      <Topbar />
      <Navbar />
    </div>
  );
};

export default Header;
