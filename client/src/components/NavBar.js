import React from "react";
import {NavLink} from "react-router-dom";

 
const NavBar =() => {

  return (
    <nav>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/menu">Menu</NavLink>
      <NavLink to="/order">Order</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>

  )

}

export default NavBar;