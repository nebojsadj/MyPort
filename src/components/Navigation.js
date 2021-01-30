import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="transparent"
      className="d-flex justify-content-end mt-2"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <NavLink
            to="/"
            exact
            className="justify-content-center p-2 text-light nav"
          >
            About Me
          </NavLink>
          <NavLink
            to="/projects"
            className="justify-content-center p-2 text-light nav"
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className="justify-content-center p-2 text-light nav"
          >
            Contact
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
