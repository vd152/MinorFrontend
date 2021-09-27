import React, { Component } from "react";
import Card from "./Card";
import './card.css'

class CardWrap extends Component {
  render() {
    return (
      <div className="card-wrapper">
        <h2 className="cards-title">
            {this.props.title}
        </h2>
        <div className="card-container">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
      </div>
    );
  }
}

export default CardWrap;
