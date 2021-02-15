import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <Navbar bg="transparent">
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
    </Navbar>
  );
}

export default Navigation;
