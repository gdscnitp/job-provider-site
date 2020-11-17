import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './videoDisplay.css';

class VideoApp extends Component {
  render() {
    return (
      <div>
        <ReactPlayer
        // for adding a local video put the mp4 file in public/videos and change the url to videos/file_name.mp4
          url='https://www.youtube.com/watch?v=MhkGQAoc7bc'
          paused
          controls
          muted
          className='react-player'
        />
      </div>
    );
  }
}
export default VideoApp;
