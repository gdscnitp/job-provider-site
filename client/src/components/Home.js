import React from "react";
import Display from "./best_services/component.bestServices";
import CarouselComponent from "./section_carousel/CarouselComponent";

import MainCarousel from "./set_preferences/MainCarousel";
import SetPreferences from "./set_preferences/SetPreferences";
import StarRating from "./Star-rating/StarRating";
import image1 from "../assests/image 1.jpg";
import image2 from "../assests/image 1 (1).jpg";
import image3 from "../assests/image 1 (2).jpg";
import VideoApp from "./videoDisplay/videoDisplay";

export default function Home() {
  return (
    <>
      <MainCarousel />
      <SetPreferences />

      {/*<LogIn />*/}

      <Display />

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
