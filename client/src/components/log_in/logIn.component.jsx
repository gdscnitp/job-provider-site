import React from "react";
import styles from "./logIn.module.css";
import axios from "axios";
import ErrorAlert from "./../../ErrorAlert";
import { UserAuth } from "./../../userContext";

class LogIn extends React.Component {
	static contextType = UserAuth;
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			isWorker: false,
			error: null
		};
	}

	handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;

		this.setState({
			[name]: value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		if (this.state.email && this.state.password) {
			if (this.state.isWorker) {
				axios
					.post("/login/worker", {
						email: this.state.email,
						password: this.state.password,
					})
					.then(async (res) => {
						console.log(res.data);
						const worker = res.data.usr;
						const token = res.data.token;
						this.context.login(worker._id, worker.name, token, "worker");
					})
					.then((res) => {
						alert("Successfully signed in");
						console.log(this.context);
						this.props.history.push('/best_services')

						// console.log(localStorage.getItem("userData"));
					})
					.catch((err) => {
					if (err.response) {
						// console.log(err.response);
						this.setState({ error: err.response.data });
					} else if (err.request) {
						// console.log(err.request);
						this.setState({ error: err.request.data });
					} else {
						// console.log(err);
						this.setState({ error: err.data });
					}
				});
            }
            else {
                axios.post("/login/customer", {
						email: this.state.email,
						password: this.state.password,
					})
					.then(async (res) => {
						console.log(res.data);
						const customer = res.data.usr;
						const token = res.data.token;
						this.context.login(customer._id, customer.name, token, "customer");
					})
					.then((res) => {
						alert("Successfully signed in");
						console.log(this.context);
						this.props.history.push('/best_services')
						// console.log(localStorage.getItem("userData"));
					})
					.catch((err) => {
					if (err.response) {
						// console.log(err.response);
						this.setState({ error: err.response.data });
					} else if (err.request) {
						// console.log(err.request);
						this.setState({ error: err.request.data });
					} else {
						// console.log(err);
						this.setState({ error: err.data });
					}
				});
            }
		}

		// this.setState({
		//     email: "",
		//     password: ""
		// })
	};

	render() {
		return (
            <div>
                {this.context.isWorker===false && this.context.isCustomer===false ? <div className={styles.parent_div}>
                					<div className={styles.button_div}>
							<button className={styles.google_btn}>SIGN IN WITH GOOGLE</button>{" "}
							or
							<button className={styles.facebook_btn}>
								SIGN IN WITH FACEBOOK
							</button>
						</div>

						<div className={styles.form_div}>
						<div className={styles.form_div_inner}>
							{this.state.error && <ErrorAlert ErrorMessage={this.state.error}/>}
								<h2 className={styles.form_h2}>SIGN IN</h2>

								<form
									onSubmit={this.handleSubmit}
									className={styles.form_component}
								>
									<input
										type="text"
										name="email"
										placeholder="Email"
										onChange={this.handleChange}
										value={this.state.email}
										required
									></input>

									<input
										type="password"
										name="password"
										placeholder="Password"
										onChange={this.handleChange}
										value={this.state.password}
										required
									></input>
									<div className="d-flex justify-content-center align-items-center">
										<input
											style={{ height: `20px`, width: `20px` }}
											type="checkbox"
											name="usertype"
											id="userType"
											onChange={() => {
												this.setState({ isWorker: !this.state.isWorker });
											}}
										/>
										<label
											htmlFor="userType"
											style={{ color: `white`, padding: `10px` }}
										>
											Company Worker
										</label>
									</div>
									<button className={styles.signin_btn}>Sign In</button>
								</form>

								<h4 className={styles.form_h4}>
									{" "}
									New User?{" "}
									<a href="#test" className={styles.form_link}>
										{" "}
										Sign Up Here
									</a>
								</h4>
							</div>
						</div>
					</div>
			:	<div
						className="d-flex justify-content-center align-items-center"
						style={{ height: `80vh` }}
					>
						<h1>User Already Logged in</h1>
					</div>
				};
				
					
				
			</div>
		);
	}
}

export default LogIn;
