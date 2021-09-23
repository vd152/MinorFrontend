import React, { Component } from "react";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import Sidebar from "../Sidebar/Sidebar";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div className="outer-wrapper">
        <div className="container-main">
          <Sidebar />
        </div>
        <MusicPlayer />
      </div>
    );
  }
}

export default Home;
