import React from "react";
// import installed libraries
import Carousel from "react-multi-carousel";

// import css of react-multi-carousel
import "react-multi-carousel/lib/styles.css";
import "./bestServices.style.css";

// importing images
import image1 from "../../assests/image 1.jpg";
import image2 from "../../assests/image 1 (1).jpg";
import image3 from "../../assests/image 1 (2).jpg";
import { Link } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CardItem = ({ image, header, para }) => (
  <div className="box">
    <Link to="/best_services" style={{color:"inherit",textDecoration:"none"}}>
    <div className="box-image">
      <img src={image} alt="" />
    </div>
    <div className="box-content">
      <h2 className="box-header">{header}</h2>
      <p>{para}</p>
    </div>
    </Link>
    
  </div>
);

const Display = () => {
  const headers = ["Carpenter", "Maid", "Saloon"];

  const paras = [
    "Get upto 50% off on your first booking",
    "Get 1 week free trial",
    "Get upto 30% off on your first booking",
  ];

  return (
    <div>
      <h1 className="headings">OUR BEST SERVICES</h1>
      
      <Carousel className="block" responsive={responsive}>
        <CardItem image={image1} header={headers[0]} para={paras[0]} />
        <CardItem image={image2} header={headers[1]} para={paras[1]} />
        <CardItem image={image3} header={headers[2]} para={paras[2]} />
        <CardItem image={image1} header={headers[0]} para={paras[0]} />
        <CardItem image={image2} header={headers[1]} para={paras[1]} />
        <CardItem image={image3} header={headers[2]} para={paras[2]} />
        <CardItem image={image1} header={headers[0]} para={paras[0]} />
        <CardItem image={image2} header={headers[1]} para={paras[1]} />
        <CardItem image={image3} header={headers[2]} para={paras[2]} />
      </Carousel>
      
    </div>
  );
};

export default Display;
