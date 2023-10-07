import React from "react";
import "./music.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { connect } from "react-redux";
import { nextSong, previousSong } from "../../store/Actions/PlaylistAction";
import Store from "../../store/Store";

//contains the player and controllers for audio
class MusicPlayer extends React.Component {
  capitalizeWords(string) {
    return string?.replace(/(?:^|\s)\S/g, function (a) {
      return a?.toUpperCase();
    });
  }
  state = {
    start: true,
  };
  handleClickPrevious = () => {
    this.props.previousSong();
    this.setState({ start: true });
  };
  handleClickNext = () => {
    this.props.nextSong();
    this.setState({ start: true });
  };
  componentDidUpdate() {
    Store.subscribe(() => {
      this.forceUpdate();
    });
  }
  render() {
    return (
      <div className="music-controls">
        <AudioPlayer
          autoPlay={false}
          // layout="horizontal"
          src={this.props.playlist[this.props.selected]?.src}
          volume={0.2}
          onPlay={(e) => {
            this.setState({start: true});
            console.log("play");
          }}
          showSkipControls={true}
          showJumpControls={false}
          header={this.capitalizeWords(
            this.props.playlist[this.props.selected]?.songName
          )}
          onClickPrevious={this.handleClickPrevious}
          onClickNext={this.handleClickNext}
          onEnded={this.handleClickNext}
          listenInterval={1000}
          onListen={(e) => {
            if (
              this.state.start &&
              e.target.currentTime.toFixed(0) >= 2 &&
              e.target.currentTime.toFixed(0) <= 4
            ) {
              this.props.openCapture();
              console.log("capturing.");
              setTimeout(function () {
                console.log("capturing now");
                document.getElementById("capture-img").click();
              }, 3500);
              this.setState({ start: false });
            }
            if (
              e.target.currentTime.toFixed(0) >= 8 &&
              e.target.currentTime.toFixed(0) <= 16
            ) {
              this.props.closeCapture();
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
    selected: state.playlist.selected,
  };
};
export default connect(mapStateToProps, { nextSong, previousSong })(
  MusicPlayer
);
