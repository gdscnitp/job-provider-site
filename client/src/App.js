import React from 'react';
import Display from './components/best_services/component.bestServices';
import SignUpForCustomer from './components/signup_for_customer/signup_for_customer.components.jsx'

function App() {
    return (
        <div>
            Hello client
            {/* Our best services carousel (Kunal Prakash) */}
            <Display />

            {/* SignUp form for customer (Kunal Prakash) */}
            <SignUpForCustomer />
        </div>
    );
}

export default App;
