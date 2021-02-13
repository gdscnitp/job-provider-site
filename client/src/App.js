import React from "react";

//import Display from "./components/best_services/component.bestServices";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import { UserProvider } from "./userContext";
import Navbar from "./components/Navbar/Navbar";
import SignUpForWorker from "./components/signup_for_worker/SignupWorker";
import SignUpForCustomer from "./components/signup_for_customer/signup_for_customer.components.jsx";
//import VideoDisplay from "./components/videoDisplay/videoDisplay.js";
import ServicePage from "./components/service_page/servicePage.component";

//import CarouselComponent from "./components/section_carousel/CarouselComponent";

import AboutUS from "./components/About_us/aboutUs";
import CustomerProfile from "./components/customer_profile/customerProfile.component";

import "./components/Star-rating/StarRating.css";
//import StarRating from "./components/Star-rating/StarRating.jsx";

import ProfessionalProfile from "./components/professional_profile/professional.profile";

import Footer from "./components/Footer/Footer";
import LogIn from "./components/log_in/logIn.component.jsx";
import Home from "./components/Home";

/*
import image1 from "./assests/image 1.jpg";
import image2 from "./assests/image 1 (1).jpg";
import image3 from "./assests/image 1 (2).jpg";
import MainCarousel from "./components/set_preferences/MainCarousel";
import SetPreferences from "./components/set_preferences/SetPreferences";*/

function App() {
	return (
		<UserProvider>
			<Router>
				<Navbar />
				{/* Our best services carousel (Kunal Prakash) */}
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/best_services" component={ServicePage} />
					<Route path="/signup_worker" component={SignUpForWorker} />
					<Route path="/signup_customer" component={SignUpForCustomer} />
					<Route path="/profile_customer" component={CustomerProfile} />
					<Route path="/about_us" component={AboutUS} />
					<Route path="/profile_worker" component={ProfessionalProfile} />
					<Route path="/sign_in" component={LogIn} />
					<Redirect to="/" />
				</Switch>
				{/*Book Service Modal (Digvijay Srivastava), now integrated in services page*/}

				<Footer />
			</Router>
		</UserProvider>
	);
}

export default App;
