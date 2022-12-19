import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
// import Nav from "./Nav";

function Header() {
  return (
    <div className="d-flex justify-content-between">
  <NavLink to="/"> <img src="./images/logo.png" alt="my logo img" /> </NavLink>
  <Nav />  
  </div>
  );
}

export default Header


