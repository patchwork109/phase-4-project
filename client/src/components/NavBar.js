import React from "react";
import {NavLink} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Badge from '@mui/material/Badge';
import { GiFrenchFries } from 'react-icons/gi';

function NavBar({count}) {


  return (
    <Navbar className="navbar" sticky="top">
        <Container>
          <Navbar.Brand exact to="/" as={NavLink}>FRIES</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link exact to="/" as={NavLink}>Home</Nav.Link>
            <Nav.Link exact to="/menu" as={NavLink}>Menu</Nav.Link>
            <Nav.Link exact to="/order" as={NavLink}>Order</Nav.Link>
            <Nav.Link exact to="/about" as={NavLink}>About</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link exact to="/order/cart" as={NavLink}>
              <Badge color="secondary" badgeContent={count}>
              <GiFrenchFries size={28}/>
              </Badge>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default NavBar;