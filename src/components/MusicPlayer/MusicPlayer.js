import React from "react";
import "./music.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

class MusicPlayer extends React.Component {
  state = {
    musicTracks: [
      {
        name: "Photo Album",
        src: "https://www.bensound.com/bensound-music/bensound-photoalbum.mp3",
      },
      {
        name: "November",
        //src: "https://www.bensound.com/bensound-music/bensound-november.mp3",
        src:"Adele - Hello.mp3"
      },
    ],
    start: true,
  };
  render() {
    return (
      <div className="music-controls">
        <AudioPlayer
          autoPlay={false}
          // layout="horizontal"
          src={this.state.musicTracks[1].src}
          onPlay={(e) => console.log("onPlay")}
          showSkipControls={true}
          showJumpControls={false}
          header={this.state.musicTracks[1].name}
          // onClickPrevious={handleClickPrevious}
          // onClickNext={handleClickNext}
          // onEnded={handleClickNext}
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
export default MusicPlayer;
