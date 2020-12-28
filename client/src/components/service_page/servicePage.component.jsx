import React from 'react'
import styles from './servicePage.module.css'

const WorkProfile = ({name,experience, type, bookings, charge}) => (
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
                <div className={styles.profile_data}>Estimate Charge: {charge}
            </div>
            <div className={styles.profile_book}>
                <button className={styles.profile_btn} id={styles.btn1}>More Details</button>
                <button className={styles.profile_btn} id={styles.btn2}>Book Service</button>
            </div>
        </div>
    </div>
)

class ServicePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            query: "",
            
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
                    />
                    <WorkProfile 
                        name=""
                        experience=""
                        type=""
                        bookings=""
                        charge=""
                    />
                </div>
               
            </div>
            
        )
    }
}

export default ServicePage;