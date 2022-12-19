import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState();
  
  return (
  <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists d-flex">
          <li className="m-3">
            <NavLink
              to="/"
              className="navbar-link border p-2"
              onClick={() => setMenuIcon(false)}>
              Home
            </NavLink>
          </li>
          <li className="m-3">
            <NavLink
              to="/about"
              className="navbar-link border p-2"
              onClick={() => setMenuIcon(false)}>
              About
            </NavLink>
          </li>
          <li className="m-3">
            <NavLink
              to="/products"
              className="navbar-link border p-2"
              onClick={() => setMenuIcon(false)}>
              Products
            </NavLink>
          </li>
          <li className="m-3">
            <NavLink
              to="/contact"
              className="navbar-link border p-2"
              onClick={() => setMenuIcon(false)}>
              Contact
            </NavLink>
          </li>
          <li className="m-3">
            <NavLink to="/cart" className="navbar-link cart-trolley--link">
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item"> 10 </span>
            </NavLink>
          </li>
        </ul>
        
      </div>
    
  );
};

export default Nav;
