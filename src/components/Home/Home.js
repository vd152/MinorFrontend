import React, { Component } from "react";
import Main from "../Main/Main";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import Sidebar from "../Sidebar/Sidebar";
import "./home.css";
import {WebcamComponent as Webcam}  from "../Webcam/Webcam";
import {connect} from 'react-redux'
import {initplaylist,addEmotionSong} from '../../store/Actions/PlaylistAction'
class Home extends Component {
  state={
    capture: false,
    search: false
  }
  componentDidMount(){
    this.props.initplaylist()
  }
  setPlaylist = (playlist)=>{
    this.props.addEmotionSong(playlist)
  }
  openCapture = () =>{
    this.setState({capture: true});
  }
  closeCapture = () =>{
    this.setState({capture: false});
  }
  toggleSearch = () =>{
    this.setState({search: !this.state.search});
  }
  render() {
    return (
      <div className="outer-wrapper">
          {this.state.capture && <Webcam setPlaylist={this.setPlaylist}/>}
        <div className="container-main">
          <Sidebar toggleSearch={this.toggleSearch} goHome={()=>this.setState({search: false})}/>
          <Main search={this.state.search} toggleSearch={this.toggleSearch}/>
        </div>
        <MusicPlayer openCapture={this.openCapture} closeCapture={this.closeCapture}/>
      </div>
    );
  }
}
  
export default connect(null,{initplaylist,addEmotionSong})(Home);
