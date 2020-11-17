import React from "react";
import Display from "./components/best_services/component.bestServices";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from './pages/Homepage';
import SignUpForWorker from "./components/signup_for_worker/SignupWorker";
import SignUpForCustomer from "./components/signup_for_customer/signup_for_customer.components.jsx";
import BookService from "./components/Modals/BookService";

import CustomerProfile from "./components/customer_profile/customerProfile.component";

import "./components/Star-rating/StarRating.css";

import ProfessionalProfile from "./components/professional_profile/professional.profile"

import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
    <Navbar />
    
    <BookService />
      {/*Book Service Modal (Digvijay Srivastava)*/}
      {/* Our best services carousel (Kunal Prakash) */}
      <Switch>
        <Route path="/home" component={Homepage} />
        <Route path="/book_service" component={BookService} />
        <Route path="/best_services" exact component={Display} />
        <Route path="/signup_worker" exact component={SignUpForWorker} />
        <Route path="/signup_customer" exact component={SignUpForCustomer} />
        <Route path="/profile_customer" exact component={CustomerProfile} />
        <Route path="/profile_worker" exact component={ProfessionalProfile} />
      </Switch>
      
      
      <Footer />
    </Router>
  );
}

export default App;
