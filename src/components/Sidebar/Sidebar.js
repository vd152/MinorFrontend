import React from "react";
import "./sidebar.css";
import { ReactComponent as HomeIcon } from "./home.svg";
import { ReactComponent as SearchIcon } from "./search.svg";
import { ReactComponent as PlaylistIcon } from "./playlist.svg";

class Sidebar extends React.Component {
  render() {
    return (
      <nav className="sidebar-nav">
        <div style={{ padding: "0 4.2rem 1.2rem 0.8rem", color: "white" }}>
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
            Home
          </li>
          <li
            className="sidebar-li"
            onClick={() => {
              this.props.toggleSearch();
            }}
          >
            <SearchIcon />
            Search
          </li>
          <li className="sidebar-li">
            <PlaylistIcon />
            Playlist
          </li>
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
