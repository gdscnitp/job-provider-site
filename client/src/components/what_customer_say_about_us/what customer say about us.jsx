import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./what customer say about us.css";

const carausol = [

  {
    id: 1,
    content: "This site is awesome !!",
    name: "Himanshu Nagar ",
    url:"data:image/jpeg;base64,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"
  },

  {
    id: 2,
    content: "This site hepls me for searching the worker ,now i don't have to wander to find them ",
    name: "Devanshi Goel ",
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFlk7Wc5_BTfSJaZdawKE20kBraOWuXNaQBg&usqp=CAU"
  },

  {
    id: 3,
    content: " This site is very useful for people like me ",
    name: "Rohit Raj ",
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnubmAiRbv8lLbKeNwo15-YlNWAGhMiHes8g&usqp=CAU"
  },

  {
    id: 4,
   content: "It's site help me for looking the job and now my income increase regularly",
    name: "Digvijay Srivastav ",
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTf_As7D0G9U57kYhaOI0ffZks8ymmEOCKP2A&usqp=CAU"
  }

];

class WhatCustomerSayAboutUs extends Component{

  render(){

    const settings = {
      dots:true,
      fade:true,
      infinte: true,
      speed: 500,
      slidesToShow: 1,
     arrows:true,
      slidesToScroll: 1,
      autoplay :true,
    autoplayTimeout :2000,
    center:true,
      className:"slides"

    }

  return(

    <div>
        <h1 className="header"> What Customer Say About Us </h1>
      <Slider {...settings}  >

      {carausol.map((props) =>{
        return(

        <div className="note">
          <div className="image">
           <img  alt="Customer image " width="100px" height="100px" src={props.url}/>
           <h4>{props.name}</h4>
           </div>
          <p className="content" >{props.content}</p> 
        </div>
    
        )
      })}
      </Slider>
    </div>
  )
}
}
export default WhatCustomerSayAboutUs;
