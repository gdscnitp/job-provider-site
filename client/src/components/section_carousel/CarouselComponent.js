import React from "react";
import Carousel from "react-multi-carousel";

// import css of react-multi-carousel
import "react-multi-carousel/lib/styles.css";

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
    <div className="box-image">
      <img src={image} alt="" className="img-fluid d-block w-100" />
    </div>
    <div className="box-content">
      <h2 className="box-header">{header}</h2>
      <p>{para}</p>
    </div>
  </div>
);

function CarouselComponent({ title, headers, images, paras }) {
  const deviceType = window.screen.width < 1024 ? "mobile" : "desktop";
  return (
    <div>
      <h1 className="headings">{title}</h1>
      <Carousel
        className="block"
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3500}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={200}
        deviceType={deviceType}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {headers.map((header, index) => {
          return (
            <CardItem
              key={index}
              header={header}
              image={images[index]}
              para={paras[index]}
            />
          );
        })}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
