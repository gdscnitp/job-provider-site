import React from 'react';
import logo from './logo.svg';
import './App.css';
import VideoPlayer from 'react-video-js-player'

import Happy from "../../assets/song1.mp4";
import Img from "../../assets/pic1.jpg"
const VideoJs = () =>{
  const videoSrc = Happy;
  const image = Img;
  return(
    <div className ="App">
    <VideoPlayer
    data-setup='{"fluid": true}'
    src ={videoSrc}
    poster ={image}
  //data-setup='{"fluid": true}'
    width = "720"
    height = "420"
    />
    </div>
  );
};
export default VideoJs;
