import React from "react";
import "./sidebar.css";
import { ReactComponent as HomeIcon } from "./home.svg";
import { ReactComponent as SearchIcon } from "./search.svg";
import { ReactComponent as PlaylistIcon } from "./playlist.svg";
import { ReactComponent as CloseIcon } from "./close.svg";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import {connect} from 'react-redux'
import Card from "../Cards/Card";
import Store from '../../store/Store'
class Sidebar extends React.Component {
  state = {
    open: false,
  };
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  componentDidUpdate(){
    Store.subscribe(()=>{
      this.forceUpdate()
    })
  }
  render() {
    return (
      <React.Fragment>
        <nav className="sidebar-nav">
          <div className="sidebar-welcome">
            Welcome
          </div>
          <ul className="sidebar-ul">
            <li
              className="sidebar-li"
              onClick={() => {
                this.props.goHome();
              }}
            >
              <HomeIcon />
              <span>Home</span>
            </li>
            <li
              className="sidebar-li"
              onClick={() => {
                this.props.toggleSearch();
              }}
            >
              <SearchIcon />
              <span>Search</span>
            </li>
            <li className="sidebar-li" onClick={this.onOpenModal}>
              <PlaylistIcon />
              <span>Playlist</span>
            </li>
          </ul>
        </nav>
        <Modal
          open={this.state.open}
          onClose={this.onCloseModal}
          classNames={{
            modal: "playlist-modal",
          }}
          closeIcon={< CloseIcon />}
        >
          <h2>Playing Now..</h2>
          <div className="row">
            {this.props.playlist.map((song, key)=>{
              return <Card col4={true} song={song} key={key} num={key} hideAdd={true} remove={true}/>;
            })}
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    playlist: state.playlist.playlist,
  };
};
export default connect(mapStateToProps)(Sidebar);
