import React from 'react'
import "./customerProfile.style.css"

class CustomerProfile extends React.Component{
    constructor(props){
        super(props);

        this.state={
            // here will be states....
        }
    }

    render(){
        return (
            <div className="customer-profile">
                <h2 className="profile-heading">YOUR PROFILE</h2>

                <div className="section-one">
                    <div className="profile-detail">
                        <div className="profile-image">
                            {/* <img alt="profile"></img> */}
                        </div>
                        <div className="profile-info">
                            <div className="overlap"></div>
                            <div className="other-info">Other info</div>
                            <div className="other-info">Other info</div>
                            <div className="other-info">Other info</div>
                            <div className="other-info">Other info</div>
                        </div>
                    </div>
                    <div className="service-used">
                        <h3 className="service-heading">SERVICES USED</h3>
                        <div className="service-box">
                            <div className="service-logo">Service Logo</div>
                            <div className="service-name service-font">Service Name</div>
                            <div className="service-status service-font">Service Status
                            <br />    <a href="www" id="service-link">Know More</a>
                            </div>
                        </div>
                        <div className="service-box">
                            <div className="service-logo">Service Logo</div>
                            <div className="service-name service-font">Service Name</div>
                            <div className="service-status service-font">Service Status
                            <br />    <a href="www" id="service-link">Know More</a>
                            </div>
                        </div>
                        <div className="service-box">
                            <div className="service-logo">Service Logo</div>
                            <div className="service-name service-font">Service Name</div>
                            <div className="service-status service-font">Service Status
                                <br />    <a href="www" id="service-link">Know More</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="section-two">
                    <div className="featured-photo">
                        <h3 className="featured-heading heading">Featured Photos:-</h3>
                        <div className="grid">
                            <div className="grid-box"></div>
                            <div className="grid-box"></div>
                            <div className="grid-box"></div>
                            <div className="grid-box"></div>
                            <div className="grid-box"></div>
                            <div className="grid-box"></div>
                            <div className="grid-box"></div>
                            <div className="grid-box"></div>
                            <div className="grid-box"></div>
                        </div>
                    </div>
                    <div className="reviews">
                        <h3 className="reviews-heading heading">Reviews</h3>
                        <div className="reviews-list">
                            <div className="reviews-box">
                                Review given to you by particular worker who you employed (this will not be there for the individual)
                            </div>
                            <div className="reviews-box">
                                Review given to you by particular worker who you employed (this will not be there for the individual)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomerProfile;