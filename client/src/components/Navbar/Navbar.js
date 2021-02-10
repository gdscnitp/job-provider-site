import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

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
            <NavLink to="/" className="nav-option nav-link">
              Home
            </NavLink>
            <NavLink to="contact" className="nav-option nav-link">
              Contact Us
            </NavLink>
            <NavLink to="/about_us" className="nav-option nav-link">
              About Us
            </NavLink>

            <ReactBootStrap.NavDropdown
              title="Other Links"
              id="basic-nav-dropdown"
              className="nav-option"
            >
              <ReactBootStrap.NavDropdown.Item>
                <Link to="/profile_worker" className="dropdown-item">
                  Worker Profile
                </Link>
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item>
                <Link to="/profile_customer" className="dropdown-item">
                  Customer Profile
                </Link>
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item>
                <Link to="/signup_worker" className="dropdown-item">
                  Worker Sign Up
                </Link>
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item>
                <Link to="/signup_customer" className="dropdown-item">
                  Customer Sign Up
                </Link>
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="/signup_customer">
                <Link to="/signup_customer" className="dropdown-item">
                  Other
                </Link>
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>
          <Link to="/sign_in" className="btn btn-success btn-lg">
            Sign In
          </Link>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
}

export default Navbar;
