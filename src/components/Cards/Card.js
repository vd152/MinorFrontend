import React, { Component } from "react";
import "./card.css";
import { ReactComponent as PlayIcon } from "./play.svg";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-image">
          <img
            src="https://misc.scdn.co/liked-songs/liked-songs-300.png"
            alt="Liked songs"
          />
          <div className="play-button">
            <PlayIcon />
          </div>
        </div>
        <div className="card-content">
          <h3>Song Name</h3>
          <span>song description</span>
        </div>
      </div>
    );
  }
}

export default Card;
