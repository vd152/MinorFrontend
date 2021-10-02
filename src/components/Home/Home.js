import React, { Component } from "react";
import Main from "../Main/Main";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import Sidebar from "../Sidebar/Sidebar";
import "./home.css";
import {WebcamComponent as Webcam}  from "../Webcam/Webcam";
class Home extends Component {
  state={
    capture: false
  }
  changeCapture = () =>{
    this.setState({capture: true});
  }
  render() {
    return (
      <div className="outer-wrapper">
          {this.state.capture && <Webcam />}
        <div className="container-main">
          <Sidebar />
          <Main />
        </div>
        <MusicPlayer changeCapture={this.changeCapture}/>
      </div>
    );
  }
}

export default Home;
