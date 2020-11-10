import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
  Label,
  Input,
  Modal,
  ModalBody,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardImgOverlay,
} from "reactstrap";

class BookService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
      isModalOpen1: false,
      profileImg: "assests/profile.PNG",
      bgImg: "assests/bg.jpg",
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleModal1 = this.toggleModal1.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  toggleModal1() {
    this.setState({
      isModalOpen1: !this.state.isModalOpen1,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar light expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              WorkLink
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-sign-in fa-lg"></span> Book a Service
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalBody>
            <div>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src={this.state.profileImg}
                  alt="Profile Image"
                />
                <CardBody>
                  <CardText>
                    <p>Name: </p>
                    <p>Type of worker: </p>
                    <p>Charges: </p>
                    <p>Experience: </p>
                    <p>No of. Booking Completed:</p>
                  </CardText>
                  <center>
                    <Button onClick={this.toggleModal1}>Book Service</Button>
                  </center>
                </CardBody>
              </Card>
            </div>
          </ModalBody>
        </Modal>
        <Modal isOpen={this.state.isModalOpen1} toggle={this.toggleModal1}>
          <ModalBody>
            <div>
              <Card>
                <CardImg
                  width="100%"
                  src={this.state.bgImg}
                  alt="Profile Image"
                />
                <CardImgOverlay>
                  <center>
                    Preview the confirmation detail of booking done like the
                    work and when the work is needed
                    <br />
                    <br />
                    So only view of the confirmation preview is to be shown
                  </center>
                </CardImgOverlay>
                <CardText>
                  <br></br>
                  <center>
                    <Label check>
                      <Input type="checkbox" name="agree" />{" "}
                      <strong>Accept T&C</strong>
                    </Label>
                    <br />
                    <br />
                    <Button>Confirm Booking</Button>
                  </center>
                </CardText>
              </Card>
            </div>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default BookService;
