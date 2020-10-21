import React from "react";
import Display from "./components/best_services/component.bestServices";
import Navbar from "./components/Navbar";
import SignUpForCustomer from "./components/signup_for_customer/signup_for_customer.components.jsx";

import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      {/* Our best services carousel (Kunal Prakash) */}
      <Display />
      {/* SignUp form for customer (Kunal Prakash) */}
      <SignUpForCustomer />
      <Footer />
    </div>
  );
}

export default App;
