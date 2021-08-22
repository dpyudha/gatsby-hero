import React from "react";
import { Navbar}  from "../components/base/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar/>
      {children}
    </div>
  )
};


export default Layout