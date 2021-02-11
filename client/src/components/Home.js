import React from "react";
import Display from "./best_services/component.bestServices";
import CarouselComponent from "./section_carousel/CarouselComponent";

import MainCarousel from "./set_preferences/MainCarousel";
import SetPreferences from "./set_preferences/SetPreferences";
import StarRating from "./Star-rating/StarRating";
import image1 from "../assests/maid.jpg";
import image2 from "../assests/cook.jpg";
import image3 from "../assests/plumb.jpg";
import image4 from "../assests/const.jpg";
import image5 from "../assests/elec2.jpg";
import image6 from "../assests/mason.jpg";
import image7 from "../assests/mech.jpg";
import VideoApp from "./videoDisplay/videoDisplay";

export default function Home() {
  return (
    <>
      <MainCarousel />
      <SetPreferences />

      {/*<LogIn />*/}

      <Display />

      <CarouselComponent
        title={"Household Services"}
        headers={["Maid", "Cook", "Plumber"]}
        images={[image1, image2, image3]}
        paras={[
          "Book a house-maid in just one click!",
          "Looking for a cook? Take a look here!",
          "Leaky pipes or clogged sink? Mend it in one click!",
        ]}
      />
      <CarouselComponent
        title={"Professional Services"}
        headers={["Construction", "Electrician", "Mason", "Mechanic"]}
        images={[image4, image5, image6, image7]}
        paras={[
          "Want to renovate your place? Come hither!",
          "Book an electrician here!",
          "Experienced Mason to mend your walls!",
          "Here's the motor-master",
        ]}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        {/* video component for front page(Ritesh Singh) */}
        <VideoApp />
        <StarRating />
      </div>
    </>
  );
}
