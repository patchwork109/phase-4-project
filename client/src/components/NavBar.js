import React from "react";
import {NavLink} from "react-router-dom";

 
const NavBar =() => {

  return (
    <nav>
      <NavLink exact to="/">Home</NavLink>
      <NavLink exact to="/menu">Menu</NavLink>
      <NavLink exact to="/order">Order</NavLink>
      <NavLink exact to="/about">About</NavLink>
      <NavLink exact to="/order/cart">Cart</NavLink>
    </nav>

  )

}


export default NavBar;