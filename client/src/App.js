import React from "react";
import Display from "./components/best_services/component.bestServices";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SignUpForWorker from "./components/signup_for_worker/SignupWorker";
import SignUpForCustomer from "./components/signup_for_customer/signup_for_customer.components.jsx";
import VideoDisplay from "./components/videoDisplay/videoDisplay.js";
import BookService from "./components/Modals/BookService";

import CustomerProfile from "./components/customer_profile/customerProfile.component";

import "./components/Star-rating/StarRating.css";
import StarRating from "./components/Star-rating/StarRating.jsx";

import ProfessionalProfile from "./components/professional_profile/professional.profile"

import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      {/* Our best services carousel (Kunal Prakash) */}
      <Switch>
        <Route path="/book_service" component={BookService} />
        <Route path="/best_services" exact component={Display} />
        <Route path="/signup_worker" exact component={SignUpForWorker} />
        <Route path="/signup_customer" exact component={SignUpForCustomer} />
        <Route path="/profile_customer" exact component={CustomerProfile} />
        <Route path="/profile_worker" exact component={ProfessionalProfile} />
      </Switch>
      <BookService />
      {/*Book Service Modal (Digvijay Srivastava)*/}
      <Display />
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        {/* video component for front page(Ritesh Singh) */}
        <VideoDisplay />
        <StarRating />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
