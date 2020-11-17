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
        <ReactBootStrap.Navbar.Brand href="/" className="brand-logo">
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
              <ReactBootStrap.NavDropdown.Item href="/profile_worker">
                Worker Profile
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="/profile_customer">
                Customer Profile
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="/signup_worker">
                Worker Sign Up
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="/signup_customer">
                Customer Sign Up
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="/signup_customer">
                Other
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
