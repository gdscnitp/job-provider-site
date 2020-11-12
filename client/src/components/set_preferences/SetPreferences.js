import React, { Component } from "react";
import { Card, Col, Form, InputGroup, FormControl } from "react-bootstrap";
import { Label } from "semantic-ui-react";

export class SetPreferences extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="col-md-6 offset-md-3 col-xl-4 offset-xl-4 ">
        <Card
          style={{
            width: "auto",
            background: "#E2E2E2",
            border: "1px solid #000000",
            boxSizing: "border-box",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "10px",
            margin: "auto auto",
            position: "relative",
            top: "-30px",
          }}
        >
          <Card.Header className="text-center">Set Preferences</Card.Header>
          <Card.Body>
            <InputGroup>
              <InputGroup.Prepend>
                <Label> Location Wise</Label>
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              </InputGroup.Prepend>
            </InputGroup>
            <InputGroup className="mb-1">
              <InputGroup.Prepend>
                <Label> Work Wise</Label>
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              </InputGroup.Prepend>
            </InputGroup>
            <InputGroup className="mb-1">
              <InputGroup.Prepend>
                <Label> Experience of Professional</Label>
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              </InputGroup.Prepend>
            </InputGroup>
            <InputGroup className="mb-1">
              <InputGroup.Prepend>
                <Label> Price</Label>
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              </InputGroup.Prepend>
            </InputGroup>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default SetPreferences;
