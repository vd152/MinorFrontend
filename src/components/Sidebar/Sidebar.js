import React from "react";
import "./sidebar.css";
class Sidebar extends React.Component {
  render() {
    return (
      <nav className="sidebar-nav">
        <ul className="sidebar-ul">
          <li className="sidebar-li">Home</li>
          <li className="sidebar-li">Search</li>
          <li className="sidebar-li">Library</li>
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
