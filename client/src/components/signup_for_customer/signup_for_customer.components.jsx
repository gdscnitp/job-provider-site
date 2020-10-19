import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./signup_for_customer.style.css";
import { Button, Form, TextArea } from "semantic-ui-react";

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

const SignUpForCustomer = () => {
  return (
    <div className="form-div">
      <h1 className="form-header">Sign Up (Customer)</h1>
      <div className="form-component">
        <Form>
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
            placeholder="ex. Plumber, Carpenter, Painter"
            label="Type of Work"
            required
            textArea="TextArea"
          />

          <InputForm
            name="contact"
            type="number"
            placeholder="Contact Number"
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
            label="Cost of Work (In.Rupees)"
            width="8"
            min="0"
            step="100"
          />

          <InputForm
            name="experience"
            type="text"
            placeholder="Ex. 2 years of plumbing"
            label="Experience expected"
            textArea="TextArea"
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
            placeholder="Adress"
            label="Address"
            textArea="TextArea"
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
    </div>
  );
};

export default SignUpForCustomer;
