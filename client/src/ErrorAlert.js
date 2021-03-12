import React from "react";
import { Alert } from "react-bootstrap";

const ErrorAlert = ({ ErrorMessage }) => {
	return <Alert variant="danger">{ErrorMessage}</Alert>;
};

export default ErrorAlert;
