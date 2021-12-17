import React, { Component } from "react";
import Card from "./Card";
import './card.css'
import api from "../../apis/api"

class CardWrap extends Component {
  state={
    songs: []
  }
  componentDidMount(){
    if(this.props.year){
      this.getSongs(this.props.year)
    }
    else if(this.props.popular){
      this.getPopularSongs()
    }
  }

  getSongs = (year) => {
    let url = '/music/'+year
    api.get(url).then(res=>{
      this.setState({songs: res.data.songs.splice(0,12)})
    }).catch(err=>{
      console.log(err)
    })
  }
  getPopularSongs = () => {
    api.get('/music/popular').then(res=>{
      this.setState({songs: res.data.songs.splice(0,12)})
    }).catch(err=>{
      console.log(err)
    })
  }

  render() {
    return (
      <div className="card-wrapper">
        <h2 className="cards-title">
            {this.props.title}
        </h2>
        {this.props.searchResults &&  <div className="card-container">
          {this.props.searchResults?.map((song,key)=>{
            return <Card key={key} song={song} num={key}/>
          })}
        </div>}
        <div className="card-container">
          {this.state.songs?.map((song,key)=>{
            return <Card key={key} song={song} num={key}/>
          })}
        </div>
      </div>
    );
  }
}

export default CardWrap;
