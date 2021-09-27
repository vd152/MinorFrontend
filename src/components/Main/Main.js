import React, { Component } from "react";
import CardWrap from "../Cards/CardWrap";
import "./main.css";

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="top-nav">
            Music Player
        </div>
        <div className="content">
          <CardWrap title="Uniquely yours"/>
          <CardWrap title="Top Songs"/>
        </div>
      </div>
    );
  }
}

export default Main;
