import React from 'react'
// import installed libraries
import Carousel from 'react-multi-carousel'

// import css of react-multi-carousel
import "react-multi-carousel/lib/styles.css";
import './bestServices.style.css'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const boxes = [1, 2, 3, 4, 5, 6, 7, 8]
const Display = () => {
  return (
    <div>
      <h1 className="headings">OUR BEST SERVICES</h1>
      <Carousel
        className="block"
        responsive={responsive}
      >
        {
          boxes.map(box => (
            <div key={box} className="item">Item {box}</div>
          ))
        }
      </Carousel>
    </div>
  )
}

export default Display