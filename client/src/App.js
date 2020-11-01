import React from "react";
import Display from "./components/best_services/component.bestServices";
import Navbar from "./components/Navbar/Navbar";
import SignUpForCustomer from "./components/signup_for_customer/signup_for_customer.components.jsx";
import VideoDisplay from "./components/videoDisplay/videoDisplay.js";
import CustomerProfile from "./components/customer_profile/customerProfile.component"

import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      {/* Our best services carousel (Kunal Prakash) */}
      <Display />
      {/* SignUp form for customer (Kunal Prakash) */}
      <SignUpForCustomer />
      {/* video component for front page(Ritesh Singh) */}
      <VideoDisplay />

      <CustomerProfile />

      <Footer />
    </div>
  );
}

export default App;
