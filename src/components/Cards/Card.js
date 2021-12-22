import React, { Component } from "react";
import "./card.css";
import { ReactComponent as PlayIcon } from "./play.svg";
import { ReactComponent as AddIcon } from "./add.svg";
import { ReactComponent as CloseIcon } from "./close.svg";
import {url} from '../../utils/common'
import { connect } from "react-redux";
import { addSongToPlaylist, playNow, removeSongFromPlaylist } from "../../store/Actions/PlaylistAction";
class Card extends Component {
  capitalizeWords(string) {
    return string?.replace(/(?:^|\s)\S/g, function (a) {
      return a?.toUpperCase();
    });
  }
  render() {
    return (
      <div className={this.props.col4 ? "card col-sm-4 col-12" : "card"}>
        <div className="card-image">
          <img
            src={
              this.props?.num % 2 == 0
                ? "/assets/img/card1.png"
                : "assets/img/card2.png"
            }
            alt="Liked songs"
          />
          {this.props.hideAdd ? (
            ""
          ) : (
            <div
              className="add-button"
              style={{ cursor: "pointer" }}
              data-dismiss="modal"
              onClick={() => {
                let song = this.props.song;
                song.src = url+"/music/play/" + song.id;
                this.props.addSongToPlaylist(song);
              }}
            >
              <AddIcon />
            </div>
          )}
          {this.props.remove && (
            <div
              className="remove-button"
              style={{ cursor: "pointer" }}
              data-dismiss="modal"
              onClick={() => {
                let song = this.props.song;
                song.src = url+"/music/play/" + song.id;
                this.props.removeSongFromPlaylist(song);
              }}
            >
              <CloseIcon />
            </div>
          )}
          <div
            className="play-button"
            style={{ cursor: "pointer" }}
            onClick={() => {
              let song = this.props.song;
              song.src = url+ "/music/play/" + song.id;
              this.props.playNow(song);
            }}
          >
            <PlayIcon />
          </div>
        </div>
        <div className="card-content">
          <h3>{this.capitalizeWords(this.props.song?.songName)}</h3>
          <span>
            {this.capitalizeWords(this.props.song?.artistName) +
              (this.props.song?.ftArtist != "" &&
                " ft. " + this.capitalizeWords(this.props.song?.ftArtist))}
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playlist: state.playlist.playlist,
  };
};
export default connect(mapStateToProps, { addSongToPlaylist, playNow, removeSongFromPlaylist })(Card);
