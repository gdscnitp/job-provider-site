import React from "react";
import Display from "./components/best_services/component.bestServices";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SignUpForWorker from "./components/signup_for_worker/SignupWorker";
import SignUpForCustomer from "./components/signup_for_customer/signup_for_customer.components.jsx";
import BookService from "./components/Modals/BookService";
import ServicePage from "./components/service_page/servicePage.component"



import AboutUS from "./components/About_us/aboutUs";

import CustomerProfile from "./components/customer_profile/customerProfile.component";

import ProfessionalProfile from "./components/professional_profile/professional.profile";

import Footer from "./components/Footer/Footer";

import LogIn from "./components/log_in/logIn.component.jsx"
import Homepage from "./components/Homepage";

function App() {
  return (
    <Router>
      <Navbar />
      {/* Our best services carousel (Kunal Prakash) */}
      
      <BookService />
      {/*Book Service Modal (Digvijay Srivastava)*/}
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/book_service" component={BookService} />

        <Route path="/best_services" exact component={Display} />
        <Route path="/signup_worker" exact component={SignUpForWorker} />
        <Route path="/signup_customer" exact component={SignUpForCustomer} />
        <Route path="/profile_customer" exact component={CustomerProfile} />
        <Route path='/about_us' exact component={AboutUS}/>
        <Route path="/profile_worker" exact component={ProfessionalProfile} />
        <Route path="/signin" exact component={LogIn} />
        <Route path="/services" exact component={ServicePage} />
      </Switch>
//       {/*Book Service Modal (Digvijay Srivastava), now integrated in services page*/}
//       <MainCarousel />
//       <SetPreferences />

//       <LogIn />

//       <ServicePage />

//       <Display />

//       <CarouselComponent
//         title={"Section"}
//         headers={["Lorem", "Ipsum", "Dolor"]}
//         images={[image1, image2, image3]}
//         paras={[
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         ]}
//       />
//       <CarouselComponent
//         title={"Section2"}
//         headers={["Lorem", "Ipsum", "Dolor", "four", "five"]}
//         images={[image1, image2, image3, image1, image2]}
//         paras={[
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//           "demo",
//           "demo2",
//         ]}
//       />

//       <div
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "space-evenly",
//         }}
//       >
//         {/* video component for front page(Ritesh Singh) */}
//         <VideoDisplay />
//         <StarRating />
//       </div>
      
      <Footer />
    </Router>

  );
}

export default App;
