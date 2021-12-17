import React, { Component } from "react";
import "./card.css";
import { ReactComponent as PlayIcon } from "./play.svg";

class Card extends Component {
  capitalizeWords(string) {
    return string.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
  };
  render() {
    return (
      <div className="card">
        <div className="card-image">
          <img
            src={this.props.num%2 == 0?"/assets/img/card1.png": "assets/img/card2.png"}
            alt="Liked songs"
          />
          <div className="play-button">
            <PlayIcon style={{cursor: "pointer"}}/>
          </div>
        </div>
        <div className="card-content">
          <h3>{this.capitalizeWords(this.props.song?.songName)}</h3>
          <span>{this.capitalizeWords(this.props.song?.artistName) + (this.props.song?.ftArtist != "" && (" ft. "+this.capitalizeWords(this.props.song?.ftArtist)))}</span>
        </div>
      </div>
    );
  }
}

export default Card;
