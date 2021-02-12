import React from 'react'
import styles from './logIn.module.css'


class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        this.setState({
            [name] : value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
        alert("succesfully sign in!!")

        this.setState({
            email: "",
            password: ""
        })

    }

    render(){
        return (
            <div className={styles.parent_div}>

                <div className={styles.button_div}>
                    <button className={styles.google_btn}>SIGN IN WITH GOOGLE</button> or
                    <button className={styles.facebook_btn}>SIGN IN WITH FACEBOOK</button>
                </div>

                <div className={styles.form_div}>
                    <div className={styles.form_div_inner}>
                        <h2 className={styles.form_h2}>SIGN IN</h2>

                        <form onSubmit={this.handleSubmit} className={styles.form_component}>
                            <input 
                                type="text" 
                                name="email" 
                                placeholder="Email / Phone Number" 
                                onChange={this.handleChange} 
                                value={this.state.email} 
                                required
                            >
                            </input>

                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Password" 
                                onChange={this.handleChange} 
                                value={this.state.password} 
                                required
                            >    
                            </input>
                            <button className={styles.signin_btn}>Sign In</button>
                        </form>

                        <h4 className={styles.form_h4}> New User? <a href="#test" className={styles.form_link}> Sign Up Here</a></h4>
                    </div>
                </div>

            </div>
        )
    }
}

export default LogIn