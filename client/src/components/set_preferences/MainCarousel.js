import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
export default function MainCarousel() {
  return (
    <div className="align-items-center">
      
      <Carousel
        style={{ width: "", height: "" }}
        className="mx-auto col-12 col-md-10"
        prevIcon={
          <FaArrowCircleLeft size="3.5rem" color="black" opacity="0.7" />
        }
        nextIcon={
          <FaArrowCircleRight size="3.5rem" color="black" opacity="0.7" />
        }
      >
        <Carousel.Item style={{ width: "", height: "" }}>
          <img
            className="d-block w-100 img-fluid"
            src={require("../../assests/elec.jpg")}
            alt="First slide"
            style={{ width: "", height: "" }}
          />
          <Carousel.Caption style={{ bottom: "50%" }}>
            <h3>Electrician</h3>
            <p>Plays with electrons!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ width: "", height: "" }}>
          <img
            className="d-block w-100 img-fluid"
            src={require("../../assests/weld.jpg")}
            alt="First slide"
            style={{ width: "", height: "" }}
          />
          <Carousel.Caption style={{ bottom: "50%" }}>
            <h3>Blacksmith</h3>
            <p>Cuts through metal!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ width: "", height: "" }}>
          <img
            className="d-block w-100 img-fluid"
            src={require("../../assests/paint.jpg")}
            alt="First slide"
            style={{ width: "", height: "" }}
          />
          <Carousel.Caption style={{ bottom: "50%" }}>
            <h3>Construction Worker</h3>
            <p>Ever heard of Bob the Builder?</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
