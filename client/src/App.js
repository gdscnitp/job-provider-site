import React from "react";
import Display from "./components/best_services/component.bestServices";
import Navbar from "./components/Navbar";
import SignUpForCustomer from "./components/signup_for_customer/signup_for_customer.components.jsx";
import VideoDisplay from "./components/videoDisplay/videoDisplay.js";

import Footer from "./components/Footer";
import Buf from "./components/Carousel/carousel.js";

function App() {
  return (
    <div>
      <Navbar />
      {/* Our best services carousel (Kunal Prakash) */}
      <Buf/> 
      {/*  carousel */}
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
