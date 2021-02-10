import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Form, TextArea } from "semantic-ui-react";

// reusable component to render input field whenever needed
const InputForm = ({ label, name, type, placeholder, textArea, ...props }) => (
	<Form.Field {...props} width={16}>
		{/* <label>{label}</label> */}
		{textArea ? (
			<TextArea
				name={name}
				type={type}
				placeholder={placeholder}
				{...props}
			></TextArea>
		) : (
			<input
				name={name}
				type={type}
				placeholder={placeholder}
				{...props}
				id="input"
			></input>
		)}
	</Form.Field>
);

class SignUpForWorker extends Component {
	render() {
		return (
			<div className="form-div">
				<form method='post' action='../../../../workers'>
				<h1 className="form-header">Sign Up (Worker)</h1>
				<div className="form-component">
					<Form id="form">
						<InputForm
							name="name"
							type="text"
							placeholder="Name"
							label="Name"
							required
						/>

						<InputForm
							name="work"
							type="text"
							placeholder="For Example - Plumber, Carpenter, Painter"
							label="Type of Work"
							required
						/>

						<InputForm
							name="contact"
							type="number"
							placeholder="(+91) Contact Number"
							id="contact"
							label="Contact"
							width="8"
							required
						/>

						<InputForm
							name="email"
							type="email"
							placeholder="Email"
							label="Email"
						/>

						<InputForm
							name="cost"
							type="number"
							placeholder="Cost of Work"
							label="Cost of Work (INR)"
							width="8"
							min="0"
						/>

						<InputForm
							name="experience"
							type="text"
							placeholder="For Example- Experience of 4 years in Carpentry "
							label="Experience"
						/>

						<InputForm
							name="location"
							type="text"
							placeholder="Location"
							label="Location"
							width="8"
							required
						/>

						<InputForm
							name="address"
							type="text"
							placeholder="Address"
							label="Address"
						/>

						<InputForm
							name="password"
							type="password"
							placeholder="Password"
							label="Password"
							required
						/>

						<InputForm
							name="confirm-password"
							type="password"
							placeholder="Confirm Password"
							label=" Confirm Password"
							required
						/>

						<Button type="submit" secondary id="button">
							Sign Up
						</Button>
					</Form>
				</div>
				</form>
			</div>
		);
	}
}

export default SignUpForWorker;
