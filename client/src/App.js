import React from "react";
import Display from "./components/best_services/component.bestServices";
import Navbar from "./components/Navbar/Navbar";
import SignUpForWorker from "./components/signup_for_worker/SignupWorker";
import SignUpForCustomer from "./components/signup_for_customer/signup_for_customer.components.jsx";
import VideoDisplay from "./components/videoDisplay/videoDisplay.js";
import "./components/Star-rating/StarRating.css";
import StarRating from "./components/Star-rating/StarRating.jsx";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      {/* Our best services carousel (Kunal Prakash) */}
      <Display />
      {/*SignUp form for worker (Digvijay Srivastava)*/}
      <SignUpForWorker />
      {/* SignUp form for customer (Kunal Prakash) */}
      <SignUpForCustomer />
      <StarRating />
      {/* video component for front page(Ritesh Singh) */}
      <VideoDisplay />
      <Footer />
    </div>
  );
}

export default App;
