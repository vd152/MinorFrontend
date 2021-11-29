import React, { Component } from "react";
import CardWrap from "../Cards/CardWrap";
import "./main.css";
import {removeAuthToken} from '../../utils/localStorage'
class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="top-nav">
            <div className="d-flex justify-content-between w-100">
              <p>Music Player</p>
              <button className="btn text-white" onClick={(e)=>{
                removeAuthToken();
                window.location.reload()
              }}>Logout</button>
            </div>
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
