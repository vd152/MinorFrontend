import React from "react";
import "./music.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { connect } from "react-redux";
import {nextSong, previousSong} from '../../store/Actions/PlaylistAction'
import Store from "../../store/Store";

class MusicPlayer extends React.Component {
  state = {
    musicTracks: [
      {
        name: "Photo Album",
        src: "http://localhost:5000/music/play/3",
      },
      {
        name:"Test",
        src: "http://localhost:5000/music/play/5"
      },
    ],
    start: true,
  };
  handleClickPrevious = () => {
    this.props.previousSong()
  }
  handleClickNext = () => {
    this.props.nextSong()
  }
  componentDidUpdate(){
    Store.subscribe(()=>{
      this.forceUpdate()
    })
  }
  render() {
    return (
      <div className="music-controls">
        <AudioPlayer
          autoPlay={false}
          // layout="horizontal"
          src={this.props.playlist[this.props.selected]?.src}
          onPlay={(e) => console.log("play")}
          showSkipControls={true}
          showJumpControls={false}
          header={this.props.playlist[this.props.selected]?.songName}
          onClickPrevious={this.handleClickPrevious}
          onClickNext={this.handleClickNext}
          onEnded={this.handleClickNext}
          listenInterval={1000}
          onListen={(e) => {
            if(e.target.currentTime.toFixed(0) >= 2 && e.target.currentTime.toFixed(0) <= 4){
              this.props.changeCapture()
              console.log("capturing.")
              setTimeout(function(){
                document.getElementById("capture-img").click()
             }, 3000);
            }
            if(e.target.currentTime.toFixed(0) >= 12 && e.target.currentTime.toFixed(0) <= 16){
              this.props.closeCapture()
            }
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playlist: state.playlist.playlist,
    selected: state.playlist.selected
  };
};
export default connect(mapStateToProps, {nextSong, previousSong})(MusicPlayer);
