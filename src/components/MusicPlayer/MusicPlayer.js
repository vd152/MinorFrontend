import React from "react";
import "./music.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { connect } from "react-redux";

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
    selectedtrack: 1,
    start: true,
  };
  componentDidMount(){
    console.log(this.props.playlist)
  }
  handleClickPrevious = () => {
    this.setState({selectedtrack: this.state.selectedtrack == 0? this.state.selectedtrack : this.state.selectedtrack -1})
  }
  handleClickNext = () => {
    this.setState({selectedtrack: this.state.selectedtrack == this.state.musicTracks.length-1? this.state.selectedtrack : this.state.selectedtrack + 1})
  }
  render() {
    return (
      <div className="music-controls">
        <AudioPlayer
          autoPlay={false}
          // layout="horizontal"
          src={this.state.musicTracks[this.state.selectedtrack].src}
          onPlay={(e) => console.log("onPlay")}
          showSkipControls={true}
          showJumpControls={false}
          header={this.state.musicTracks[this.state.selectedtrack].name}
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
    playlist: state.playlist.playlist
  };
};
export default connect(mapStateToProps)(MusicPlayer);
