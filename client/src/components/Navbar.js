import React from "react";
import * as ReactBootStrap from "react-bootstrap";

function Navbar() {
  return (
    <div>
      <ReactBootStrap.Navbar
        expand="lg"
        bg="primary"
        variant="dark"
        className="navbar"
      >
        <ReactBootStrap.Navbar.Brand href="#home" className="brand-logo">
          WorkLink
        </ReactBootStrap.Navbar.Brand>
        <span id="google_translate_element"></span>
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootStrap.Nav className="ml-auto">
            <ReactBootStrap.Nav.Link href="#home" className="nav-option">
              Home
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#link" className="nav-option">
              Contact Us
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.NavDropdown
              title="Other Links"
              id="basic-nav-dropdown"
              className="nav-option"
            >
              <ReactBootStrap.NavDropdown.Item href="#action/3.1">
                Pricing
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                Another action
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.3">
                Something
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/3.4">
                Separated link
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Button variant="success">
            Sign in
          </ReactBootStrap.Button>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
}

export default Navbar;
