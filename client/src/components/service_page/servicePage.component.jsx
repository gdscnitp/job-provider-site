import React from 'react';
import {
    Button,
    Label,
    Input,
    Modal,
    ModalBody,
    Card,
    CardImg,
    CardText,
    CardBody,
  } from "reactstrap";
import styles from './servicePage.module.css'

const WorkProfile = ({name,experience, type, bookings, charge, onClick}) => (
    <div className={styles.work_profile}>
        <div className={styles.profile_intro}>
            <div className={styles.profile_img}>
                {/* Put Image tag here */}
            </div>
            <div className={styles.profile_rating}>
                Rating
            </div>
        </div>
        <div className={styles.profile_details}>
            <div className={styles.profile_info}>
                <div className={styles.profile_data}>Name: {name}</div>
                <div className={styles.profile_data}>Experience: {experience}</div>
                <div className={styles.profile_data}>Type: {type}</div>
                <div className={styles.profile_data}>Bookings Completed: {bookings}</div>
                <div className={styles.profile_data}>Estimate Charge: {charge}</div>
            </div>
            <div className={styles.profile_book}>
                <button className={styles.profile_btn} id={styles.btn1}>More Details</button>
                <button className={styles.profile_btn} id={styles.btn2} onClick={onClick}>Book Service</button>
            </div>
        </div>
    </div>
)

class ServicePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            query: "",
            isNavOpen: false,
      isModalOpen: false,
      isModalOpen1: false,
      profileImg: "assests/profile.PNG",
      bgImg: "assests/bg.jpg",
            
        }
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleModal1 = this.toggleModal1.bind(this);
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({
            query: value
        })
    }

    handleSubmit = (event) => {
        const query = this.state.query
        alert(`You search for "${query}"`)
        this.setState({
            query: ""
        })
        event.preventDefault()
    }
    render(){
        return(
            <div id={styles.service_page}>
                {/* <nav className={styles.nav_bar} /> */}
                <h2 className={styles.heading}>Our Best Services</h2>
                <div className={styles.search_div}>
                    <input className={styles.search_bar} name="query" onChange={this.handleChange} value={this.state.query} placeholder="Enter the query field"/>
                    <button className={styles.search_btn} onClick={this.handleSubmit} type="submit">Search</button>
                </div>
                <div className={styles.profle_div}>
                    <div className={styles.profile_sort}>
                        <select name="type" id={styles.sort}>
                            <option value="">Sort By</option>
                            <option value="name">Name</option>
                            <option value="experience">Experience</option>
                            <option value="type">Type</option>
                            <option value="charge">Charge</option>
                        </select>
                    </div>

                    {/* Add as many WorkProfile component by passing props */}
                    <WorkProfile 
                        name="Test"
                        experience="2 Years"
                        type="Barber"
                        bookings="23"
                        charge="100/person"
                        onClick={this.toggleModal}
                    />
                    <WorkProfile 
                        name=""
                        experience=""
                        type=""
                        bookings=""
                        charge=""
                        onClick={this.toggleModal}
                    />
                </div>
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
                    <Button onClick={() => { this.toggleModal1(); this.toggleModal()}}>Book Service</Button>
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
                <CardText>
                  <center>
                    Preview the confirmation detail of booking done like the
                    work and when the work is needed
                    <br />
                    <br />
                    So only view of the confirmation preview is to be shown
                  </center>
                </CardText>
                <br/>
                  <center>
                    <Label check>
                      <Input type="checkbox" name="agree" />{" "}
                      <strong>Accept T&C</strong>
                    </Label>
                    <br />
                    <br/>
                  </center>
                  <center>
                  <Button onClick={this.toggleModal1}>Confirm Booking</Button>
                  </center>
              </Card>
            </div>
          </ModalBody>
        </Modal>
            </div>
            
        )
    }
}

export default ServicePage;