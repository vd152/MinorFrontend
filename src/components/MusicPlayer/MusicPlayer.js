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
        src: "https://www.bensound.com/bensound-music/bensound-november.mp3",
      },
    ],
  };
  render() {
    return (
      <div className="music-controls">
        <AudioPlayer
          autoPlay={false}
          // layout="horizontal"
          src={this.state.musicTracks[0].src}
          onPlay={(e) => console.log("onPlay")}
          showSkipControls={true}
          showJumpControls={false}
          header={this.state.musicTracks[0].name}
          // onClickPrevious={handleClickPrevious}
          // onClickNext={handleClickNext}
          // onEnded={handleClickNext}
          listenInterval={5000}
          onListen={(listen) => {
            console.log(1);
          }}
        />
      </div>
    );
  }
}
export default MusicPlayer;
