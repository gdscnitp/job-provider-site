import React, { Component } from "react";
import { Card, InputGroup } from "react-bootstrap";
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
            border: "1px",
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
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                <Label> Location Wise</Label>
              </InputGroup.Prepend>
            </InputGroup>
            <InputGroup className="mb-1">
              <InputGroup.Prepend>
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                <Label> Work Wise</Label>
              </InputGroup.Prepend>
            </InputGroup>
            <InputGroup className="mb-1">
              <InputGroup.Prepend>
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                <Label> Experience of Professional</Label>
              </InputGroup.Prepend>
            </InputGroup>
            <InputGroup className="mb-1">
              <InputGroup.Prepend>
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                <Label> Price</Label>
              </InputGroup.Prepend>
            </InputGroup>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default SetPreferences;
