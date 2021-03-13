import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import "./signup_for_customer.style.css";
import { Button, Form, TextArea } from "semantic-ui-react";
import { UserAuth } from "./../../userContext";
import ErrorAlert from "./../../ErrorAlert";
import axios from "axios";

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

class SignUpForCustomer extends Component {

  static contextType = UserAuth;


  constructor(props) {
    super(props);

    this.state = {
      name: "",
      // type_of_work: "",
      contact: "",
      email: "",
      // cost_of_work: "",
      // experience: "",
      // location: "",
      address: "",
      password: "",
      confirm_password: "",
      error: null
    };
		this.ScrollOnError = this.ScrollOnError.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleChange(e) {
    let change = { [e.target.name]: e.target.value };
    this.setState(change);
  }
  
	ScrollOnError = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		})
	}


  onSubmit = () => {
    if (this.state.password !== this.state.confirm_password) {
      alert("Password does not match !!! \n Try Again");
    } else {
      let data = {};
      let keys = Object.keys(this.state);
      keys.forEach((element) => {
        if (element !== 'error')
          if (this.state[element].length > 0) {
            data[element] = this.state[element];
          }
      });
      console.log(data);
      axios
        .post("/signupCustomer", data)
        .then(async (res) => {
          console.log(res.data);
          const customer = res.data.customer;
          const token = res.data.token;
          this.context.login(customer._id, customer.name, token, "customer");
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
  };

  render() {
    return (
      <div>
        {this.context.isCustomer === false ? <>{this.state.error && <ErrorAlert ErrorMessage={this.state.error} />}
          <div className="form-div">
            <h1 className="form-header">Sign Up (Customer)</h1>
            <div className="form-component">
              <Form className="form" onSubmit={this.onSubmit}>
                <InputForm
                  name="name"
                  value={this.state.name}
                  type="text"
                  onChange={this.handleChange}
                  placeholder="Name"
                  label="Name"
                  required
                />

                {/* <InputForm
              name="type_of_work"
              value={this.state.type_of_work}
              type="text"
              placeholder="ex. Plumber, Carpenter, Painter"
              onChange={this.handleChange}
              label="Type of Work"
              required
              textArea="TextArea"
            /> */}

                <InputForm
                  name="contact"
                  value={this.state.contact}
                  type="number"
                  placeholder="Contact Number"
                  onChange={this.handleChange}
                  id="contact"
                  label="Contact"
                  required
                />

                <InputForm
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  type="email"
                  placeholder="Email"
                  label="Email"
                  required
                />

                {/* <InputForm
              name="cost_of_work"
              value={this.state.cost_of_work}
              type="number"
              onChange={this.handleChange}
              placeholder="Cost of Work"
              label="Cost of Work (In.Rupees)"
              width="8"
              min="0"
            />

            <InputForm
              name="experience"
              value={this.state.experience}
              onChange={this.handleChange}
              type="text"
              placeholder="Ex. 2 years of plumbing"
              label="Experience expected"
              textArea="TextArea"
            />

            <InputForm
              name="location"
              value={this.state.location}
              type="text"
              onChange={this.handleChange}
              placeholder="Location"
              label="Location"
              width="8"
              required
            /> */}

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
                  placeholder="Confirm Password"
                  label=" Confirm Password"
                  onChange={this.handleChange}
                  required
                />

                <Button type="submit" id="button">
                  Sign Up
            </Button>
              </Form>
            </div>
          </div></> : <div className='d-flex justify-content-center align-items-center' style={{ height: `80vh` }}><h1>User Already Logged in</h1></div>}
      </div>
    );
  }
}

export default SignUpForCustomer;
