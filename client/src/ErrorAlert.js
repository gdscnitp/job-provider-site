import React from "react";
import { Alert } from "react-bootstrap";

const ErrorAlert = ({ ErrorMessage }) => {
	return <Alert style={{margin:`10px`}} variant="danger">{ErrorMessage}</Alert>;
};

export default ErrorAlert;
