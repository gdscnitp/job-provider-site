import React, { useContext } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { UserAuth } from "./../../userContext";
import { useHistory } from "react-router-dom";

function Navbar() {
	const { isWorker, isCustomer, logout } = useContext(UserAuth);
	let history = useHistory();
	return (
		<div>
			<ReactBootStrap.Navbar
				expand="lg"
				bg="primary"
				variant="dark"
				className="navbar"
			>
				<ReactBootStrap.Navbar.Brand className="brand-logo">
					<Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
						WorkLink
					</Link>
				</ReactBootStrap.Navbar.Brand>
				<span id="google_translate_element"></span>
				<ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
				<ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
					<ReactBootStrap.Nav className="ml-auto">
						<NavLink to="best_services" className="nav-option nav-link active">
							Best Services
						</NavLink>
						<NavLink to="/about_us" className="nav-option nav-link">
							About Us
						</NavLink>

						<ReactBootStrap.NavDropdown
							title="Other Links"
							id="basic-nav-dropdown"
							className="nav-option"
						>
							{isWorker ? (
								<>
									<ReactBootStrap.NavDropdown.Item as="div">
										<Link to="/profile_worker" className="dropdown-item">
											Worker Profile
										</Link>
									</ReactBootStrap.NavDropdown.Item>
								</>
							) : (
								<></>
							)}

							{isCustomer ? (
								<>
									{" "}
									<ReactBootStrap.NavDropdown.Item as="div">
										<Link to="/profile_customer" className="dropdown-item">
											Customer Profile
										</Link>
									</ReactBootStrap.NavDropdown.Item>
								</>
							) : (
								<></>
							)}
							{isWorker === false && isCustomer === false ? (
								<>
									<ReactBootStrap.NavDropdown.Item as="div">
										<Link to="/signup_worker" className="dropdown-item">
											Worker Sign Up
										</Link>
									</ReactBootStrap.NavDropdown.Item>
									<ReactBootStrap.NavDropdown.Item as="div">
										<Link to="/signup_customer" className="dropdown-item">
											Customer Sign Up
										</Link>
									</ReactBootStrap.NavDropdown.Item>
								</>
							) : (
								<></>
							)}

							<ReactBootStrap.NavDropdown.Divider />
							<ReactBootStrap.NavDropdown.Item as="div">
								<Link to="/signup_customer" className="dropdown-item">
									Other
								</Link>
							</ReactBootStrap.NavDropdown.Item>
						</ReactBootStrap.NavDropdown>
					</ReactBootStrap.Nav>
					{isWorker || isCustomer ? (
						<>
							<ReactBootStrap.Button
								onClick={() => {
									logout();
									history.push('/');

								}}
								className="btn btn-success btn-lg"
							>
								Sign out
							</ReactBootStrap.Button>
						</>
					) : (
						<>
							{" "}
							<Link to="/sign_in" className="btn btn-success btn-lg">
								Sign In
							</Link>
						</>
					)}
				</ReactBootStrap.Navbar.Collapse>
			</ReactBootStrap.Navbar>
		</div>
	);
}

export default Navbar;
