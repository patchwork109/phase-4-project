import React from "react";
import {NavLink} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {

  return (
    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand exact to="/" as={NavLink}>FRIES</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link exact to="/" as={NavLink}>Home</Nav.Link>
            <Nav.Link exact to="/menu" as={NavLink}>Menu</Nav.Link>
            <Nav.Link exact to="/order" as={NavLink}>Order</Nav.Link>
            <Nav.Link exact to="/about" as={NavLink}>About</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link exact to="/order/cart" as={NavLink}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default NavBar;