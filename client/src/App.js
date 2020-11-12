import React from "react";
import Display from "./components/best_services/component.bestServices";
import Navbar from "./components/Navbar/Navbar";
import SignUpForWorker from "./components/signup_for_worker/SignupWorker";
import SignUpForCustomer from "./components/signup_for_customer/signup_for_customer.components.jsx";
import VideoDisplay from "./components/videoDisplay/videoDisplay.js";

import CustomerProfile from "./components/customer_profile/customerProfile.component";

import "./components/Star-rating/StarRating.css";
import StarRating from "./components/Star-rating/StarRating.jsx";

import ProfessionalProfile from "./components/professional_profile/professional.profile";

import Footer from "./components/Footer/Footer";
import CarouselComponent from "./components/section_carousel/CarouselComponent";

import image1 from "./assests/image 1.jpg";
import image2 from "./assests/image 1 (1).jpg";
import image3 from "./assests/image 1 (2).jpg";
import MainCarousel from "./components/set_preferences/MainCarousel";
import SetPreferences from "./components/set_preferences/SetPreferences";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      {/*Main Carousel and Set preferences Card(Pawan Singh)*/}
      <MainCarousel />
      <SetPreferences />

      {/* Our best services carousel (Kunal Prakash) */}
      <Display />

      {/* Modify the headers, images and paras props of CarouselComponent as shown below to obtain desired carousel (Pawan Singh)*/}
      <CarouselComponent
        title={"Section"}
        headers={["Lorem", "Ipsum", "Dolor"]}
        images={[image1, image2, image3]}
        paras={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        ]}
      />
      <CarouselComponent
        title={"Section2"}
        headers={["Lorem", "Ipsum", "Dolor", "four", "five"]}
        images={[image1, image2, image3, image1, image2]}
        paras={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "demo",
          "demo2",
        ]}
      />
      {/*navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      })*/}
      {/*SignUp form for worker (Digvijay Srivastava)*/}

      <SignUpForWorker />
      {/* SignUp form for customer (Kunal Prakash) */}
      <SignUpForCustomer />
      <StarRating />
      {/* video component for front page(Ritesh Singh) */}
      <VideoDisplay />
      <CustomerProfile />

      <ProfessionalProfile />
      <Footer />
    </div>
  );
}

export default App;
