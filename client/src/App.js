
import React from 'react';
import Display from './components/best_services/component.bestServices';
import SignUpForCustomer from './components/signup_for_customer/signup_for_customer.components.jsx'

import SignUpForWorker from "./components/signup_for_worker/SignUpForWorker";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            Hello client
            {/* Our best services carousel (Kunal Prakash) */}
            <Display />

            {/* SignUp form for customer (Kunal Prakash) */}
            <SignUpForCustomer />
      

            <SignUpForWorker />
            {/*Digvijay Srivastava (SignupForWorker_UI)*/}

      
       <Footer />

        </div>
    );

}

export default App;
