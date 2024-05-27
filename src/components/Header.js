import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <Navbar bg="danger">
        <Container>
          <img alt="img" src="Sprite-0001.png" width="50" />
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Pink Floyd
            </NavLink>
            <NavLink to="/2" className="nav-link">
              Nirvana
            </NavLink>
            <NavLink to="/3" className="nav-link">
              Queen
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
