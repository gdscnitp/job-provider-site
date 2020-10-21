import React from "react";
import Display from "./components/best_services/component.bestServices";
import SignUpForCustomer from "./components/signup_for_customer/signup_for_customer.components.jsx";
import VideoDisplay from "./components/videoDisplay/videoDisplay.js";

import Footer from "./components/Footer";

function App() {
  return (
    <div>
      Hello client
      {/* Our best services carousel (Kunal Prakash) */}
      <Display />
      {/* SignUp form for customer (Kunal Prakash) */}
      <SignUpForCustomer />
      {/* video component for front page(Ritesh Singh) */}
      <VideoDisplay />

      <Footer />
    </div>
  );
}

export default App;
