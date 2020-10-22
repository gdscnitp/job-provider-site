import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import "./signup_for_customer.style.css";
import { Button, Form, TextArea } from "semantic-ui-react";
import axios from "axios";

// reusable component to render input field whenever needed
const InputForm = ({ label, name, type, placeholder, textArea, ...props }) => (
  <Form.Field {...props}>
    <label>{label}</label>
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
      ></input>
    )}
  </Form.Field>
);

class SignUpForCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      work: "",
      contact: "",
      email: "",
      cost: "",
      experience: "",
      location: "",
      address: "",
      password: "",
      confirm_password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleChange(e) {
    let change = { [e.target.name]: e.target.value };
    this.setState(change);
  }

  onSubmit = () => {
    if (this.state.password !== this.state.confirm_password) {
      alert("Password does not match !!! \n Try Again");
    } else {
      let data = {};
      let keys = Object.keys(this.state);
      keys.forEach((element) => {
        if (this.state[element].length > 0) {
          data[element] = this.state[element];
        }
      });
      // console.log(data);
      axios
        .post("/api/signup_customer", data)
        .then((res) => {
          console.log("Successfully Saved");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  render() {
    return (
      <div className="form-div">
        <h1 className="form-header">Sign Up (Customer)</h1>
        <div className="form-component">
          <Form>
            <InputForm
              name="name"
              value={this.state.name}
              type="text"
              onChange={this.handleChange}
              placeholder="Name"
              label="Name"
              required
            />

            <InputForm
              name="work"
              value={this.state.work}
              type="text"
              placeholder="ex. Plumber, Carpenter, Painter"
              onChange={this.handleChange}
              label="Type of Work"
              required
              textArea="TextArea"
            />

            <InputForm
              name="contact"
              value={this.state.contact}
              type="number"
              placeholder="Contact Number"
              onChange={this.handleChange}
              id="contact"
              label="Contact"
              width="8"
              required
            />

            <InputForm
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              placeholder="Email"
              label="Email"
            />

            <InputForm
              name="cost"
              value={this.state.cost}
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
            />

            <InputForm
              name="address"
              value={this.state.address}
              type="text"
              onChange={this.handleChange}
              placeholder="Adress"
              label="Address"
              textArea="TextArea"
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

            <Button type="submit" secondary id="button" onClick={this.onSubmit}>
              Sign Up
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default SignUpForCustomer;
