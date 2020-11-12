import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
export default function MainCarousel() {
  return (
    <div className="align-items-center">
      <div
        className="mt-2 text-center mx-auto mb-2"
        style={{ width: "fit-content" }}
      >
        <h3
          style={{
            background: "rgba(163, 172, 255, 1)",
            margin: "auto",
            width: "345px",
            padding: "5px",
            height: "39px",
          }}
        >
          Are you a professional/worker?
        </h3>
      </div>
      <Carousel
        style={{ width: "80vw", height: "50vh" }}
        className="mx-auto"
        prevIcon={
          <FaArrowCircleLeft size="3.5rem" color="black" opacity="0.7" />
        }
        nextIcon={
          <FaArrowCircleRight size="3.5rem" color="black" opacity="0.7" />
        }
      >
        <Carousel.Item style={{ width: "80vw", height: "50vh" }}>
          <img
            className="d-block w-100 img-fluid"
            src={require("../../assests/image 1.jpg")}
            alt="First slide"
            style={{ width: "80vw", height: "50vh" }}
          />
          <Carousel.Caption style={{ bottom: "50%" }}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ width: "80vw", height: "50vh" }}>
          <img
            className="d-block w-100 img-fluid"
            src={require("../../assests/image 1.jpg")}
            alt="First slide"
            style={{ width: "80vw", height: "50vh" }}
          />
          <Carousel.Caption style={{ bottom: "50%" }}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ width: "80vw", height: "50vh" }}>
          <img
            className="d-block w-100 img-fluid"
            src={require("../../assests/image 1.jpg")}
            alt="First slide"
            style={{ width: "80vw", height: "50vh" }}
          />
          <Carousel.Caption style={{ bottom: "50%" }}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
