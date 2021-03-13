import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Form, TextArea } from "semantic-ui-react";
import axios from "axios";
import ErrorAlert from "./../../ErrorAlert";
import { UserAuth } from "./../../userContext";

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
	static contextType = UserAuth;
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			type_of_work: "",
			contact: "",
			email: "",
			cost: "",
			experience: "",
			location: "",
			address: "",
			password: "",
			confirm_password: "",
			error: null,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.ScrollOnError = this.ScrollOnError.bind(this);
	}

	ScrollOnError = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		})
	}

	handleChange = (e) => {
		let change = { [e.target.name]: e.target.value };
		this.setState(change);
	};

	handleSubmit(event) {
		if (this.state.password !== this.state.confirm_password) {
			alert("Password does not match !!! \n Try Again");
		} else {
			let data = {};
			let keys = Object.keys(this.state);
			keys.forEach((element) => {
				if (element !== "error")
					if (this.state[element].length > 0) {
						data[element] = this.state[element];
					}
			});
			console.log(data);
			axios
				.post("/workers", data)
				.then(async (res) => {
					console.log(res.data);
					const worker = res.data.worker;
					const token = res.data.token;
					this.context.login(worker._id, worker.name, token, "worker");
				})
				.then((res) => {
					console.log(localStorage.getItem("userData"));
					alert("Successfully signed up");
					this.props.history.push('/best_services')
				})
				.catch((err) => {
					if (err.response) {
						// console.log(err.response);
						this.setState({ error: err.response.data });
						this.ScrollOnError();
					} else if (err.request) {
						// console.log(err.request);
						this.setState({ error: err.request.data });
						this.ScrollOnError();
					} else {
						// console.log(err);
						// this.setState({error : err.data})
						this.setState({ error: err.data });
						this.ScrollOnError();
					}
				});
		}
	}

	render() {
		return (
			<div>
				{this.context.isWorker === false ? (
					<>
						{this.state.error && <ErrorAlert ErrorMessage={this.state.error} />}
						<div className="form-div">
							<h1 className="form-header">Sign Up (Worker)</h1>
							<div className="form-component">
								<Form id="form" onSubmit={this.handleSubmit}>
									<InputForm
										name="name"
										type="text"
										placeholder="Name"
										value={this.state.name}
										onChange={this.handleChange}
										label="Name"
										required
									/>

									<InputForm
										name="type_of_work"
										value={this.state.type_of_work}
										type="text"
										placeholder="For Example - Plumber, Carpenter, Painter"
										onChange={this.handleChange}
										label="Type of Work"
										required
									/>

									<InputForm
										name="contact"
										value={this.state.contact}
										type="number"
										placeholder="(+91) Contact Number"
										id="contact"
										onChange={this.handleChange}
										label="Contact"
										width="8"
										required
									/>

									<InputForm
										name="email"
										value={this.state.email}
										type="email"
										onChange={this.handleChange}
										placeholder="Email"
										label="Email"
										required
									/>

									<InputForm
										name="cost"
										value={this.state.cost}
										type="number"
										placeholder="Cost of Work"
										label="Cost of Work (INR)"
										onChange={this.handleChange}
										width="8"
										min="0"
									/>

									<InputForm
										name="experience"
										value={this.state.experience}
										type="text"
										onChange={this.handleChange}
										placeholder="For Example- Experience of 4 years in Carpentry "
										label="Experience"
									/>

									<InputForm
										name="location"
										value={this.state.location}
										type="text"
										placeholder="Location"
										onChange={this.handleChange}
										label="Location"
										width="8"
										required
									/>

									<InputForm
										name="address"
										value={this.state.address}
										type="text"
										onChange={this.handleChange}
										placeholder="Address"
										label="Address"
									/>

									<InputForm
										name="password"
										value={this.state.password}
										type="password"
										onChange={this.handleChange}
										placeholder="Password"
										label="Password"
										required
									/>

									<InputForm
										name="confirm_password"
										value={this.state.confirm_password}
										type="password"
										onChange={this.handleChange}
										placeholder="Confirm Password"
										label=" Confirm Password"
										required
									/>

									<Button type="submit" secondary id="button">
										Sign Up
									</Button>
								</Form>
							</div>
						</div>
					</>
				) : (
					<div
						className="d-flex justify-content-center align-items-center"
						style={{ height: `80vh` }}
					>
						<h1>User Already Logged in</h1>
					</div>
				)}
			</div>
		);
	}
}

export default SignUpForWorker;
