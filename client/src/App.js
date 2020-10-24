import React from "react";
import Display from "./components/best_services/component.bestServices";
import Navbar from "./components/Navbar/Navbar";
import SignUpForCustomer from "./components/signup_for_customer/signup_for_customer.components.jsx";
import SignUpForWorker from "./components/signup_for_worker/signup_for_worker.jsx";
import VideoDisplay from "./components/videoDisplay/videoDisplay.js";

import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      {/* Our best services carousel (Kunal Prakash) */}
      <Display />
      {/* SignUp form for customer (Kunal Prakash) */}
      <SignUpForWorker />
      {/* SignUp form for customer (Kunal Prakash) */}
      <SignUpForCustomer />
      {/* video component for front page(Ritesh Singh) */}
      <VideoDisplay />

      <Footer />
    </div>
  );
}

export default App;
